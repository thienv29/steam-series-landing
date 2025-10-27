export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">STEAM Series</h4>
            <p className="text-sm opacity-90">Nền tảng học Toán & Khoa học bằng tiếng Anh cho học sinh tiểu học</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Khóa học</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Khối 1
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Khối 2
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Khối 3
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Khối 4
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Khối 5
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Hỗ trợ</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Liên hệ
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Điều khoản
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Chính sách
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Kết nối</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>&copy; 2025 STEAM Series by Digischool.vn. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
