import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'bg-[rgb(97,67,0)] text-white hover:bg-[rgba(97, 66, 0, 0.797)] hover:text-white rounded-md px-3 py-2'
      : 'text-white hover:text-white-200 hover:text-white rounded-md px-3 py-2'

  return (
    <nav className="bg-[rgb(45,147,147)] border-b border-[rgb(45,147,147)] mb-3">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={logo} alt="React Jobs" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                ELlo Books
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>

                <NavLink to="/add-book" className={linkClass}>
                  Add Book
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
