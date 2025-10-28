'use client'

import { useCallback, useMemo } from 'react'

type HeroProps = {
  /** origin của trang cha, nên truyền cụ thể để bảo mật, ví dụ "https://i-clc.edu.vn" */
  parentOrigin?: string
}

export default function Hero({ parentOrigin = '*' }: HeroProps) {
  const isEmbedded = useMemo(() => {
    if (typeof window === 'undefined') return false
    try {
      return window.self !== window.top // đang trong iframe
    } catch {
      return true // bị chặn same-origin ⇒ chắc chắn là iframe
    }
  }, [])

  const scrollInsideSelf = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (!el) {
      console.error(`[Hero] Không tìm thấy #${sectionId} trong iframe.`)
      return
    }
    // scroll mượt nội bộ (khi không embed)
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const scrollViaParent = useCallback(
    (sectionId: string) => {
      // Gửi sectionId cho trang cha, để cha tự handle
      const message = { type: 'iclc:scrollToSection', sectionId }
      window.parent.postMessage(message, parentOrigin)
      // Không tự scroll trong iframe nữa – trang cha mới là nơi có section thật
      // (optional) log
      // console.log("[Hero] postMessage to parent:", message, "origin:", parentOrigin);
    },
    [parentOrigin]
  )

  const handleButtonClick = useCallback(
    (sectionId: string, e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault()
      e.stopPropagation() // tránh bị chặn bởi overlay/click cha

      if (isEmbedded) {
        scrollViaParent(sectionId)
      } else {
        scrollInsideSelf(sectionId)
      }
    },
    [isEmbedded, scrollInsideSelf, scrollViaParent]
  )

  return (
    <section className='bg-white py-20 px-4 relative z-10'>
      {' '}
      {/* z-10 để tránh overlay chặn click */}
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
          {/* Dùng <a href="#..."> để có fallback khi JS bị tắt / chạy độc lập */}
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
