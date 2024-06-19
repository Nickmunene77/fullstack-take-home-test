const Hero = ({
  title = 'Get Me A Book',
  subtitle = 'Search for a book you want to read',
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <section className="bg-[rgb(45,147,147)] py-20 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="my-4 text-xl text-white">{subtitle}</p>
          <div className="mt-8">
            <input
              type="text"
              placeholder="Search by title or author"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full max-w-md p-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
