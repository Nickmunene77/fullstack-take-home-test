import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddJobPage = ({ addBookSubmit }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [coverPhotoURL, setCoverPhotoURL] = useState('')
  const [readingLevel, setReadingLevel] = useState('')

  const navigate = useNavigate()

  const submitForm = (e) => {
    e.preventDefault()

    const newJob = {
      title,
      coverPhotoURL,
      author,
      readingLevel,
    }

    addJobSubmit(newJob)

    toast.success('Job Added Successfully')

    return navigate('/jobs')
  }

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-[rgb(255,218,203)] px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">
              Add Book
            </h2>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Book Author
              </label>
              <input
                type="text"
                id="author"
                name="author"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="name of author"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add book description"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Photo
              </label>
              <input
                type="text"
                id="photo"
                name="photo"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="url of photo"
                required
                value={coverPhotoURL}
                onChange={(e) => setCoverPhotoURL(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="readingLevel"
                className="block text-gray-700 font-bold mb-2"
              >
                Reading Level
              </label>
              <select
                id="readingLevel"
                name="readingLevel"
                className="border rounded w-full py-2 px-3 mb-2"
                value={readingLevel}
                onChange={(e) => setReadingLevel(e.target.value)}
              >
                <option value="">Select a reading level</option>
                <option value="beginner">A</option>
                <option value="intermediate">B</option>
                <option value="advanced">C</option>
                <option value="expert">D</option>
                <option value="master">E</option>
                <option value="grandmaster">F</option>
                <option value="other">G</option>
                <option value="none">H</option>
              </select>
            </div>

            <div>
              <button
                className="bg-[rgb(49,160,160)] hover:bg-[rgb(53,173,173)] text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
export default AddJobPage
