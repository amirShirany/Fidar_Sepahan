import { useState, useEffect } from "react"

function FiltersForms() {
  const [isOpen, setIsOpen] = useState(true)
  const [selectedOptions, setSelectedOptions] = useState([])
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  // Fetch categories from the API
  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        )
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`)
        const data = await response.json()
        setCategories(data)
      } catch (err) {
        setError(err.message || "Failed to fetch categories")
      } finally {
        setIsLoading(false)
      }
    }

    fetchCategories()
  }, [])

  const toggleAccordion = () => setIsOpen(!isOpen)

  // Handle checkbox changes: add or remove the value from the state
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target
    setSelectedOptions((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    )
  }

  const handleClearAll = () => {
    setSelectedOptions([])
  }

  return (
    <>
      <div className="flex justify-between items-center !mx-10 md:max-w-[15rem]">
        <span className="text-xl">Filters</span>
        <button
          onClick={handleClearAll}
          className="text-primary hover:text-primary-dark transition-colors">
          Clear all
        </button>
      </div>

      <div className="!mx-10 max-w-2xs">
        <button
          onClick={toggleAccordion}
          className="w-full flex justify-between items-center px-4 py-3 focus:outline-none">
          <span className="font-semibold text-gray-700">Category</span>
          <svg
            className={`w-5 h-5 transform transition-transform duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Accordion Content (Checkbox Group) */}
        {isOpen && (
          <div className="!mt-5">
            {isLoading && (
              <div className="flex items-center justify-center py-4">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
              </div>
            )}

            {error && (
              <p className="text-red-500 text-sm p-2 bg-red-50 rounded">
                {error} - Please try refreshing the page
              </p>
            )}

            {!isLoading &&
              categories.map((category) => (
                <label
                  key={category}
                  className="flex items-center !space-x-4 !mb-4">
                  <input
                    type="checkbox"
                    value={category}
                    checked={selectedOptions.includes(category)}
                    onChange={handleCheckboxChange}
                    className="appearance-auto h-6 w-6 border-2 border-gray-700 rounded-md checked:bg-primary checked:border-primary"
                  />
                  <span className="text-gray-700">{category}</span>
                </label>
              ))}
          </div>
        )}
        <hr className="!mb-10" />
      </div>
    </>
  )
}

export default FiltersForms
