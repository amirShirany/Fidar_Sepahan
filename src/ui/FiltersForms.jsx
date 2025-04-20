import { useState } from "react"

function FiltersForms() {
  const [isOpen, setIsOpen] = useState(true)

  const [selectedOptions, setSelectedOptions] = useState([])

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  // Handle checkbox changes: add or remove the value from the state
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target
    setSelectedOptions((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    )
  }

  const options = [
    { label: "TV", value: "TV" },
    { label: "Laptop", value: "Laptop" },
    { label: "Mobile", value: "Mobile" },
    { label: "Audio", value: "Audio" },
  ]

  fetch("https://fakestoreapi.in/api/products/category")
    .then((res) => res.json())
    .then((res) => console.log(res))

  return (
    <>
      <div className="flex justify-between items-center !mx-10">
        <span className="text-xl">Filters</span>
        <p className="text-primary">Clear all</p>
      </div>

      <div className="!mx-10">
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
            {options.map((option) => (
              <label
                key={option.value}
                className="flex items-center !space-x-4 !mb-4">
                <input
                  type="checkbox"
                  value={option.value}
                  checked={selectedOptions.includes(option.value)}
                  onChange={handleCheckboxChange}
                  className="appearance-none h-6 w-6 border-2 border-gray-700 rounded-md checked:bg-primary 
                  checked:border-primary"
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default FiltersForms
