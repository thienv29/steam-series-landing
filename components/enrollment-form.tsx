"use client"

import { useEffect } from "react"
import { BookOpen, Sparkles, Users } from "lucide-react"

export default function EnrollmentForm() {
  useEffect(() => {
    // Load Bitrix form script
    const script = document.createElement("script")
    script.src = "https://anhnguiclc.com/upload/crm/form/loader_108_h11dvm.js?" + ((Date.now() / 180000) | 0)
    script.async = true
    script.setAttribute("data-b24-form", "inline/108/h11dvm")
    script.setAttribute("data-skip-moving", "true")

    const container = document.getElementById("bitrix-form-container")
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
    <section id="enrollment" className="relative py-20 px-4 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      <img src="/izzy-fun.png" alt="Izzy having fun" className="absolute top-10 right-10 w-40 h-auto rotate-12 hidden lg:block" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Decorative content */}
          <div className="space-y-8">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-semibold text-primary">ĐĂNG KÝ NGAY</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Bắt đầu hành trình học tập cùng STEAM Series
              </h2>
            </div>

            {/* Feature highlights */}
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Sách giáo khoa chất lượng</h3>
                  <p className="text-sm text-muted-foreground">Kết hợp giữa sách giấy và nền tảng học trực tuyến</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Game tương tác với IZZY</h3>
                  <p className="text-sm text-muted-foreground">Học tập vui vẻ thông qua trò chơi giáo dục</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Hỗ trợ từ chuyên gia</h3>
                  <p className="text-sm text-muted-foreground">Tư vấn miễn phí từ đội ngũ chuyên gia</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">5000+</div>
                <p className="text-xs text-muted-foreground">Học sinh</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">4.8★</div>
                <p className="text-xs text-muted-foreground">Đánh giá</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <p className="text-xs text-muted-foreground">Miễn phí</p>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-primary via-purple-500 to-blue-500"></div>

            <div className="p-8 md:p-10">
              <div
                id="bitrix-form-container"
                className="bitrix-form-wrapper"
                style={{
                  minHeight: "500px",
                }}
              />
            </div>

            <div className="px-8 md:px-10 pb-6">
              <p className="text-xs text-muted-foreground text-center">
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
