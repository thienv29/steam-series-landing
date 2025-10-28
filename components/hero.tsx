"use client"

import { useCallback, useRef } from "react"

export default function Hero() {
  const scrollToSection = useCallback((sectionId: string) => {
    console.log(`Attempting to scroll to section: ${sectionId}`)
    const element = document.getElementById(sectionId)
    if (element) {
      console.log('Element found:', element)
      const rect = element.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const targetTop = scrollTop + rect.top
      console.log(`Calculated targetTop: ${targetTop}`)

      // Send message to parent for scrolling
      const message = {
        type: 'scrollTo',
        scrollTop: targetTop,
      }
      console.log('Sending message to parent:', message)
      window.parent.postMessage(message, '*')

      // Fallback for direct scrolling
      console.log('Executing fallback scroll.')
      window.scrollTo({
        top: targetTop,
        behavior: 'smooth',
      })
    } else {
      console.error(`Element with ID "${sectionId}" not found.`)
    }
  }, [])

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          Học Tiếng Anh Toán - Khoa học thực nghiệm theo định hướng STEAM
        </h2>
        <p className="text-lg text-muted-foreground mb-8 text-balance">
          Bộ sách STEAM SERIES FUN WITH MATH – FUN WITH SCIENCE dành cho học sinh Tiểu học – kết hợp giữa sách giấy và nền tảng học trực tuyến Digischool.vn
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={() => scrollToSection('enrollment')}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition"
          >
            Khám phá ngay
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('courses')}
            className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition"
          >
            Tìm hiểu thêm
          </button>
        </div>
      </div>
    </section>
  )
}
