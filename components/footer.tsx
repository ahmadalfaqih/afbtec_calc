import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-purple-600/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  BTEC Calculator
                </h3>
                <p className="text-gray-400 text-sm font-medium">
                  حاسبة المعدل الذكية
                </p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-lg text-lg">
              أداة مجانية ودقيقة لحساب معدل طلاب BTEC IT. مصممة لتوفير حسابات
              دقيقة وسهلة الاستخدام لجميع الطلاب مع واجهة عصرية وتجربة مستخدم
              متميزة.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm font-medium">
                  حسابات دقيقة 100%
                </span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm font-medium">
                  سهل الاستخدام
                </span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm font-medium">
                  مجاني تماماً
                </span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-orange-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm font-medium">
                  نتائج فورية
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              روابط سريعة
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 rtl:space-x-reverse group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:bg-blue-400 transition-colors duration-300"></span>
                  <span>الحاسبة الرئيسية</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/instructions"
                  className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 rtl:space-x-reverse group"
                >
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full group-hover:bg-green-400 transition-colors duration-300"></span>
                  <span>دليل الإرشادات</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 rtl:space-x-reverse group"
                >
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full group-hover:bg-purple-400 transition-colors duration-300"></span>
                  <span>حول البرنامج</span>
                </Link>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 rtl:space-x-reverse group"
                >
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full group-hover:bg-orange-400 transition-colors duration-300"></span>
                  <span>الأسئلة الشائعة</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              الدعم والمساعدة
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#help"
                  className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 rtl:space-x-reverse group"
                >
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full group-hover:bg-cyan-400 transition-colors duration-300"></span>
                  <span>مركز المساعدة</span>
                </a>
              </li>
              <li>
                <a
                  href="#feedback"
                  className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 rtl:space-x-reverse group"
                >
                  <span className="w-1.5 h-1.5 bg-pink-500 rounded-full group-hover:bg-pink-400 transition-colors duration-300"></span>
                  <span>إرسال ملاحظات</span>
                </a>
              </li>
              <li>
                <a
                  href="#updates"
                  className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 rtl:space-x-reverse group"
                >
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full group-hover:bg-emerald-400 transition-colors duration-300"></span>
                  <span>التحديثات</span>
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 rtl:space-x-reverse group"
                >
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full group-hover:bg-indigo-400 transition-colors duration-300"></span>
                  <span>سياسة الخصوصية</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 BTEC Calculator. جميع الحقوق محفوظة. صُنع بـحب لطلاب (أحمد
              الفقيه)
            </div>
            <div className="flex items-center space-x-8 rtl:space-x-reverse">
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-sm">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">آمن ومجاني</div>
                  <div className="text-gray-400 text-xs">بدون تسجيل مطلوب</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-sm">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold flex items-center space-x-2 rtl:space-x-reverse">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                      <path
                        fillRule="evenodd"
                        d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span dir="ltr">+962 780 648 871</span>
                  </div>
                  <div className="text-gray-400 text-xs flex items-center space-x-2 rtl:space-x-reverse mt-1">
                    <svg
                      className="w-4 h-4 text-pink-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                    <a
                      href="https://instagram.com/af_btec"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors duration-300"
                    >
                      @af_btec
                    </a>
                  </div>
                    <div className="text-gray-400 text-xs flex items-center space-x-2 rtl:space-x-reverse mt-2">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <a 
                      href="https://ahmadalfaqih.github.io/af/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-white transition-colors duration-300"
                    >
                      ahmedalfaqih
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
