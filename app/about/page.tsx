import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent mb-4">
              حول البرنامج
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              تعرف على حاسبة معدل BTEC IT وكيف تساعدك في تتبع تقدمك الأكاديمي
            </p>
          </div>

          <div className="space-y-8">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl">
                  ما هي حاسبة معدل BTEC IT؟
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    حاسبة معدل BTEC IT هي أداة مجانية مصممة خصيصاً لطلاب برنامج
                    BTEC في تكنولوجيا المعلومات. تساعدك هذه الأداة على حساب
                    معدلك النهائي بدقة وسهولة، مع مراعاة النظام المعقد للأوزان
                    والتقييمات المستخدم في منهج BTEC.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-xl font-semibold text-green-800 mb-3">
                        المميزات الرئيسية
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          حساب دقيق للمعدل النهائي
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          واجهة سهلة الاستخدام
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          نتائج فورية ومفصلة
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          مجاني بالكامل
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-semibold text-blue-800 mb-3">
                        كيف تعمل؟
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          أدخل درجاتك لكل مادة
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          احسب المتوسط لكل قسم
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          طبق الأوزان المحددة
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          احصل على النتيجة النهائية
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About BTEC IT */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl">
                  ما هو برنامج BTEC IT؟
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    BTEC (Business and Technology Education Council) في
                    تكنولوجيا المعلومات هو مؤهل مهني معترف به دولياً يركز على
                    المهارات العملية والمعرفة التطبيقية في مجال تكنولوجيا
                    المعلومات.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-200">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 8.172V5L8 4z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-orange-800 mb-2">
                        التعلم العملي
                      </h3>
                      <p className="text-gray-600 text-sm">
                        يركز على المشاريع العملية والمهارات التطبيقية
                      </p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl border border-teal-200">
                      <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-teal-800 mb-2">
                        مؤهل معترف
                      </h3>
                      <p className="text-gray-600 text-sm">
                        معترف به من قبل الجامعات وأصحاب العمل
                      </p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl border border-violet-200">
                      <div className="w-12 h-12 bg-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-violet-800 mb-2">
                        مسار مهني
                      </h3>
                      <p className="text-gray-600 text-sm">
                        يؤهلك للعمل في مجال تكنولوجيا المعلومات
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>


{/* Course Structure */}
<Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
  <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-t-lg">
    <CardTitle className="text-2xl">هيكل البرنامج</CardTitle>
  </CardHeader>
  <CardContent className="p-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* First Year */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200">
        <h3 className="text-xl font-semibold text-emerald-800 mb-6 text-center">
          السنة الأولى
        </h3>
        <div className="space-y-4">
          {[
            "أنظمة تكنولوجيا المعلومات الإستراتيجية",
            "تطوير المواقع الإلكترونية",
            "تطوير تطبيقات الهاتف المحمول",
            "الدعم الفني وإدارة تكنولوجيا المعلومات",
            "تطوير ألعاب الحاسوب"
          ].map((subject, index) => (
            <div key={index} className="flex items-center p-3 bg-white/60 rounded-lg border border-emerald-200 hover:bg-white/80 transition-all duration-200">
              <Badge className="bg-emerald-500 text-white ml-3">
                {index + 1}
              </Badge>
              <span className="text-gray-700 text-right">{subject}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Second Year */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
        <h3 className="text-xl font-semibold text-blue-800 mb-6 text-center">
          السنة الثانية
        </h3>
        <div className="space-y-4">
          {[
            "الأمن السيبراني وإدارة الحوادث",
            "البرمجة",
            "إدارة مشاريع تكنولوجيا المعلومات",
            "مقدمة في الذكاء الاصطناعي"
          ].map((subject, index) => (
            <div key={index} className="flex items-center p-3 bg-white/60 rounded-lg border border-blue-200 hover:bg-white/80 transition-all duration-200">
              <Badge className="bg-blue-500 text-white ml-3">
                {index + 1}
              </Badge>
              <span className="text-gray-700 text-right">{subject}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Shared Subjects */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
        <h3 className="text-xl font-semibold text-purple-800 mb-6 text-center">
          المواد المشتركة
        </h3>
        <div className="space-y-4">
          {[
            "اللغة الإنجليزية",
            "اللغة العربية",
            "تاريخ الأردن",
            "التربية الإسلامية"
          ].map((subject, index) => (
            <div key={index} className="flex items-center p-3 bg-white/60 rounded-lg border border-purple-200 hover:bg-white/80 transition-all duration-200">
              <Badge className="bg-purple-500 text-white ml-3">
                {index + 1}
              </Badge>
              <span className="text-gray-700 text-right">{subject}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </CardContent>
</Card>


            {/* Contact/Support */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-t-lg">
                <CardTitle className="text-2xl">الدعم والمساعدة</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <p className="text-lg text-gray-700">
                    هذه الأداة مجانية ومفتوحة المصدر، مصممة لمساعدة طلاب BTEC IT
                    في تتبع تقدمهم الأكاديمي.
                  </p>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                    <h3 className="text-xl font-semibold text-blue-800 mb-3">
                      نصائح للنجاح
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                      <div className="text-right">
                        <p>• استخدم الحاسبة بانتظام لتتبع تقدمك</p>
                        <p>• اهدف للحصول على درجات Merit أو Distinction</p>
                        <p>• ركز على المواد ذات الوزن الأكبر</p>
                      </div>
                      <div className="text-right">
                        <p>• لا تهمل أي مادة حتى لو كان وزنها أقل</p>
                        <p>• راجع الإرشادات لفهم نظام التقييم</p>
                        <p>• خطط لتحسين درجاتك في الوقت المناسب</p>
                      </div>
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
  );
}
