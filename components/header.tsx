"use client"

import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">S</span>
          </div>
          <h1 className="text-xl font-bold text-foreground">STEAM Series</h1>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#courses" className="text-foreground hover:text-primary transition">
            Khóa học
          </a>
          <a href="#comparison" className="text-foreground hover:text-primary transition">
            So sánh
          </a>
          <a href="#enrollment" className="text-foreground hover:text-primary transition">
            Đăng ký
          </a>
        </nav>
        <Button className="bg-primary hover:bg-primary/90">Bắt đầu</Button>
      </div>
    </header>
  )
}
