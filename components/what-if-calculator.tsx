"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type Grade = "P" | "M" | "D" | ""

interface GradeValues {
  P: number
  M: number
  D: number
}

const gradeValues: GradeValues = {
  P: 60,
  M: 80,
  D: 100,
}

export function WhatIfCalculator() {
  const [targetGrade, setTargetGrade] = useState<number>(75)
  const [year1Grades, setYear1Grades] = useState<Grade[]>(Array(5).fill("P"))
  const [year2Grades, setYear2Grades] = useState<Grade[]>(Array(4).fill("P"))
  const [sharedGrades, setSharedGrades] = useState<Grade[]>(Array(4).fill("P"))
  const [recommendations, setRecommendations] = useState<{
    year1Required: number
    year2Required: number
    sharedRequired: number
    achievable: boolean
    message: string
  } | null>(null)

  const calculateAverage = (grades: Grade[]): number => {
    const validGrades = grades.filter((grade) => grade !== "")
    if (validGrades.length === 0) return 0

    const total = validGrades.reduce((sum, grade) => sum + gradeValues[grade], 0)
    return total / validGrades.length
  }

  const calculateWhatIf = () => {
    const year1Average = calculateAverage(year1Grades)
    const year2Average = calculateAverage(year2Grades)
    const sharedAverage = calculateAverage(sharedGrades)

    // Count completed subjects
    const year1Completed = year1Grades.filter((g) => g !== "").length
    const year2Completed = year2Grades.filter((g) => g !== "").length
    const sharedCompleted = sharedGrades.filter((g) => g !== "").length

    // Calculate current contribution
    const year1Contribution = year1Completed > 0 ? ((year1Average * year1Completed) / 5) * 0.35 : 0
    const year2Contribution = year2Completed > 0 ? ((year2Average * year2Completed) / 4) * 0.35 : 0
    const sharedContribution = sharedCompleted > 0 ? ((sharedAverage * sharedCompleted) / 4) * 0.3 : 0

    const currentTotal = year1Contribution + year2Contribution + sharedContribution

    // Calculate remaining requirements
    const remainingNeeded = targetGrade - currentTotal
    const year1Remaining = 5 - year1Completed
    const year2Remaining = 4 - year2Completed
    const sharedRemaining = 4 - sharedCompleted

    const totalRemaining = year1Remaining + year2Remaining + sharedRemaining

    if (totalRemaining === 0) {
      const currentGrade = year1Average * 0.35 + year2Average * 0.35 + sharedAverage * 0.3
      setRecommendations({
        year1Required: year1Average,
        year2Required: year2Average,
        sharedRequired: sharedAverage,
        achievable: currentGrade >= targetGrade,
        message:
          currentGrade >= targetGrade
            ? `تهانينا! لقد حققت هدفك بالفعل بمعدل ${currentGrade.toFixed(1)}%`
            : `للأسف، معدلك الحالي ${currentGrade.toFixed(1)}% أقل من الهدف المطلوب`,
      })
      return
    }

    // Calculate required averages for remaining subjects
    const year1RequiredTotal =
      year1Remaining > 0
        ? (((targetGrade * 0.35) / 5 - ((year1Contribution / 0.35) * 5 - year1Average * year1Completed)) /
            year1Remaining) *
          5
        : year1Average

    const year2RequiredTotal =
      year2Remaining > 0
        ? (((targetGrade * 0.35) / 4 - ((year2Contribution / 0.35) * 4 - year2Average * year2Completed)) /
            year2Remaining) *
          4
        : year2Average

    const sharedRequiredTotal =
      sharedRemaining > 0
        ? (((targetGrade * 0.3) / 4 - ((sharedContribution / 0.3) * 4 - sharedAverage * sharedCompleted)) /
            sharedRemaining) *
          4
        : sharedAverage

    // Simplified calculation for better accuracy
    const remainingWeight = (year1Remaining / 5) * 0.35 + (year2Remaining / 4) * 0.35 + (sharedRemaining / 4) * 0.3
    const averageRequired = remainingWeight > 0 ? remainingNeeded / remainingWeight : 0

    const achievable = averageRequired <= 100

    setRecommendations({
      year1Required: year1Remaining > 0 ? Math.max(60, averageRequired) : year1Average,
      year2Required: year2Remaining > 0 ? Math.max(60, averageRequired) : year2Average,
      sharedRequired: sharedRemaining > 0 ? Math.max(60, averageRequired) : sharedAverage,
      achievable,
      message: achievable
        ? `يمكنك تحقيق هدفك! تحتاج لمعدل ${averageRequired.toFixed(1)}% في المواد المتبقية`
        : `الهدف صعب التحقيق. تحتاج لمعدل ${averageRequired.toFixed(1)}% في المواد المتبقية`,
    })
  }

  useEffect(() => {
    calculateWhatIf()
  }, [targetGrade, year1Grades, year2Grades, sharedGrades])

  const updateGrade = (section: "year1" | "year2" | "shared", index: number, grade: Grade) => {
    if (section === "year1") {
      const newGrades = [...year1Grades]
      newGrades[index] = grade
      setYear1Grades(newGrades)
    } else if (section === "year2") {
      const newGrades = [...year2Grades]
      newGrades[index] = grade
      setYear2Grades(newGrades)
    } else {
      const newGrades = [...sharedGrades]
      newGrades[index] = grade
      setSharedGrades(newGrades)
    }
  }

  const resetCalculator = () => {
    setYear1Grades(Array(5).fill("P"))
    setYear2Grades(Array(4).fill("P"))
    setSharedGrades(Array(4).fill("P"))
    setTargetGrade(75)
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Target Grade Input */}
      <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent">
            حاسبة "ماذا لو" - خطط لهدفك
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <label className="text-lg font-semibold text-gray-700 dark:text-gray-300">الهدف المطلوب:</label>
            <div className="flex items-center gap-2">
              <Input
                type="number"
                min="60"
                max="100"
                value={targetGrade}
                onChange={(e) => setTargetGrade(Number(e.target.value))}
                className="w-20 text-center text-lg font-bold"
              />
              <span className="text-lg font-semibold text-gray-600 dark:text-gray-400">%</span>
            </div>
            <Button onClick={resetCalculator} variant="outline" className="ml-4 bg-transparent">
              إعادة تعيين
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Year 1 Subjects */}
        <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-t-lg">
            <CardTitle className="text-right flex justify-between items-center text-lg">
              <span> الآول ثانوي (الدرجات الحالية)</span>
              <Badge className="bg-white/20 text-white border-white/30">35%</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {year1Grades.map((grade, index) => (
                <div key={index} className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-right block">
                    المادة {index + 1}
                  </label>
                  <Select value={grade} onValueChange={(value: Grade) => updateGrade("year1", index, value)}>
                    <SelectTrigger className="bg-white dark:bg-gray-700 border-2 hover:border-blue-300 transition-colors">
                      <SelectValue placeholder="اختر الدرجة (اختياري)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="P">P (60%) - Pass</SelectItem>
                      <SelectItem value="M">M (80%) - Merit</SelectItem>
                      <SelectItem value="D">D (100%) - Distinction</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Year 2 Subjects */}
        <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
          <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-lg">
            <CardTitle className="text-right flex justify-between items-center text-lg">
              <span> الثاني ثانوي  (الدرجات الحالية)</span>
              <Badge className="bg-white/20 text-white border-white/30">35%</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {year2Grades.map((grade, index) => (
                <div key={index} className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-right block">
                    المادة {index + 1}
                  </label>
                  <Select value={grade} onValueChange={(value: Grade) => updateGrade("year2", index, value)}>
                    <SelectTrigger className="bg-white dark:bg-gray-700 border-2 hover:border-indigo-300 transition-colors">
                      <SelectValue placeholder="اختر الدرجة (اختياري)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="P">P (60%) - Pass</SelectItem>
                      <SelectItem value="M">M (80%) - Merit</SelectItem>
                      <SelectItem value="D">D (100%) - Distinction</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Shared Exam */}
        <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
            <CardTitle className="text-right flex justify-between items-center text-lg">
              <span> المواد المشتركة (الدرجات الحالية)</span>
              <Badge className="bg-white/20 text-white border-white/30">30%</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {sharedGrades.map((grade, index) => (
                <div key={index} className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-right block">
                    المواد المشتركة {index + 1}
                  </label>
                  <Select value={grade} onValueChange={(value: Grade) => updateGrade("shared", index, value)}>
                    <SelectTrigger className="bg-white dark:bg-gray-700 border-2 hover:border-purple-300 transition-colors">
                      <SelectValue placeholder="اختر الدرجة (اختياري)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="P">P (60%) - Pass</SelectItem>
                      <SelectItem value="M">M (80%) - Merit</SelectItem>
                      <SelectItem value="D">D (100%) - Distinction</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recommendations */}
      {recommendations && (
        <Card
          className={`backdrop-blur-sm border-0 shadow-2xl ${
            recommendations.achievable ? "bg-green-50/80 dark:bg-green-900/20" : "bg-red-50/80 dark:bg-red-900/20"
          }`}
        >
          <CardHeader className="text-center pb-6">
            <CardTitle
              className={`text-2xl font-bold ${
                recommendations.achievable ? "text-green-800 dark:text-green-300" : "text-red-800 dark:text-red-300"
              }`}
            >
              التوصيات والنصائح
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <div
                className={`text-xl font-semibold p-4 rounded-xl ${
                  recommendations.achievable
                    ? "bg-green-100 dark:bg-green-800/30 text-green-800 dark:text-green-300"
                    : "bg-red-100 dark:bg-red-800/30 text-red-800 dark:text-red-300"
                }`}
              >
                {recommendations.message}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-white/60 dark:bg-gray-800/60 p-4 rounded-xl border border-blue-200 dark:border-blue-700">
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">المطلوب -  الأول ثانوي</div>
                  <div className="text-2xl font-bold text-blue-800 dark:text-blue-300">
                    {recommendations.year1Required.toFixed(1)}%
                  </div>
                  <div className="text-xs text-blue-500 dark:text-blue-400">متوسط المواد المتبقية</div>
                </div>
                <div className="bg-white/60 dark:bg-gray-800/60 p-4 rounded-xl border border-indigo-200 dark:border-indigo-700">
                  <div className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                    المطلوب - الثاني ثانوي 
                  </div>
                  <div className="text-2xl font-bold text-indigo-800 dark:text-indigo-300">
                    {recommendations.year2Required.toFixed(1)}%
                  </div>
                  <div className="text-xs text-indigo-500 dark:text-indigo-400">متوسط المواد المتبقية</div>
                </div>
                <div className="bg-white/60 dark:bg-gray-800/60 p-4 rounded-xl border border-purple-200 dark:border-purple-700">
                  <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                    المطلوب - المواد المشتركة 
                  </div>
                  <div className="text-2xl font-bold text-purple-800 dark:text-purple-300">
                    {recommendations.sharedRequired.toFixed(1)}%
                  </div>
                  <div className="text-xs text-purple-500 dark:text-purple-400">متوسط المواد المتبقية</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
