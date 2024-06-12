// BookPage.js
import { client } from '../ApolloClient' // Ensure you import the configured Apollo Client
import { GET_BOOK_BY_TITLE } from '../Graphql/Queries'
import { useParams, useLoaderData, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const BookPage = ({ deleteBook }) => {
  const navigate = useNavigate()
  const { title } = useParams() // Use 'title' instead of 'id'
  const book = useLoaderData()

  const onDeleteClick = async () => {
    const confirm = window.confirm(
      'Are you sure you want to delete this listing?'
    )

    if (!confirm) return

    try {
      await deleteBook(title)
      toast.success('Book deleted successfully')
      navigate('/books')
    } catch (error) {
      toast.error('Failed to delete book')
    }
  }

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/books"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Book Listings
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{book.author}</div>
                <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
                <div className="mb-4">
                  <img
                    src={book.coverPhotoURL}
                    alt={book.title}
                    className="w-full h-72 object-cover mb-4"
                  />
                  <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                    <p className="text-orange-700">{`Reading level - ${book.readingLevel}`}</p>
                  </div>
                </div>
                <button
                  onClick={onDeleteClick}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  )
}

const BookLoader = async ({ params }) => {
  try {
    const { data, errors } = await client.query({
      query: GET_BOOK_BY_TITLE,
      variables: { title: params.title },
    })

    if (errors) {
      console.error('GraphQL errors:', errors)
      throw new Error('Failed to load book data')
    }

    if (!data || !data.book) {
      throw new Error('No book found')
    }

    return data.book
  } catch (error) {
    console.error('Error loading book:', error)
    throw new Error('Failed to load book data')
  }
}

export { BookPage as default, BookLoader }
