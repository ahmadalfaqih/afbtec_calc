"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200/60 dark:border-gray-700/60 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-4 rtl:space-x-reverse group mr-4">
            <div className="relative flex items-center">
              {/* Logo Container */}
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 mr-2">
                <Image
                  src="https://i.postimg.cc/1RYJHQGC/Whats-App-Image-2025-08-10-at-14-15-14-f29e414a.jpg"
                  alt="BTEC Calculator Logo"
                  width={48}
                  height={48}
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -top-1 right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 dark:from-gray-100 dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent">
                AF BTEC Calculator                
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                أداة لحساب المعدل العام للثانوية العامة (BTEC)
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            <Link
              href="/"
              className="relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-semibold group"
            >
              <span className="relative z-10">الحاسبة</span>
              <div className="absolute inset-0 bg-blue-50 dark:bg-blue-900/30 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </Link>
            <Link
              href="/instructions"
              className="relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 font-semibold group"
            >
              <span className="relative z-10">الإرشادات</span>
              <div className="absolute inset-0 bg-green-50 dark:bg-green-900/30 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </Link>
            <Link
              href="/about"
              className="relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 font-semibold group"
            >
              <span className="relative z-10">حول البرنامج</span>
              <div className="absolute inset-0 bg-purple-50 dark:bg-purple-900/30 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </Link>
          </nav>

          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <ThemeToggle />

            <div className="hidden md:flex items-center space-x-2 rtl:space-x-reverse bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-semibold border border-green-200 dark:border-green-700 shadow-sm">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-sm"></div>
              <span>Ahmad AL-Faqih</span>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200/60 dark:border-gray-700/60 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                الحاسبة
              </Link>
              <Link
                href="/instructions"
                className="px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/30 rounded-lg transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                الإرشادات
              </Link>
              <Link
                href="/about"
                className="px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30 rounded-lg transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                حول البرنامج
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}