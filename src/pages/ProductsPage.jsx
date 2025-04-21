import Filters from "../ui/Filters"
import Products from "../components/Products"

function Home() {
  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden">
      <div className="container 3xl:max-w-screen-3xl">
        <div className="flex flex-col md:flex-row">
          <Filters />
          <Products />
        </div>
      </div>
    </div>
  )
}
export default Home
