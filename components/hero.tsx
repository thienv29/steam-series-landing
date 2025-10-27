export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-primary/10 to-background py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          Học Tiếng Anh Toán - Khoa học thực nghiệm theo định hướng STEAM
        </h2>
        <p className="text-lg text-muted-foreground mb-8 text-balance">
          Bộ sách STEAM SERIES FUN WITH MATH – FUN WITH SCIENCE dành cho học sinh Tiểu học – kết hợp giữa sách giấy và nền tảng học trực tuyến Digischool.vn
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#enrollment" className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition">
            Khám phá ngay
          </a>
          <a href="#courses" className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition">
            Tìm hiểu thêm
          </a>
        </div>
      </div>
    </section>
  )
}
