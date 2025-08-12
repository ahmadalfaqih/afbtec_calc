"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WhatIfCalculator } from "./what-if-calculator";
import { PDFExport } from "./pdf-export";
import { ProgressCharts } from "./progress-charts";

type Grade = "P" | "M" | "D" | "";

interface GradeValues {
  P: number;
  M: number;
  D: number;
}

const gradeValues: GradeValues = {
  P: 60,
  M: 80,
  D: 100,
};

export function BTECCalculator() {
  // Year 1: 5 subjects
  const [year1Grades, setYear1Grades] = useState<Grade[]>(Array(5).fill(""));
  // Year 2: 4 subjects
  const [year2Grades, setYear2Grades] = useState<Grade[]>(Array(4).fill(""));
  // Shared exam: 4 subjects
  const [sharedGrades, setSharedGrades] = useState<Grade[]>(Array(4).fill(""));

  const [finalGrade, setFinalGrade] = useState<number>(0);
  // Added animation states for smooth transitions
  const [isCalculating, setIsCalculating] = useState(false);
  const [animatedGrade, setAnimatedGrade] = useState<number>(0);

  const calculateAverage = (grades: Grade[]): number => {
    const validGrades = grades.filter((grade) => grade !== "");
    if (validGrades.length === 0) return 0;

    const total = validGrades.reduce(
      (sum, grade) => sum + gradeValues[grade],
      0
    );
    return total / validGrades.length;
  };

  const calculateFinalGrade = () => {
    const year1Average = calculateAverage(year1Grades);
    const year2Average = calculateAverage(year2Grades);
    const sharedAverage = calculateAverage(sharedGrades);

    // Year 1: 35%, Year 2: 35%, Shared: 30%
    const final =
      year1Average * 0.35 + year2Average * 0.35 + sharedAverage * 0.3;

    // Added animation for grade calculation
    if (final !== finalGrade) {
      setIsCalculating(true);
      setTimeout(() => {
        setFinalGrade(final);
        // Animate the grade number
        const duration = 1000;
        const steps = 50;
        const increment = (final - animatedGrade) / steps;
        let currentStep = 0;

        const animate = () => {
          if (currentStep < steps) {
            setAnimatedGrade((prev) => prev + increment);
            currentStep++;
            requestAnimationFrame(animate);
          } else {
            setAnimatedGrade(final);
            setIsCalculating(false);
          }
        };
        animate();
      }, 200);
    }
  };

  useEffect(() => {
    calculateFinalGrade();
  }, [year1Grades, year2Grades, sharedGrades]);

  const updateGrade = (
    section: "year1" | "year2" | "shared",
    index: number,
    grade: Grade
  ) => {
    if (section === "year1") {
      const newGrades = [...year1Grades];
      newGrades[index] = grade;
      setYear1Grades(newGrades);
    } else if (section === "year2") {
      const newGrades = [...year2Grades];
      newGrades[index] = grade;
      setYear2Grades(newGrades);
    } else {
      const newGrades = [...sharedGrades];
      newGrades[index] = grade;
      setSharedGrades(newGrades);
    }
  };

  const getFinalGradeStatus = (grade: number) => {
    if (grade >= 85)
      return {
        text: "ممتاز جداً",
        color: "bg-gradient-to-r from-green-500 to-emerald-500",
        icon: "🏆",
      };
    if (grade >= 75)
      return {
        text: "ممتاز",
        color: "bg-gradient-to-r from-blue-500 to-cyan-500",
        icon: "⭐",
      };
    if (grade >= 65)
      return {
        text: "جيد جداً",
        color: "bg-gradient-to-r from-indigo-500 to-purple-500",
        icon: "👍",
      };
    if (grade >= 60)
      return {
        text: "جيد",
        color: "bg-gradient-to-r from-yellow-500 to-orange-500",
        icon: "✓",
      };
    return {
      text: "يحتاج تحسين",
      color: "bg-gradient-to-r from-red-500 to-pink-500",
      icon: "📚",
    };
  };

  return (
    <div
      className="max-w-6xl mx-auto space-y-6 sm:space-y-8 px-4 sm:px-0"
      id="calculator"
    >
      <Tabs defaultValue="calculator" className="w-full">
        {/* Improved mobile responsiveness for tabs */}
        <TabsList className="grid w-full grid-cols-2 mb-6 sm:mb-8 h-12 sm:h-auto">
          <TabsTrigger
            value="calculator"
            className="text-sm sm:text-lg font-semibold py-2 sm:py-3"
          >
            الحاسبة العادية
          </TabsTrigger>
          <TabsTrigger
            value="whatif"
            className="text-sm sm:text-lg font-semibold py-2 sm:py-3"
          >
            حاسبة "ماذا لو"
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calculator" className="space-y-6 sm:space-y-8">
          {/* Grade Legend */}
          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <CardHeader className="text-center pb-3 sm:pb-4 px-4 sm:px-6">
              <CardTitle className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                دليل الدرجات
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              {/* Improved mobile layout for grade legend */}
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6">
                <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/30 dark:to-amber-900/30 px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-yellow-200 dark:border-yellow-700 transform transition-all duration-200 hover:scale-105">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-sm sm:text-base text-yellow-800 dark:text-yellow-300">
                    P = 60%
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-blue-200 dark:border-blue-700 transform transition-all duration-200 hover:scale-105">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-sm sm:text-base text-blue-800 dark:text-blue-300">
                    M = 80%
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-green-200 dark:border-green-700 transform transition-all duration-200 hover:scale-105">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-sm sm:text-base text-green-800 dark:text-green-300">
                    D = 100%
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Improved mobile grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Year 1 Subjects */}
            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] animate-in slide-in-from-left-5 duration-700">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-t-lg px-4 sm:px-6 py-3 sm:py-4">
                <CardTitle className="text-right flex flex-col sm:flex-row justify-between items-start sm:items-center text-base sm:text-lg gap-2 sm:gap-0">
                  <span> الأول ثانوي</span>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Badge className="bg-white/20 text-white border-white/30 text-xs sm:text-sm">
                      35%
                    </Badge>
                    <Badge className="bg-white/20 text-white border-white/30 text-xs sm:text-sm animate-pulse">
                      {calculateAverage(year1Grades).toFixed(1)}%
                    </Badge>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-3 sm:space-y-4">
                  {year1Grades.map((grade, index) => (
                    <div
                      key={index}
                      className="space-y-2 transform transition-all duration-300 hover:scale-[1.02]"
                    >
                      <label className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 text-right block">
                        {
                          [
                            "أنظمة تكنولوجيا المعلومات الإستراتيجية والإدارة والبنية الأساسية",
                            "تطوير المواقع الإلكترونية",
                            "تطوير تطبيقات الهاتف المحمول",
                            "الدعم الفني والإدارة لتكنولوجيا المعلومات",
                            "تطوير ألعاب الحاسوب",
                          ][index]
                        }
                      </label>
                      <Select
                        value={grade}
                        onValueChange={(value: Grade) =>
                          updateGrade("year1", index, value)
                        }
                      >
                        <SelectTrigger className="bg-white dark:bg-gray-700 border-2 hover:border-blue-300 transition-all duration-300 h-10 sm:h-11 text-sm sm:text-base">
                          <SelectValue placeholder="اختر الدرجة" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="P">P (60%) - Pass</SelectItem>
                          <SelectItem value="M">M (80%) - Merit</SelectItem>
                          <SelectItem value="D">
                            D (100%) - Distinction
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Year 2 Subjects */}
            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] animate-in slide-in-from-bottom-5 duration-700 delay-150">
              <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-lg px-4 sm:px-6 py-3 sm:py-4">
                <CardTitle className="text-right flex flex-col sm:flex-row justify-between items-start sm:items-center text-base sm:text-lg gap-2 sm:gap-0">
                  <span> الثاني الثانوي (التوجيهي) </span>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Badge className="bg-white/20 text-white border-white/30 text-xs sm:text-sm">
                      35%
                    </Badge>
                    <Badge className="bg-white/20 text-white border-white/30 text-xs sm:text-sm animate-pulse">
                      {calculateAverage(year2Grades).toFixed(1)}%
                    </Badge>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-3 sm:space-y-4">
                  {year2Grades.map((grade, index) => (
                    <div
                      key={index}
                      className="space-y-2 transform transition-all duration-300 hover:scale-[1.02]"
                    >
                      <label className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 text-right block">
                        {
                          [
                            "الآمن السيبراني وإدارة الحوادث",
                            "البرمجة",
                            "إدارة مشاريع تكنولوجيا المعلومات",
                            "مقدمة في الذكاء الاصطناعي",
                          ][index]
                        }
                      </label>
                      <Select
                        value={grade}
                        onValueChange={(value: Grade) =>
                          updateGrade("year2", index, value)
                        }
                      >
                        <SelectTrigger className="bg-white dark:bg-gray-700 border-2 hover:border-indigo-300 transition-all duration-300 h-10 sm:h-11 text-sm sm:text-base">
                          <SelectValue placeholder="اختر الدرجة" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="P">P (60%) - Pass</SelectItem>
                          <SelectItem value="M">M (80%) - Merit</SelectItem>
                          <SelectItem value="D">
                            D (100%) - Distinction
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Shared Exam */}
            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] animate-in slide-in-from-right-5 duration-700 delay-300">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg px-4 sm:px-6 py-3 sm:py-4">
                <CardTitle className="text-right flex flex-col sm:flex-row justify-between items-start sm:items-center text-base sm:text-lg gap-2 sm:gap-0">
                  <span> المواد المشتركة</span>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Badge className="bg-white/20 text-white border-white/30 text-xs sm:text-sm">
                      30%
                    </Badge>
                    <Badge className="bg-white/20 text-white border-white/30 text-xs sm:text-sm animate-pulse">
                      {calculateAverage(sharedGrades).toFixed(1)}%
                    </Badge>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-3 sm:space-y-4">
                  {sharedGrades.map((grade, index) => (
                    <div
                      key={index}
                      className="space-y-2 transform transition-all duration-300 hover:scale-[1.02]"
                    >
                      <label className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 text-right block">
                        {
                          [
                            "اللغة الإنجليزية",
                            "اللغة العربية",
                            "تاريخ الأردن",
                            "التربية الإسلامية",
                          ][index]
                        }
                      </label>
                      <Select
                        value={grade}
                        onValueChange={(value: Grade) =>
                          updateGrade("shared", index, value)
                        }
                      >
                        <SelectTrigger className="bg-white dark:bg-gray-700 border-2 hover:border-purple-300 transition-all duration-300 h-10 sm:h-11 text-sm sm:text-base">
                          <SelectValue placeholder="اختر الدرجة" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="P">P (60%) - Pass</SelectItem>
                          <SelectItem value="M">M (80%) - Merit</SelectItem>
                          <SelectItem value="D">
                            D (100%) - Distinction
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Final Result */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl transform transition-all duration-500 hover:scale-[1.01] animate-in fade-in-50 slide-in-from-bottom-10 duration-1000 delay-500">
            <CardHeader className="text-center pb-4 sm:pb-6 px-4 sm:px-8">
              <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                المعدل النهائي
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-8">
              <div className="text-center space-y-4 sm:space-y-6">
                <div className="relative">
                  {/* Added animated grade display with loading state */}
                  <div
                    className={`text-5xl sm:text-7xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent transition-all duration-1000 ${
                      isCalculating ? "animate-pulse scale-110" : "scale-100"
                    }`}
                  >
                    {isCalculating ? (
                      <div className="flex items-center justify-center">
                        <div className="w-8 h-8 sm:w-12 sm:h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    ) : (
                      `${animatedGrade.toFixed(1)}%`
                    )}
                  </div>
                  {!isCalculating && (
                    <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 text-xl sm:text-2xl animate-bounce">
                      {getFinalGradeStatus(finalGrade).icon}
                    </div>
                  )}
                </div>

                {!isCalculating && (
                  <div
                    className={`inline-flex items-center space-x-3 rtl:space-x-reverse ${
                      getFinalGradeStatus(finalGrade).color
                    } text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-lg sm:text-xl font-bold shadow-lg transform transition-all duration-500 hover:scale-105 animate-in slide-in-from-bottom-5 duration-700`}
                  >
                    <span className="text-xl sm:text-2xl animate-pulse">
                      {getFinalGradeStatus(finalGrade).icon}
                    </span>
                    <span>{getFinalGradeStatus(finalGrade).text}</span>
                  </div>
                )}

                {/* Improved mobile grid for breakdown */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-3 sm:p-4 rounded-xl border border-blue-200 dark:border-blue-700 transform transition-all duration-300 hover:scale-105 animate-in slide-in-from-left-5 duration-500 delay-700">
                    <div className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-medium">
                      السنة الأولى
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-blue-800 dark:text-blue-300">
                      {(calculateAverage(year1Grades) * 0.35).toFixed(1)}
                    </div>
                    <div className="text-xs text-blue-500 dark:text-blue-400">
                      نقطة من 35
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 p-3 sm:p-4 rounded-xl border border-indigo-200 dark:border-indigo-700 transform transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom-5 duration-500 delay-800">
                    <div className="text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                      السنة الثانية
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-indigo-800 dark:text-indigo-300">
                      {(calculateAverage(year2Grades) * 0.35).toFixed(1)}
                    </div>
                    <div className="text-xs text-indigo-500 dark:text-indigo-400">
                      نقطة من 35
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-3 sm:p-4 rounded-xl border border-purple-200 dark:border-purple-700 transform transition-all duration-300 hover:scale-105 animate-in slide-in-from-right-5 duration-500 delay-900">
                    <div className="text-xs sm:text-sm text-purple-600 dark:text-purple-400 font-medium">
                      الامتحان المشترك
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-purple-800 dark:text-purple-300">
                      {(calculateAverage(sharedGrades) * 0.3).toFixed(1)}
                    </div>
                    <div className="text-xs text-purple-500 dark:text-purple-400">
                      نقطة من 30
                    </div>
                  </div>
                </div>

                {finalGrade > 0 && (
                  <div className="animate-in fade-in-50 slide-in-from-bottom-10 duration-1000 delay-1000">
                    <ProgressCharts
                      year1Grades={year1Grades}
                      year2Grades={year2Grades}
                      sharedGrades={sharedGrades}
                      finalGrade={finalGrade}
                      year1Average={calculateAverage(year1Grades)}
                      year2Average={calculateAverage(year2Grades)}
                      sharedAverage={calculateAverage(sharedGrades)}
                    />
                  </div>
                )}

                {finalGrade > 0 && (
                  <div className="mt-6 sm:mt-8 animate-in fade-in-50 slide-in-from-bottom-10 duration-1000 delay-1200">
                    <PDFExport
                      year1Grades={year1Grades}
                      year2Grades={year2Grades}
                      sharedGrades={sharedGrades}
                      finalGrade={finalGrade}
                      year1Average={calculateAverage(year1Grades)}
                      year2Average={calculateAverage(year2Grades)}
                      sharedAverage={calculateAverage(sharedGrades)}
                    />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="whatif">
          <WhatIfCalculator />
        </TabsContent>
      </Tabs>
    </div>
  );
}
