import { HiArrowRight } from "react-icons/hi"
import useMoveBack from "../Hooks/useMoveBack"

function NotFound() {
  const moveBack = useMoveBack()

  return (
    <div className="container xl:max-w-7xl">
      <div className="h-screen bg-secondary-0">
        <div className="sm:max-w-sm flex justify-center pt-10">
          <div>
            <h1 className="text-xl font-bold text-secondary-700 mb-8">
              صفحه ای که دنبالش بودید، پیدا نشد
            </h1>

            <button
              onClick={moveBack}
              className="flex items-center gap-x-2 cursor-pointer">
              <HiArrowRight className="w-6 h-6 text-primary-900" />
              <span className="text-primary-900 font-bold"> برگشت</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default NotFound
