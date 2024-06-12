import BooksListings from '../components/BookListings'
import ViewAllBooks from '../components/ViewAllBooks'

const HomePage = () => {
  return (
    <>
      <BooksListings isHome={true} />
      <ViewAllBooks />
    </>
  )
}
export default HomePage
