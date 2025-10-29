'use client';

import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

const PDF_URL_MAP: Record<string, string> = {
  'steam-series-fun-with-math-1.pdf': 'https://digischool.vn/uploads/tai-lieu-public/sach-demo/steam-series-fun-with-math-1.pdf',
  'steam-series-fun-with-math-2.pdf': 'https://digischool.vn/uploads/tai-lieu-public/sach-demo/steam-series-fun-with-math-2.pdf',
  'steam-series-fun-with-math-3.pdf': 'https://digischool.vn/uploads/tai-lieu-public/sach-demo/steam-series-fun-with-math-3.pdf',
  'steam-series-fun-with-math-4.pdf': 'https://digischool.vn/uploads/tai-lieu-public/sach-demo/steam-series-fun-with-math-4.pdf',
  'steam-series-fun-with-math-5.pdf': 'https://digischool.vn/uploads/tai-lieu-public/sach-demo/steam-series-fun-with-math-5.pdf',
  'steam-series-fun-with-science-1wtm.pdf': 'https://digischool.vn/uploads/tai-lieu-public/sach-demo/steam-series-fun-with-science-1wtm.pdf',
  'steam-series-fun-with-science-2wtm.pdf': 'https://digischool.vn/uploads/tai-lieu-public/sach-demo/steam-series-fun-with-science-2wtm.pdf',
  'steam-series-fun-with-science-3wtm.pdf': 'https://digischool.vn/uploads/tai-lieu-public/sach-demo/steam-series-fun-with-science-3wtm.pdf',
  'steam-series-fun-with-science-4wtm.pdf': 'https://digischool.vn/uploads/tai-lieu-public/sach-demo/steam-series-fun-with-science-4wtm.pdf',
  'steam-series-fun-with-science-5wtm.pdf': 'https://digischool.vn/uploads/tai-lieu-public/sach-demo/steam-series-fun-with-science-5wtm.pdf',
};

interface Props {
  params: Promise<{ filename: string }>;
}

export default function PDFViewPage({ params }: Props) {
  const [filename, setFilename] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    params.then(({ filename: fname }) => {
      if (!PDF_URL_MAP[fname]) {
        notFound();
        return;
      }
      setFilename(fname);
      setLoading(false);
    }).catch(() => {
      setError('Error loading PDF');
      setLoading(false);
    });
  }, [params]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Đang tải tài liệu...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-red-500 text-lg mb-4">{error}</p>
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Quay lại
          </button>
        </div>
      </div>
    );
  }

  if (!filename) return null;

  // Create proxy URL
  const proxyUrl = `/api/proxy/${filename}#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&zoom=page-fit`;

  return (
    <div className="w-full h-full">
      <iframe
        src={proxyUrl}
        className="w-full h-screen"
        style={{ border: 'none' }}
        allowFullScreen
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
