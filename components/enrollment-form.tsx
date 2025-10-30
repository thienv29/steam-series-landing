'use client'

import { useEffect } from 'react'
import { BookOpen, Sparkles, Users } from 'lucide-react'

export default function EnrollmentForm() {
  useEffect(() => {
    // Load Bitrix form script
    const script = document.createElement('script')
    script.src =
      'https://anhnguiclc.com/upload/crm/form/loader_108_h11dvm.js?' +
      ((Date.now() / 180000) | 0)
    script.async = true
    script.setAttribute('data-b24-form', 'inline/108/h11dvm')
    script.setAttribute('data-skip-moving', 'true')

    const container = document.getElementById('bitrix-form-container')
    if (container) {
      container.appendChild(script)
    }

    return () => {
      // Cleanup
      if (container && script.parentNode === container) {
        container.removeChild(script)
      }
    }
  }, [])

  return (
    <section
      id='enrollment'
      className='relative py-20 px-4 bg-white  overflow-hidden'
    >
      <img
        src='/izzy-fun.png'
        alt='Izzy having fun'
        className='absolute top-10 right-10 w-40 h-auto rotate-12 hidden lg:block izzy-float'
      />
      <div className='max-w-6xl mx-auto relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16'>
          {/* Left side - Decorative content */}
          <div className='space-y-10'>
            <div>
              <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance leading-tight'>
                Bắt đầu hành trình học tập cùng <br />
                <span className='text-purple-500'>
                  STEAM SERIES FUN WITH MATH – FUN WITH SCIENCE
                </span>
              </h2>
            </div>

            {/* Feature highlights */}
            <div className='space-y-4'>
              <div className='flex gap-4 items-start'>
                <div className='flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center'>
                  <BookOpen className='w-6 h-6 text-primary' />
                </div>
                <div>
                  <h3 className='font-semibold text-foreground mb-1'>
                    Sách giáo khoa chất lượng
                  </h3>
                  <p className='text-sm text-muted-foreground'>
                    Kết hợp giữa sách giấy và nền tảng học trực tuyến
                  </p>
                </div>
              </div>

              <div className='flex gap-4 items-start'>
                <div className='flex-shrink-0 w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center'>
                  <Sparkles className='w-6 h-6 text-purple-500' />
                </div>
                <div>
                  <h3 className='font-semibold text-foreground mb-1'>
                    Game tương tác với IZZY
                  </h3>
                  <p className='text-sm text-muted-foreground'>
                    Học tập vui vẻ thông qua trò chơi giáo dục
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className='bg-card rounded-2xl border border-border shadow-lg overflow-hidden'>
            <div className='h-2 bg-gradient-to-r from-primary via-purple-500 to-blue-500'></div>

            <div className='p-4 md:p-6'>
              <div
                id='bitrix-form-container'
                className='bitrix-form-wrapper'
                style={{
                  minHeight: '500px',
                }}
              />
            </div>

            <div className='px-4 md:px-6 pb-4'>
              <p className='text-xs text-muted-foreground text-center'>
                ✓ Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.bitrix-form-wrapper iframe) {
          width: 100% !important;
          border: none !important;
        }
      `}</style>
    </section>
  )
}
