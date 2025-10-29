'use client';

import { notFound } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';

// Map filename to image folder name
const IMAGE_FOLDER_MAP: Record<string, string> = {
  'steam-series-fun-with-math-1.pdf': 'steam-series-fun-with-math-1',
  'steam-series-fun-with-math-2.pdf': 'steam-series-fun-with-math-2',
  'steam-series-fun-with-math-3.pdf': 'steam-series-fun-with-math-3',
  'steam-series-fun-with-math-4.pdf': 'steam-series-fun-with-math-4',
  'steam-series-fun-with-math-5.pdf': 'steam-series-fun-with-math-5',
  'steam-series-fun-with-science-1wtm.pdf': 'steam-series-fun-with-science-1wtm',
  'steam-series-fun-with-science-2wtm.pdf': 'steam-series-fun-with-science-2wtm',
  'steam-series-fun-with-science-3wtm.pdf': 'steam-series-fun-with-science-3wtm',
  'steam-series-fun-with-science-4wtm.pdf': 'steam-series-fun-with-science-4wtm',
  'steam-series-fun-with-science-5wtm.pdf': 'steam-series-fun-with-science-5wtm',
};

interface Props {
  params: Promise<{ filename: string }>;
}

export default function PDFViewPage({ params }: Props) {
  const [filename, setFilename] = useState<string | null>(null);
  const [foldername, setFoldername] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  // Anti-download protections
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Block common save/download/print shortcuts
      if (
        (e.ctrlKey || e.metaKey) && ['s', 'p', 'a', 'c', 'u'].includes(e.key.toLowerCase()) ||
        e.key === 'F12' ||
        (e.ctrlKey || e.metaKey) && e.shiftKey && ['i', 'j'].includes(e.key.toLowerCase())
      ) {
        e.preventDefault();
        return false;
      }
    };

    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    const handleSelectStart = (e: Event) => {
      e.preventDefault();
      return false;
    };

    // Disable text selection
    document.body.style.userSelect = 'none';
    (document.body.style as any).webkitUserSelect = 'none';
    (document.body.style as any).MozUserSelect = 'none';
    (document.body.style as any).msUserSelect = 'none';

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('selectstart', handleSelectStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('selectstart', handleSelectStart);

      document.body.style.userSelect = '';
      (document.body.style as any).webkitUserSelect = '';
      (document.body.style as any).MozUserSelect = '';
      (document.body.style as any).msUserSelect = '';
    };
  }, []);

  const loadImages = useCallback(async (folder: string) => {
    try {
      // Assume images are numbered starting from 0.jpg
      const imageList: string[] = [];
      let pageNum = 0;

      while (true) {
        try {
          // Try to load image
          const img = new Image();
          await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
            img.src = `/bo-sach/${folder}/${pageNum}.jpg`;
          });
          imageList.push(`/bo-sach/${folder}/${pageNum}.jpg`);
          pageNum++;
        } catch {
          break; // No more images
        }
      }

      if (imageList.length === 0) {
        throw new Error('No images found');
      }

      setImages(imageList);
      setTotalPages(imageList.length);
    } catch (err) {
      throw new Error('Failed to load images');
    }
  }, []);

  useEffect(() => {
    params.then(({ filename: fname }) => {
      if (!IMAGE_FOLDER_MAP[fname]) {
        notFound();
        return;
      }
      setFilename(fname);
      setFoldername(IMAGE_FOLDER_MAP[fname]);

      loadImages(IMAGE_FOLDER_MAP[fname])
        .then(() => setLoading(false))
        .catch(() => {
          setError('Error loading images');
          setLoading(false);
        });
    }).catch(() => {
      setError('Error loading document');
      setLoading(false);
    });
  }, [params, loadImages]);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-700 mb-2">Đang tải tài liệu</p>
          <p className="text-sm text-gray-500">Có thể mất vài giây do dung lượng tài liệu lớn</p>
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

  if (!images.length) return null;

  return (
    <>
      {/* Print blocking CSS */}
      <style jsx global>{`
        @media print {
          * {
            display: none !important;
          }
          body::after {
            content: "Printing is not allowed";
            font-size: 24px;
            color: red;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
        img {
          pointer-events: none;
          -webkit-user-drag: none;
          -khtml-user-drag: none;
          -moz-user-drag: none;
          -o-user-drag: none;
          user-drag: none;
        }
      `}</style>

      <div className="w-full h-screen flex flex-col bg-gray-100">
        {/* Navigation bar */}
        <div className="flex items-center justify-between bg-white border-b px-4 py-2 shadow-sm">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => window.history.back()}
              className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors"
            >
              ← Quay lại
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className="px-3 py-1 text-sm bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
            >
              Trước
            </button>

            <span className="text-sm text-gray-600">
              Trang {currentPage + 1} / {totalPages}
            </span>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className="px-3 py-1 text-sm bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
            >
              Sau
            </button>
          </div>
        </div>

        {/* Image viewer */}
        <div className="flex-1 overflow-auto bg-white">
          <div className="h-full flex items-center justify-center p-4">
            <img
              src={images[currentPage]}
              alt={`Page ${currentPage + 1}`}
              className="max-w-full max-h-full object-contain shadow-lg"
              style={{
                pointerEvents: 'none',
                userSelect: 'none',
                WebkitUserSelect: 'none'
              }}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}
