import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "STEAM Series - Fun With Math & Science",
  description: "Bộ tài nguyên học Toán & Khoa học bằng tiếng Anh dành cho học sinh Tiểu học",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <script dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('message', function (event) {
              if (event.data?.type === 'adjustIframeHeight') {
                const iframe = document.getElementById('iframe-certificate');
                iframe.style.height = event.data.height + 'px';
              }
              if (event.data?.type === 'redirectParent') {
                window.location.href = event.data.url;
              }
            });
          `
        }} />
        <Analytics />
      </body>
    </html>
  )
}
