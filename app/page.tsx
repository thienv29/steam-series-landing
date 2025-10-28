'use client'
import { useEffect } from 'react'
import Hero from '@/components/hero'
import BookCards from '@/components/book-cards'
import ComparisonTable from '@/components/comparison-table'
import EnrollmentForm from '@/components/enrollment-form'

export default function Home() {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'scrollTo') {
        window.scrollTo({
          top: event.data.scrollTop,
          behavior: 'smooth',
        })
      }
    }

    window.addEventListener('message', handleMessage)

    const sendHeight = () => {
      const height = document.documentElement.scrollHeight
      window.parent.postMessage({ type: 'adjustIframeHeight', height }, '*')
    }

    sendHeight()

    // Resize events
    const resizeObserver = new ResizeObserver(sendHeight)
    resizeObserver.observe(document.documentElement)

    // DOM change events
    const mutationObserver = new MutationObserver(sendHeight)
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    window.addEventListener('resize', sendHeight)

    return () => {
      window.removeEventListener('message', handleMessage)
      window.removeEventListener('resize', sendHeight)
      resizeObserver.disconnect()
      mutationObserver.disconnect()
    }
  }, [])

  return (
    <main className='min-h-screen bg-white overflow-auto touch-pan-y'>
      <Hero />
      <section
        id='courses'
        className='relative py-8 md:py-12 bg-white  overflow-hidden'
      >
        <img
          src='/izzy-graduation.png'
          alt='Izzy graduation'
          className='absolute -top-1 right-10 w-30 h-auto rotate-12 hidden lg:block izzy-pulse'
        />
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
            >
              Your browser does not support the video tag.
            </video>
            <img
              src='/izzy-use-laptop.png'
              alt='Izzy using laptop'
              className='absolute -top-16 -left-48 w-40 h-auto hidden md:block izzy-bounce'
            />
          </div>
        </div>
      </section>
      <ComparisonTable />
      <section id='enrollment'>
        <EnrollmentForm />
      </section>
    </main>
  )
}
