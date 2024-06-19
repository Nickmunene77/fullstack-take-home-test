import { Link } from 'react-router-dom'

const BookListing = ({ book, index }) => {
  return (
    <div className="bg-[rgb(255,218,203)] rounded-xl shadow-md relative">
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
            className="w-12 h-12 object-cover rounded-xl mr-4"
          />
          <h3 className="text-indigo-500">{book.title}</h3>
        </div>
        <div className="border border-[rgb(255,121,67)] mb-5"></div>
        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-[rgb(152,43,0)] font-bold mb-3">
            {`Reading level - ${book.readingLevel}`}
          </div>
          <Link
            to={`/bookss/${index}`}
            className="h-[36px] bg-[rgb(64,196,196)] hover:bg-[rgb(41,134,134)] text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BookListing
