import { useState, useEffect } from "react"

function FiltersForms({ selectedOptions, setSelectedOptions }) {
  const [isOpen, setIsOpen] = useState(true)
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchCategories = async () => {
    console.log("responsee")

    setIsLoading(true)
    try {
      const response = await fetch(
        "https://fakestoreapi.in/api/products/category"
      )
      console.log("responsee", response)
      if (!response.ok) throw new Error(`خطای HTTP! وضعیت: ${response.status}`)

      const data = await response.json()
      if (data.status === "SUCCESS") {
        setCategories(data.categories)
      } else {
        throw new Error(data.message || "دریافت دسته‌بندی‌ها ناموفق بود")
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  // دریافت دسته‌بندی‌ها
  useEffect(() => {
    fetchCategories()
  }, [])

  const toggleAccordion = () => setIsOpen(!isOpen)

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
    <div className="md:w-[288px] mx-auto p-4">
      {/* بخش فیلترها */}
      <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold !p-4">Filters</h2>
          <button onClick={handleClearAll} className="text-primary !mr-4">
            clear all
          </button>
        </div>

        {/* دسته‌بندی‌ها */}
        <div className="mb-4 !p-4 ">
          <button
            onClick={toggleAccordion}
            className="w-full flex justify-between items-center p-2  rounded">
            <span className="text-xl !mb-3">category</span>
            <svg
              className={`w-5 h-5 transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="mt-2 flex flex-col gap-2">
              {categories?.map((category) => (
                <label
                  key={category}
                  className="flex items-center !space-x-4 p-2 hover:bg-gray-50 rounded">
                  <input
                    type="checkbox"
                    value={category}
                    checked={selectedOptions.includes(category)}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="text-gray-700">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FiltersForms
