import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import { useMutation } from '@apollo/client'
import ApolloClientProvider from './ApolloClient'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import BooksPage from './pages/BooksPage'
import NotFoundPage from './pages/NotFoundPage'
import BookPage, { BookLoader } from './pages/BookPage'
import AddBookPage from './pages/AddBookPage'
import { ADD_BOOK, DELETE_BOOK } from './Graphql/Mutations'

const App = () => {
  // Use Apollo Client's useMutation hook for adding and deleting books
  const [addBookMutation] = useMutation(ADD_BOOK)
  const [deleteBookMutation] = useMutation(DELETE_BOOK)

  // Add New Book
  const addBook = async (newBook) => {
    try {
      const { data } = await addBookMutation({
        variables: {
          title: newBook.title,
          author: newBook.author,
          coverPhotoURL: newBook.coverPhotoURL,
        },
      })
      return data.addBook
    } catch (error) {
      console.error('Error adding book:', error)
    }
  }

  // Delete Book
  const deleteBook = async (title) => {
    try {
      const { data } = await deleteBookMutation({
        variables: {
          title,
        },
      })
      return data.deleteBook
    } catch (error) {
      console.error('Error deleting book:', error)
    }
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route
          path="/add-book"
          element={<AddBookPage addBookSubmit={addBook} />}
        />
        <Route
          path="/books/:title"
          element={<BookPage deleteBook={deleteBook} />}
          loader={BookLoader}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  )

  return (
    <ApolloClientProvider>
      <RouterProvider router={router} />
    </ApolloClientProvider>
  )
}

export default App
