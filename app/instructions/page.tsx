import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Instructions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-emerald-800 bg-clip-text text-transparent mb-4">
              دليل الإرشادات
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              تعلم كيفية حساب معدلك في BTEC IT خطوة بخطوة
            </p>
          </div>

          <div className="space-y-8">
            {/* Grading System */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl">نظام التقييم في BTEC IT</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl border border-red-200">
                    <Badge className="bg-red-500 text-white text-lg px-4 py-2 mb-4">P - Pass</Badge>
                    <p className="text-3xl font-bold text-red-600 mb-2">60%</p>
                    <p className="text-gray-600">الحد الأدنى للنجاح</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl border border-yellow-200">
                    <Badge className="bg-yellow-500 text-white text-lg px-4 py-2 mb-4">M - Merit</Badge>
                    <p className="text-3xl font-bold text-yellow-600 mb-2">80%</p>
                    <p className="text-gray-600">مستوى جيد</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                    <Badge className="bg-green-500 text-white text-lg px-4 py-2 mb-4">D - Distinction</Badge>
                    <p className="text-3xl font-bold text-green-600 mb-2">100%</p>
                    <p className="text-gray-600">مستوى ممتاز</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course Structure */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl">هيكل المنهج والأوزان</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                    <div className="text-4xl font-bold text-blue-600 mb-2">35%</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2"> الاول ثانوي</h3>
                    <p className="text-gray-600 mb-4">5 مواد دراسية</p>
                    <div className="text-sm text-gray-500">متوسط درجات المواد الخمس × 35%</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl border border-indigo-200">
                    <div className="text-4xl font-bold text-indigo-600 mb-2">35%</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2"> الثاني ثانوي (التوجيهي)</h3>
                    <p className="text-gray-600 mb-4">4 مواد دراسية</p>
                    <div className="text-sm text-gray-500">متوسط درجات المواد الأربع × 35%</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                    <div className="text-4xl font-bold text-purple-600 mb-2">30%</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">المواد المشتركة</h3>
                    <p className="text-gray-600 mb-4">4 مواد مشتركة</p>
                    <div className="text-sm text-gray-500">متوسط درجات المواد المشتركة × 30%</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Calculation Steps */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl">خطوات الحساب</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">اختر درجاتك لكل مادة</h3>
                      <p className="text-gray-600">
                        حدد P أو M أو D لكل مادة في السنة الأولى والثانية والمواد المشتركة
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">احسب متوسط كل قسم</h3>
                      <p className="text-gray-600">سيتم حساب متوسط درجات كل قسم تلقائياً</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">طبق الأوزان</h3>
                      <p className="text-gray-600">يتم ضرب كل متوسط في وزنه المحدد (35% + 35% + 30%)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">احصل على النتيجة النهائية</h3>
                      <p className="text-gray-600">مجموع النتائج المرجحة = معدلك النهائي</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Example Calculation */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl">مثال على الحساب</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl">
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                      <div className="bg-white p-4 rounded-lg shadow">
                        <h4 className="font-semibold text-blue-600">الاول ثانوي </h4>
                        <p className="text-sm text-gray-600">متوسط: 80% (M)</p>
                        <p className="text-lg font-bold">80% × 35% = 28%</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow">
                        <h4 className="font-semibold text-indigo-600">الثاني ثانوي (التوجيهي)</h4>
                        <p className="text-sm text-gray-600">متوسط: 90% (D+M)</p>
                        <p className="text-lg font-bold">90% × 35% = 31.5%</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow">
                        <h4 className="font-semibold text-purple-600">المواد المشتركة </h4>
                        <p className="text-sm text-gray-600">متوسط: 70% (P+M)</p>
                        <p className="text-lg font-bold">70% × 30% = 21%</p>
                      </div>
                    </div>
                    <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">المعدل النهائي</h3>
                      <p className="text-3xl font-bold text-green-600">28% + 31.5% + 21% = 80.5%</p>
                      <Badge className="bg-green-500 text-white mt-2">تقدير: Merit</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
