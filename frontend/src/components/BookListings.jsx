import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_BOOKS } from '../Graphql/Queries'
import BookListing from './BookListing'
import Spinner from './Spinner'
import Hero from './Hero'

const BookListings = ({ isHome = false }) => {
  const { loading, error, data } = useQuery(GET_BOOKS)
  const [books, setBooks] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    if (data && data.books) {
      setBooks(data.books)
    }
  }, [data])

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  )

  if (loading) {
    return <Spinner loading={loading} />
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  return (
    <>
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-4xl decoration-lime-800 font-bold text-[rgb(45,147,147)]  mb-6 text-center">
            {isHome ? 'Recent Books' : 'Browse Jobs'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book, index) => (
                <BookListing key={index} book={book} index={index} />
              ))
            ) : (
              <p>No Books available.</p>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default BookListings
