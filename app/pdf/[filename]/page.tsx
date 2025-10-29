import { notFound } from 'next/navigation'

interface PDFPageProps {
  params: {
    filename: string
  }
}

// Allowed PDF filenames
const allowedFiles = [
  'steam-series-fun-with-math-1.pdf',
  'steam-series-fun-with-math-2.pdf',
  'steam-series-fun-with-math-3.pdf',
  'steam-series-fun-with-math-4.pdf',
  'steam-series-fun-with-math-5.pdf',
  'steam-series-fun-with-science-1wtm.pdf',
  'steam-series-fun-with-science-2wtm.pdf',
  'steam-series-fun-with-science-3wtm.pdf',
  'steam-series-fun-with-science-4wtm.pdf',
  'steam-series-fun-with-science-5wtm.pdf',
]

export default async function PDFPage({ params }: PDFPageProps) {
  const { filename } = await params

  // Validate filename
  if (!allowedFiles.includes(filename)) {
    notFound()
  }

  const pdfUrl = `/bo-sach-pdf-demo/${filename}`

  return (
    <div className="min-h-screen bg-gray-900 p-2 sm:p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&zoom=page-fit`}
            className="w-full h-[calc(100vh-4rem)] sm:h-[calc(100vh-2rem)]"
            style={{
              border: 'none',
              pointerEvents: 'auto'
            }}
          />
        </div>
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return allowedFiles.map((filename) => ({
    filename,
  }))
}
