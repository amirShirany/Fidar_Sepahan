import { HiOutlineX } from "react-icons/hi"
import useOutSideClick from "../Hooks/useOutSideClick"

function Modal({ open, children, onClose, title }) {
  const ref = useOutSideClick(onClose)

  return (
    open && (
      <div className="backdrop-blur-sm fixed top-0 left-0 w-full h-screen !bg-white z-50">
        <div
          ref={ref}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary-0 p-4 rounded-lg shadow-lg transition-all duration-300 ease-out w-[calc(100vw-2rem)] md:max-w-screen-md max-h-[calc(100vh-2rem)] overflow-y-auto">
          <div className="flex items-center justify-between border-b border-b-secondary-600 pb-2 mb-6">
            <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
            <button onClick={onClose}>
              <HiOutlineX className="w-5 h-5 text-gray-800" />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  )
}

export default Modal
