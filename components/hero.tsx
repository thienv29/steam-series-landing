'use client'
import { useCallback } from 'react'

function getScrollableRoot(): HTMLElement | Document {
  // iOS Safari thích document.scrollingElement hơn
  return (
    (document.scrollingElement as HTMLElement) ||
    document.documentElement ||
    document.body
  )
}

function getAbsoluteTop(el: HTMLElement): number {
  // Tính top tuyệt đối trong tài liệu (không phụ thuộc container transform)
  let y = 0
  let node: HTMLElement | null = el
  while (node) {
    y += node.offsetTop
    node = node.offsetParent as HTMLElement | null
  }
  return y
}

export default function Hero() {
  const scrollToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (!el) {
      console.error(`[Hero] Không tìm thấy #${sectionId}`)
      return
    }

    // 1) Thử scrollIntoView trước
    try {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } catch {
      /* ignore */
    }

    // 2) Fallback cho mobile (iOS/Safari/Chrome Android trong iframe)
    const scroller = getScrollableRoot() as HTMLElement
    const targetTop = getAbsoluteTop(el)

    // Dùng requestAnimationFrame để tránh giật trên iOS
    requestAnimationFrame(() => {
      // Nếu sau 150ms vị trí chưa thay đổi đủ ⇒ ép cuộn thủ công
      const before = (scroller as HTMLElement).scrollTop || window.pageYOffset
      setTimeout(() => {
        const afterTry =
          (scroller as HTMLElement).scrollTop || window.pageYOffset
        const moved = Math.abs(afterTry - before) > 4
        if (!moved) {
          // ép cuộn
          if ('scrollTo' in scroller) {
            ;(scroller as HTMLElement).scrollTo({
              top: targetTop,
              behavior: 'smooth',
            })
          } else {
            window.scrollTo({ top: targetTop, behavior: 'smooth' })
          }
        }

        // 3) Cú chót: hash (tránh khi đang trong trang có smooth global)
        setTimeout(() => {
          const now = (scroller as HTMLElement).scrollTop || window.pageYOffset
          if (Math.abs(now - targetTop) > 20) {
            try {
              // giữ nguyên query hiện tại
              const url = new URL(window.location.href)
              url.hash = `#${sectionId}`
              history.replaceState(null, '', url.toString())
              // Một số mobile cần setImmediate/timeout để áp hash xong mới cuộn
              const anchor = document.getElementById(sectionId)
              anchor?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            } catch {
              /* ignore */
            }
          }
        }, 200)
      }, 150)
    })
  }, [])

  const handleButtonClick = useCallback(
    (sectionId: string, e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault()
      e.stopPropagation() // tránh overlay cha nhận touch
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
        <div className='hidden sm:flex flex-col sm:flex-row gap-4 justify-center'>
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
