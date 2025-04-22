import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ArrowRight from "../assets/icons/ArrowRight.svg"
import star from "../assets/icons/star.svg"
import DiscountShape from "../assets/icons/DiscountShape.svg"

function ProductDetailPage() {
  const { id } = useParams()
  const productId = parseInt(id)

  const [product, setProduct] = useState({})

  useEffect(() => {
    fetchProductInfo()
  }, [JSON.stringify(productId)])

  const fetchProductInfo = async () => {
    const response = await fetch(
      `https://fakestoreapi.in/api/products/${productId}`
    )
    const data = await response.json()
    setProduct(data.product)
    console.log(data, 111)
  }

  return (
    <div className="flex flex-col justify-center items-center relative overflow-y-auto scrollbar-hide overflow-x-hidden">
      {/* Breadcrumb */}
      <div className="flex items-center !my-4 absolute top-0 left-6">
        <p className="text-gray-600">Home</p>
        <img src={ArrowRight} alt="ArrowRight" />
        <p className="text-gray-600">Products</p>
        <img src={ArrowRight} alt="ArrowRight" />
        <p className="text-primary underline">{product.category}</p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-x-30 !mt-10 !mx-28">
        {/* image */}
        <img
          src={product.image}
          alt="product"
          className="!p-6 h-[10rem] md:h-[21rem] flex justify-center items-center"
        />

        {/* info */}
        <div>
          <h1 className="text-2xl font-extrabold !px-6 max-w-80">
            {product.title}
          </h1>
          <div className="flex items-center gap-0.5 !px-6">
            <img src={star} alt="star" />
            <h3 className="text-primary-500 font-bold">4.9</h3>
          </div>

          <hr className="border-gray-200 !m-5 md:hidden" />
          <div className="flex items-center gap-x-20">
            <div className="flex flex-col items-start gap-y-2">
              <p className="text-gray-600">. Brand</p>
              <p className="text-gray-600">. Model Name</p>
              <p className="text-gray-600">. Screen Size</p>
              <p className="text-gray-600">. Hard Disk Size</p>
              <p className="text-gray-600">. CPU Model</p>
            </div>

            <div className="flex flex-col items-start gap-y-2">
              <p>{product?.brand || "Probably found in the description."}</p>
              <p>{product?.model || "Probably found in the description."}</p>
              <p>
                {product?.screenSize || "Probably found in the description."}
              </p>
              <p>
                {product?.hardDiskSize || "Probably found in the description."}
              </p>
              <p>{product?.cpuModel || "Probably found in the description."}</p>
            </div>
          </div>
        </div>

        {/* buy card */}
        <div className="w-[19.5rem] h-[12rem]  flex-col justify-center items-center rounded-lg shadow_2 md:block hidden">
          <div className="w-full flex items-center justify-between !p-6">
            <span className="font-medium !text-xl">$ {product.price}</span>
            {product.discount && (
              <span className="flex items-center gap-x-1">
                <img src={DiscountShape} alt="DiscountShape" />
                <span className="text-secondary font-medium text-lg">
                  -{product.discount}%
                </span>
              </span>
            )}
          </div>

          <div className="flex flex-col w-full gap-y-2 !px-6 !pb-6">
            <button className="bg-primary h-12 text-white rounded-lg">
              Buy Now
            </button>
            <button className="text-primary border border-primary h-12 rounded-lg">
              Add to cart
            </button>
          </div>
        </div>
      </div>

      {/* Description card */}
      <div className="!p-8 !mt-4 flex flex-col shadow_2">
        <h2 className="md:text-xl font-bold text-gray-800">Description :</h2>
        <p className="mt-4 text-gray-600 md:text-2xl">{product.description}</p>
      </div>
    </div>
  )
}

export default ProductDetailPage
