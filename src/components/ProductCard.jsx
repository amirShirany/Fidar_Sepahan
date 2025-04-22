import { useNavigate } from "react-router-dom"
import star from "../assets/icons/star.svg"

function ProductCard({ product }) {
  const discountedPrice =
    product.price - (product.price * product.discount) / 100

  const navigate = useNavigate()
  const handleCardClick = () => {
    navigate(`/product/${product.id}`)
  }

  return (
    <div
      onClick={handleCardClick}
      className="w-[9.25rem] lg:w-[18rem] cursor-pointer bg-white rounded-lg shadow_2 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative !p-2">
        {product.discount && (
          <span className="absolute top-2 left-0 !pb-2 bg-secondary-100 text-secondary-400 rounded-br-full rounded-tr-full w-[2.38rem] h-[1.5rem]  justify-center items-center">
            -{product.discount}%
          </span>
        )}

        <img
          src={product.image}
          alt="product"
          className="!p-6 h-[10rem] object-contain flex justify-center items-center"
        />

        {/* Product Details */}
        <div className="p-4">
          <p className="text-lg font-semibold truncate">{product.title}</p>
          {product.discount && (
            <span
              className="line-through text-gray-600"
              style={{ fontSize: "0.625rem" }}>
              $
              {product.price.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          )}

          <div className="flex justify-between items-center">
            <div>
              {product.discount ? (
                <p>
                  $
                  {discountedPrice.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              ) : (
                <p
                  className={`flex items-center gap-0.5 ${
                    !product.discount && "!mt-6"
                  }`}>
                  $
                  {product.price.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              )}
            </div>
            <div
              className={`flex items-center gap-0.5 ${
                !product.discount && "!mt-6"
              }`}>
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
