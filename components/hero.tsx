'use client'
import { useCallback } from 'react'

export default function Hero() {
  const scrollToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (!el) {
      console.error(`[Hero] Không tìm thấy #${sectionId}`)
      return
    }
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const handleButtonClick = useCallback(
    (sectionId: string, e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault()
      e.stopPropagation()
      scrollToSection(sectionId)
    },
    [scrollToSection]
  )

  return (
    <section className='bg-white py-20 px-4'>
      <div className='max-w-6xl mx-auto text-center'>
        <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance'>
          Học Tiếng Anh Toán - Khoa học thực nghiệm theo định hướng STEAM
        </h2>
        <p className='text-lg text-muted-foreground mb-8 text-balance'>
          Bộ sách STEAM SERIES FUN WITH MATH – FUN WITH SCIENCE dành cho học
          sinh Tiểu học – kết hợp giữa sách giấy và nền tảng học trực tuyến
          Digischool.vn
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <a
            href='#enrollment'
            onClick={(e) => handleButtonClick('enrollment', e)}
            className='inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
          >
            Khám phá ngay
          </a>
          <a
            href='#courses'
            onClick={(e) => handleButtonClick('courses', e)}
            className='inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
          >
            Tìm hiểu thêm
          </a>
        </div>
      </div>
    </section>
  )
}
