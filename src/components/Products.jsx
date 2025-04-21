import React, { useEffect, useState } from "react"
import ProductCard from "./ProductCard"

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(8)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.in/api/products")
        const data = await response.json()
        setProducts(data.products)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) return <div className="text-center p-4">Loading...</div>
  if (error) return <div className="text-center text-red-500">{error}</div>

  // --- Pagination Logic ---
  const totalItems = products.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  // Calculate the starting and ending index for the current page
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  // Get the products for the current page
  const paginatedProducts = products.slice(startIndex, endIndex)

  // Handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  // Generate pagination buttons
  const renderPaginationButtons = () => {
    const buttons = []
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          className={`!mt-10 px-4 py-2 rounded ${
            currentPage === i ? "text-blue-500 underline" : " "
          }`}
          onClick={() => handlePageChange(i)}>
          {i}
        </button>
      )
    }
    return buttons
  }

  return (
    <div className="container mx-auto my-8 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center gap-6">
          {renderPaginationButtons()}
        </div>
        <div className="text-black !ml-3 !pt-8">...</div>
      </div>
    </div>
  )
}

export default Products
