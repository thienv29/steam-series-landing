import { NextRequest, NextResponse } from 'next/server';

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

export async function GET(request: NextRequest, { params }: { params: { filename: string } }) {
  const { filename } = await params;
  const externalUrl = PDF_URL_MAP[filename];

  if (!externalUrl) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }

  try {
    const response = await fetch(externalUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; PDFViewer/1.0)',
      },
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch PDF' }, { status: response.status });
    }

    const arrayBuffer = await response.arrayBuffer();

    return new NextResponse(arrayBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="${filename}"`,
        // Important: Disable caching to prevent direct URL access
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  } catch (error) {
    console.error('Error proxying PDF:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
