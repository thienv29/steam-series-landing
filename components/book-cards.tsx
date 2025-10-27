import React from 'react'

const mathBooks = [
  { id: 1, image: '/bo-sach/math-1.jpg', title: 'Math Book 1' },
  { id: 2, image: '/bo-sach/math-2.jpg', title: 'Math Book 2' },
  { id: 3, image: '/bo-sach/math-3.jpg', title: 'Math Book 3' },
  { id: 4, image: '/bo-sach/math-4.jpg', title: 'Math Book 4' },
  { id: 5, image: '/bo-sach/math-5.jpg', title: 'Math Book 5' },
]

const scienceBooks = [
  { id: 1, image: '/bo-sach/science-1.jpg', title: 'Science Book 1' },
  { id: 2, image: '/bo-sach/science-2.jpg', title: 'Science Book 2' },
  { id: 3, image: '/bo-sach/science-3.jpg', title: 'Science Book 3' },
  { id: 4, image: '/bo-sach/science-4.jpg', title: 'Science Book 4' },
  { id: 5, image: '/bo-sach/science-5.jpg', title: 'Science Book 5' },
]

const BookCards = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">Fun with Math</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center">
          {mathBooks.map((book) => (
            <div
              key={`math-${book.id}`}
              className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-card rounded-lg shadow-lg p-2 hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-[3/4] overflow-hidden rounded-md">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">Fun with Science</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center">
          {scienceBooks.map((book) => (
            <div
              key={`science-${book.id}`}
              className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-card rounded-lg shadow-lg p-2 hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-[3/4] overflow-hidden rounded-md">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BookCards
