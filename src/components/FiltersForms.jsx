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
          "https://fakestoreapi.in/api/products/category"
        )

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        if (data.status === "SUCCESS") {
          setCategories(data.categories) // Directly use the categories array
        } else {
          throw new Error(data.message || "Failed to fetch categories")
        }
      } catch (err) {
        setError(err.message || "Failed to fetch categories")
      } finally {
        setIsLoading(false)
      }
    }

    fetchCategories()
  }, [])

  const toggleAccordion = () => setIsOpen((prev) => !prev)

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target
    setSelectedOptions((prev) => {
      const next = new Set(prev)
      checked ? next.add(value) : next.delete(value)
      return Array.from(next)
    })
  }

  // ... keep other functions the same ...

  return (
    <>
      {/* ... keep the header and clear button the same ... */}

      <div className="!mx-10 max-w-2xs">
        <button
          onClick={toggleAccordion}
          className=" flex justify-between items-center px-4 py-3 focus:outline-none">
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

            {!isLoading && !error && categories.length === 0 && (
              <p className="text-gray-500 text-sm">No categories available</p>
            )}

            {!isLoading &&
              !error &&
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
                  <span className="text-gray-700">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </span>
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
