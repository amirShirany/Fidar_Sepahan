import { Outlet } from "react-router-dom"
import Header from "./Header"

function AppLayout() {
  return (
    <div className="h-screen flex flex-col items-center overflow-y-auto overflow-x-hidden">
      <Header />
      {/* content */}
      <div className="p-8 overflow-y-auto flex justify-center">
        <div className="mx-auto max-w-screen-3xl">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AppLayout
