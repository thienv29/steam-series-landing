"use client"

import { useCallback, useRef } from "react"

export default function Hero() {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // For mobile/iframe compatibility, try different scroll methods
      const scrollOptions = { behavior: "smooth" as const, block: "start" as const }

      try {
        // First attempt: standard scrollIntoView
        element.scrollIntoView(scrollOptions)
      } catch (error) {
        // Fallback: manual scroll calculation
        const rect = element.getBoundingClientRect()
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        const offsetTop = scrollTop + rect.top

        // Check if we can use scroll behavior
        if ('scrollBehavior' in document.documentElement.style) {
          window.scrollTo({ top: offsetTop, behavior: 'smooth' })
        } else {
          // Simple scroll fallback
          window.scrollTo(0, offsetTop)
        }
      }

      // Send scroll position to parent iframe for better communication
      setTimeout(() => {
        const newHeight = document.documentElement.scrollHeight
        window.parent.postMessage(
          { type: 'scrollToSection', height: newHeight, section: sectionId },
          '*'
        )
      }, 500) // Wait for scroll animation
    }
  }, [])

  const handleButtonClick = useCallback((sectionId: string, event: React.MouseEvent | React.TouchEvent) => {
    // Prevent default to avoid interference
    event.preventDefault()

    // On mobile, also prevent propagation to ensure iframe focus
    event.stopPropagation()

    scrollToSection(sectionId)
  }, [scrollToSection])

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
            role="button"
            onClick={(e) => handleButtonClick("enrollment", e)}
            onTouchEnd={(e) => handleButtonClick("enrollment", e)}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition"
          >
            Khám phá ngay
          </button>
          <button
            type="button"
            role="button"
            onClick={(e) => handleButtonClick("courses", e)}
            onTouchEnd={(e) => handleButtonClick("courses", e)}
            className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition"
          >
            Tìm hiểu thêm
          </button>
        </div>
      </div>
    </section>
  )
}
