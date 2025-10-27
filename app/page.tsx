import Hero from "@/components/hero"
import CourseLevels from "@/components/course-levels"
import ComparisonTable from "@/components/comparison-table"
import EnrollmentForm from "@/components/enrollment-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Video Giới Thiệu</h2>
          <div className="relative aspect-video w-full max-w-4xl mx-auto">
            <video
              className="w-full h-full rounded-lg shadow-lg"
              src="https://i-clc.edu.vn/wp-content/uploads/2025/10/video-gioi-thieu-team-series.mp4"
              controls
              autoPlay
              loop
              muted
              playsInline
            >
              Your browser does not support the video tag.
            </video>
            <img src="/izzy-use-laptop.png" alt="Izzy using laptop" className="absolute -top-16 -left-48 w-40 h-auto hidden md:block" />
            <img src="/izzy-like.png" alt="Izzy like" className="absolute -bottom-16 -right-48 w-40 h-auto hidden md:block" />
          </div>
        </div>
      </section>
      <CourseLevels />
      <ComparisonTable />
      <EnrollmentForm />
    </main>
  )
}
