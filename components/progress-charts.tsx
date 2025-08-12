"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
} from "recharts"

type Grade = "P" | "M" | "D" | ""

interface ProgressChartsProps {
  year1Grades: Grade[]
  year2Grades: Grade[]
  sharedGrades: Grade[]
  finalGrade: number
  year1Average: number
  year2Average: number
  sharedAverage: number
}

const gradeValues = {
  P: 60,
  M: 80,
  D: 100,
}

const gradeColors = {
  P: "#f59e0b", 
  M: "#3b82f6", 
  D: "#10b981", 
}

export function ProgressCharts({
  year1Grades,
  year2Grades,
  sharedGrades,
  finalGrade,
  year1Average,
  year2Average,
  sharedAverage,
}: ProgressChartsProps) {
  const gradeDistribution = [
    {
      grade: "P (Pass)",
      year1: year1Grades.filter((g) => g === "P").length,
      year2: year2Grades.filter((g) => g === "P").length,
      shared: sharedGrades.filter((g) => g === "P").length,
    },
    {
      grade: "M (Merit)",
      year1: year1Grades.filter((g) => g === "M").length,
      year2: year2Grades.filter((g) => g === "M").length,
      shared: sharedGrades.filter((g) => g === "M").length,
    },
    {
      grade: "D (Distinction)",
      year1: year1Grades.filter((g) => g === "D").length,
      year2: year2Grades.filter((g) => g === "D").length,
      shared: sharedGrades.filter((g) => g === "D").length,
    },
  ]

  const sectionAverages = [
    {
      section: " الاول ثانوي",
      average: year1Average,
      weight: 35,
      contribution: year1Average * 0.35,
      fill: "#3b82f6",
    },
    {
      section: " الثاني ثانوي",
      average: year2Average,
      weight: 35,
      contribution: year2Average * 0.35,
      fill: "#6366f1",
    },
    {
      section: " المواد المشتركة",
      average: sharedAverage,
      weight: 30,
      contribution: sharedAverage * 0.3,
      fill: "#8b5cf6",
    },
  ]

  const progressData = [
    {
      name: "التقدم الحالي",
      value: finalGrade,
      fill:
        finalGrade >= 85
          ? "#10b981"
          : finalGrade >= 75
            ? "#3b82f6"
            : finalGrade >= 65
              ? "#6366f1"
              : finalGrade >= 60
                ? "#f59e0b"
                : "#ef4444",
    },
  ]

  const allGrades = [...year1Grades, ...year2Grades, ...sharedGrades].filter((g) => g !== "")
  const pieData = [
    {
      name: "Pass (P)",
      value: allGrades.filter((g) => g === "P").length,
      fill: gradeColors.P,
    },
    {
      name: "Merit (M)",
      value: allGrades.filter((g) => g === "M").length,
      fill: gradeColors.M,
    },
    {
      name: "Distinction (D)",
      value: allGrades.filter((g) => g === "D").length,
      fill: gradeColors.D,
    },
  ].filter((item) => item.value > 0)

  return (
    <div className="w-full max-w-full overflow-hidden">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
        {/* Grade Distribution Bar Chart */}
        <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl w-full">
          <CardHeader className="pb-2 sm:pb-4">
            <CardTitle className="text-base sm:text-lg font-bold text-gray-800 dark:text-gray-200 text-center">
              توزيع الدرجات حسب المرحلة
            </CardTitle>
          </CardHeader>
          <CardContent className="p-2 sm:p-6">
            <div className="w-full h-[180px] sm:h-[200px]">
              <ChartContainer
                config={{
                  year1: {
                    label: " الاول ثانوي",
                    color: "#3b82f6",
                  },
                  year2: {
                    label: "الثاني ثانوي",
                    color: "#6366f1",
                  },
                  shared: {
                    label: "المواد المشترك",
                    color: "#8b5cf6",
                  },
                }}
                className="w-full h-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={gradeDistribution} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                    <XAxis dataKey="grade" fontSize={10} tick={{ fontSize: 10 }} interval={0} />
                    <YAxis fontSize={10} tick={{ fontSize: 10 }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="year1" fill="#3b82f6" name="الاول ثانوي " />
                    <Bar dataKey="year2" fill="#6366f1" name="الثاني ثانوي " />
                    <Bar dataKey="shared" fill="#8b5cf6" name="المواد المشتركة " />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        {/* Section Averages Chart */}
        <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl w-full">
          <CardHeader className="pb-2 sm:pb-4">
            <CardTitle className="text-base sm:text-lg font-bold text-gray-800 dark:text-gray-200 text-center">
              متوسط الدرجات والمساهمة
            </CardTitle>
          </CardHeader>
          <CardContent className="p-2 sm:p-6">
            <div className="w-full h-[180px] sm:h-[200px]">
              <ChartContainer
                config={{
                  average: {
                    label: "المتوسط",
                    color: "#3b82f6",
                  },
                  contribution: {
                    label: "المساهمة",
                    color: "#10b981",
                  },
                }}
                className="w-full h-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sectionAverages} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                    <XAxis dataKey="section" fontSize={10} tick={{ fontSize: 10 }} interval={0} />
                    <YAxis fontSize={10} tick={{ fontSize: 10 }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="average" fill="#3b82f6" name="المتوسط %" />
                    <Bar dataKey="contribution" fill="#10b981" name="المساهمة في المعدل" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        {/* Progress Radial Chart */}
        <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl w-full">
          <CardHeader className="pb-2 sm:pb-4">
            <CardTitle className="text-base sm:text-lg font-bold text-gray-800 dark:text-gray-200 text-center">
              مؤشر التقدم
            </CardTitle>
          </CardHeader>
          <CardContent className="p-2 sm:p-6">
            <div className="w-full h-[180px] sm:h-[200px]">
              <ChartContainer
                config={{
                  value: {
                    label: "النسبة المئوية",
                    color: "#3b82f6",
                  },
                }}
                className="w-full h-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="90%" data={progressData}>
                    <RadialBar dataKey="value" cornerRadius={10} fill={progressData[0].fill} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="fill-current text-lg sm:text-2xl font-bold"
                    >
                      {finalGrade.toFixed(1)}%
                    </text>
                  </RadialBarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        {/* Overall Grade Distribution Pie Chart */}
        {pieData.length > 0 && (
          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl w-full">
            <CardHeader className="pb-2 sm:pb-4">
              <CardTitle className="text-base sm:text-lg font-bold text-gray-800 dark:text-gray-200 text-center">
                التوزيع العام للدرجات
              </CardTitle>
            </CardHeader>
            <CardContent className="p-2 sm:p-6">
              <div className="w-full h-[180px] sm:h-[200px]">
                <ChartContainer
                  config={{
                    P: {
                      label: "Pass",
                      color: gradeColors.P,
                    },
                    M: {
                      label: "Merit",
                      color: gradeColors.M,
                    },
                    D: {
                      label: "Distinction",
                      color: gradeColors.D,
                    },
                  }}
                  className="w-full h-full"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        outerRadius={60}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}`}
                        labelLine={false}
                        fontSize={10}
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
