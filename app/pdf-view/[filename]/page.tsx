import { notFound } from 'next/navigation';

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

export default async function PDFViewPage({ params }: Props) {
  const { filename } = await params;
  const externalUrl = PDF_URL_MAP[filename];

  if (!externalUrl) {
    notFound();
  }

  // Create proxy URL
  const proxyUrl = `/api/proxy/${filename}#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&zoom=page-fit`;

  return (
    <div className="w-full h-full">
      <iframe
        src={proxyUrl}
        className="w-full h-screen"
        style={{ border: 'none' }}
        allowFullScreen
      />
    </div>
  );
}
