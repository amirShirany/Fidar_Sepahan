import Filters from "../ui/Filters"
import Products from "../components/Products"
import { useState } from "react"

function ProductsPage() {
  const [selectedOptions, setSelectedOptions] = useState([])

  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden">
      <div className="container 3xl:max-w-screen-3xl">
        <div className="flex flex-col md:flex-row md:gap-6">
          <Filters
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
          <Products selectedOptions={selectedOptions} />
        </div>
      </div>
    </div>
  )
}
export default ProductsPage
