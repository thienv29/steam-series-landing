"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const levels = [
  {
    id: 1,
    name: "Khối 1",
    description: "Bước đầu vào thế giới Toán & Khoa học",
    image: "https://digischool.vn/uploads/toankhoa-thucnghiem/new-version/1.png",
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
    borderColor: "border-blue-300",
  },
  {
    id: 2,
    name: "Khối 2",
    description: "Phát triển kỹ năng tính toán cơ bản",
    image: "https://digischool.vn/uploads/toankhoa-thucnghiem/new-version/2.png",
    color: "bg-green-500",
    lightColor: "bg-green-50",
    borderColor: "border-green-300",
  },
  {
    id: 3,
    name: "Khối 3",
    description: "Khám phá các khái niệm khoa học",
    image: "https://digischool.vn/uploads/toankhoa-thucnghiem/new-version/3.png",
    color: "bg-purple-500",
    lightColor: "bg-purple-50",
    borderColor: "border-purple-300",
  },
  {
    id: 4,
    name: "Khối 4",
    description: "Nâng cao tư duy logic và phân tích",
    image: "https://digischool.vn/uploads/toankhoa-thucnghiem/new-version/4.png",
    color: "bg-orange-500",
    lightColor: "bg-orange-50",
    borderColor: "border-orange-300",
  },
  {
    id: 5,
    name: "Khối 5",
    description: "Chuẩn bị cho các kỳ thi quan trọng",
    image: "https://digischool.vn/uploads/toankhoa-thucnghiem/new-version/5.png",
    color: "bg-red-500",
    lightColor: "bg-red-50",
    borderColor: "border-red-300",
  },
]

export default function CourseLevels() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % levels.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + levels.length) % levels.length)
  }

  return (
    <section id="courses" className="relative py-20 px-4 bg-background overflow-hidden">
      <img src="/izzy-graduation.png" alt="Izzy graduation" className="absolute top-10 right-10 w-40 h-auto rotate-12 hidden lg:block izzy-pulse" />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center text-balance">
          5 Cấp độ Học tập
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Từ Khối 1 đến Khối 5, mỗi cấp độ được thiết kế riêng biệt phù hợp với độ tuổi
        </p>

        <div className="space-y-8">
          {/* Main featured card */}
          <div className="relative">
            <div
              className={`${levels[currentIndex].color} rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:shadow-3xl`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Image section */}
                <div className="aspect-video md:aspect-auto relative overflow-hidden bg-muted">
                  <img
                    src={levels[currentIndex].image || "/placeholder.svg"}
                    alt={levels[currentIndex].name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `/placeholder.svg?height=400&width=500&query=${levels[currentIndex].name}`
                    }}
                  />
                </div>

                {/* Content section */}
                <div className="p-8 md:p-12 flex flex-col justify-center text-white">
                  <div className="inline-block w-fit mb-4">
                    <span className="text-sm font-bold bg-white/20 px-4 py-2 rounded-full">
                      Cấp độ {currentIndex + 1} / 5
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-4">{levels[currentIndex].name}</h3>
                  <p className="text-lg text-white/90 mb-6">{levels[currentIndex].description}</p>
                  <button className="w-fit px-6 py-3 bg-white text-foreground font-semibold rounded-lg hover:bg-white/90 transition">
                    Tìm hiểu thêm
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Level selector cards */}
          <div className="flex justify-center gap-2 flex-wrap">
            {levels.map((level, idx) => (
              <button
                key={level.id}
                onClick={() => setCurrentIndex(idx)}
                className={`group relative overflow-hidden rounded-lg transition-all duration-300 transform hover:scale-105 w-16 h-16 flex items-center justify-center ${
                  idx === currentIndex
                    ? `${level.color} shadow-lg`
                    : `${level.lightColor} border-2 ${level.borderColor} hover:shadow-md`
                }`}
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <div
                    className={`text-xl font-bold ${
                      idx === currentIndex ? "text-white" : level.color.replace("bg-", "text-")
                    }`}
                  >
                    {level.id}
                  </div>
                </div>

                {/* Hover effect indicator */}
                {idx === currentIndex && (
                  <div className="absolute inset-0 bg-white/10 animate-pulse pointer-events-none" />
                )}
              </button>
            ))}
          </div>

          {/* Navigation controls */}
          <div className="flex justify-center items-center gap-6">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition transform hover:scale-110"
              aria-label="Previous level"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {levels.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all duration-300 ${
                    idx === currentIndex
                      ? "bg-primary w-8 h-3 rounded-full"
                      : "bg-border w-3 h-3 rounded-full hover:bg-primary/50"
                  }`}
                  aria-label={`Go to level ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition transform hover:scale-110"
              aria-label="Next level"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
