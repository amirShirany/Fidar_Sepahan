import star from "../assets/icons/star.svg"

function ProductCard({ product }) {
  const discountedPrice =
    product.price - (product.price * product.discount) / 100

  return (
    <div className="w-[9.25rem] md:w-64 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative p-2">
        <span className="absolute top-0 left-0 bg-secondary-100 text-secondary-400 rounded-full w-[2.375rem] h-[19px] text-center justify-center items-center">
          -{product.discount}%
        </span>

        <img
          src={product.image}
          alt="product"
          className="!pt-6 !w-[8.25rem] !h-[6.5rem] md:w-64 md:h-48"
        />

        {/* Product Details */}
        <div className="p-4">
          <p className="text-lg font-semibold truncate">{product.title}</p>
          <span
            className="line-through text-gray-600"
            style={{ fontSize: "0.625rem" }}>
            $
            {product.price.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>

          <div className="flex justify-between items-center">
            <p>
              $
              {discountedPrice.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
            <div className="flex items-center gap-0.5">
              <img src={star} alt="star" />
              <h3 className="text-primary-500 font-bold">4.9</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
