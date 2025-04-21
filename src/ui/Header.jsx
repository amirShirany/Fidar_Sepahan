import { useState } from "react"
import Search from "../assets/icons/Header/Search.svg"
import Login from "../assets/icons/Header/Login.svg"
import Menu from "../assets/icons/Header/Menu.svg"
import Bag from "../assets/icons/Header/Bag.svg"
import User from "../assets/icons/Header/User.svg"
import Modal from "../ui/Modal"
import LoginForm from "../components/LoginForm"
import { NavLink } from "react-router-dom"

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Mobile Header */}
      <div className="flex flex-col mx-auto gap-y-3 !pt-2 w-full max-w-[19.5rem] md:hidden">
        <div className="flex justify-between items-center">
          <button>
            <img src={Menu} alt="menu" />
          </button>

          <h3 className="text-primary-400">Tech Heim</h3>

          {localStorage.getItem("username") === "Amirhossein" &&
          localStorage.getItem("phoneNumber") === "09137983097" ? (
            <div className="flex items-center gap-x-4 cursor-pointer">
              <img src={Bag} alt="bag" />
              <img src={User} alt="user" />
            </div>
          ) : (
            <div
              className="flex items-center gap-x-2 cursor-pointer"
              onClick={() => setOpen(true)}>
              <img src={Login} alt="login" />
              <h4 className="text-primary">Login</h4>
            </div>
          )}
        </div>

        {/* search input and bag icon */}
        <div className="flex items-center gap-x-4">
          {localStorage.getItem("username") === "Amirhossein" &&
          localStorage.getItem("phoneNumber") === "09137983097" ? (
            <></>
          ) : (
            <img src={Bag} alt="bag" />
          )}

          <div className="flex items-center justify-around bg-gray-200 w-full">
            <input
              className="h-10 pl-4 rounded-sm placeholder:text-gray-600 placeholder:font-light placeholder:text-xs"
              type="text"
              placeholder="What can we help you to find ?"
            />
            <img src={Search} alt="search" />
          </div>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:flex w-full items-center !py-8">
        <div className="flex-1 flex items-center justify-center gap-x-12">
          <NavLink to="/">Home</NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-primary underline" : ""
            }>
            Products
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>

        <div className="flex items-center gap-x-4 !pr-28">
          <img src={Search} alt="search" className="w-6 h-6" />
          <img src={Bag} alt="bag" className="w-6 h-6" />

          {localStorage.getItem("username") === "Amirhossein" &&
          localStorage.getItem("phoneNumber") === "09137983097" ? (
            <img src={User} alt="user" className="w-6 h-6" />
          ) : (
            <button
              className="bg-primary text-white rounded-lg !px-4 !py-2"
              onClick={() => setOpen(true)}>
              Login / Sign Up
            </button>
          )}
        </div>
      </div>

      <Modal title="Login" open={open} onClose={() => setOpen(false)}>
        <LoginForm onClose={() => setOpen(false)} />
      </Modal>
    </>
  )
}

export default Header
