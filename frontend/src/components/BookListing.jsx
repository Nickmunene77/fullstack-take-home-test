import { Link } from 'react-router-dom'

const BookListing = ({ book, index }) => {
  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2 text-center font-semibold">
            {book.author}
          </div>
        </div>
        <div className="flex items-center mb-4">
          <img
            src={book.coverPhotoURL}
            alt={book.title}
            className="w-12 h-12 object-cover rounded-full mr-4"
          />
          <h3 className="text-indigo-500">{book.title}</h3>
        </div>
        <div className="border border-gray-100 mb-5"></div>
        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            {`Reading level - ${book.readingLevel}`}
          </div>
          <Link
            to={`/bookss/${index}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BookListing
