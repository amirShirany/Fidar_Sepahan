import React, { useState, useEffect } from "react"

function LoginForm() {
  const [username, setUsername] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  useEffect(() => {
    const storedUsername = localStorage.getItem("username")
    const storedPhoneNumber = localStorage.getItem("phoneNumber")

    if (storedUsername) setUsername(storedUsername)
    if (storedPhoneNumber) setPhoneNumber(storedPhoneNumber)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem("username", username)
    localStorage.setItem("phoneNumber", phoneNumber)
  }

  return (
    <div className="flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl w-full max-w-md border border-gray-100">
        {/* Username Field */}
        <div>
          <label
            htmlFor="username"
            className="block text-gray-800 font-medium mb-3">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Phone Number Field */}
        <div>
          <label
            htmlFor="phone"
            className="block text-gray-800 font-medium mb-3">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
            className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all font-semibold tracking-wide">
          Sign In
        </button>
      </form>
    </div>
  )
}

export default LoginForm
