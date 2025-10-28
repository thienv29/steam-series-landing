'use client'
import { useEffect } from 'react'
import Hero from '@/components/hero'
import BookCards from '@/components/book-cards'
import ComparisonTable from '@/components/comparison-table'
import EnrollmentForm from '@/components/enrollment-form'

export default function Home() {
  useEffect(() => {
    const getDocHeight = () =>
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      )

    // Chỉ gửi khi thật sự cần: mount, resize, mutation. KHÔNG gửi theo scroll nữa.
    const sendHeight = () => {
      const base = getDocHeight()
      const buffer = 200 // chống “cụt” do thanh trình duyệt mobile/animation
      const height = Math.max(base, window.innerHeight) + buffer
      window.parent.postMessage({ type: 'adjustIframeHeight', height }, '*')
    }

    // Gửi ngay khi mount
    sendHeight()

    // Gửi khi viewport đổi/rotate
    window.addEventListener('orientationchange', sendHeight)
    window.addEventListener('resize', sendHeight)

    // Theo dõi thay đổi DOM
    const ro = new ResizeObserver(sendHeight)
    ro.observe(document.documentElement)
    const mo = new MutationObserver(sendHeight)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('resize', sendHeight)
      window.removeEventListener('orientationchange', sendHeight)
      ro.disconnect()
      mo.disconnect()
    }
  }, [])

  return (
    <main className='min-h-screen bg-white touch-pan-y'>
      <Hero />

      <section
        id='courses'
        className='scroll-mt-24 md:scroll-mt-28 relative py-8 md:py-12 bg-white overflow-hidden'
      >
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-5xl md:text-4xl book-series-title mb-12'>
            STEAM SERIES FUN WITH MATH - FUN WITH SCIENCE
          </h2>
          <BookCards />
        </div>
      </section>

      <section className='py-12 md:py-20'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-8'>
            Video Giới thiệu tài nguyên mẫu
          </h2>
          <div className='relative aspect-video w-full max-w-6xl mx-auto'>
            <video
              className='w-full h-full rounded-lg shadow-lg'
              src='https://i-clc.edu.vn/wp-content/uploads/2025/10/video-gioi-thieu-team-series.mp4'
              controls
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </section>

      <ComparisonTable />

      <section id='enrollment' className='scroll-mt-24 md:scroll-mt-28'>
        <EnrollmentForm />
      </section>
    </main>
  )
}
