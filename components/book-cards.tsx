import React from 'react'

const mathBooks = [
  {
    id: 1,
    image: '/bo-sach/math-1.jpg',
    title: 'Math Book 1',
    documentUrl: 'bo-sach/math-1.jpg',
  },
  {
    id: 2,
    image: '/bo-sach/math-2.jpg',
    title: 'Math Book 2',
    documentUrl: '#',
  },
  {
    id: 3,
    image: '/bo-sach/math-3.jpg',
    title: 'Math Book 3',
    documentUrl: '#',
  },
  {
    id: 4,
    image: '/bo-sach/math-4.jpg',
    title: 'Math Book 4',
    documentUrl: '#',
  },
  {
    id: 5,
    image: '/bo-sach/math-5.jpg',
    title: 'Math Book 5',
    documentUrl: '#',
  },
]

const scienceBooks = [
  {
    id: 1,
    image: '/bo-sach/science-1.jpg',
    title: 'Science Book 1',
    documentUrl: '#',
  },
  {
    id: 2,
    image: '/bo-sach/science-2.jpg',
    title: 'Science Book 2',
    documentUrl: '#',
  },
  {
    id: 3,
    image: '/bo-sach/science-3.jpg',
    title: 'Science Book 3',
    documentUrl: '#',
  },
  {
    id: 4,
    image: '/bo-sach/science-4.jpg',
    title: 'Science Book 4',
    documentUrl: '#',
  },
  {
    id: 5,
    image: '/bo-sach/science-5.jpg',
    title: 'Science Book 5',
    documentUrl: '#',
  },
]

const BookCards = () => {
  return (
    <div className='container mx-auto px-4'>
      <div className='mb-12'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center'>
          {mathBooks.map((book) => (
            <div
              key={`math-${book.id}`}
              className='relative group cursor-pointer transform transition-all duration-300 hover:scale-105'
            >
              <div className='bg-card rounded-lg shadow-lg p-2 hover:shadow-xl transition-shadow duration-300'>
                <div className='aspect-[3/4] overflow-hidden rounded-md'>
                  <img
                    src={book.image}
                    alt={book.title}
                    className='w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110'
                    loading='lazy'
                  />
                </div>
              </div>
              {/* Hover effect overlay */}
              <div className='absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4'>
                <a
                  href={book.documentUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-primary text-primary-foreground px-4 py-2 rounded-md text-center transform transition-all duration-300 hover:bg-primary/90'
                >
                  Xem tài liệu mẫu
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='mb-12'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center'>
          {scienceBooks.map((book) => (
            <div
              key={`science-${book.id}`}
              className='relative group cursor-pointer transform transition-all duration-300 hover:scale-105'
            >
              <div className='bg-card rounded-lg shadow-lg p-2 hover:shadow-xl transition-shadow duration-300'>
                <div className='aspect-[3/4] overflow-hidden rounded-md'>
                  <img
                    src={book.image}
                    alt={book.title}
                    className='w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110'
                    loading='lazy'
                  />
                </div>
              </div>
              {/* Hover effect overlay */}
              <div className='absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4'>
                <a
                  href={book.documentUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-primary text-primary-foreground px-4 py-2 rounded-md text-center transform transition-all duration-300 hover:bg-primary/90'
                >
                  Xem tài liệu mẫu
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BookCards
