import Header from "../ui/Header"
import Filters from "../ui/Filters"
import Products from "../components/Products"

function Home() {
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex flex-col items-center">
        <Header />
        <div className="flex flex-col md:flex-row ">
          <Filters className="w-full" />
          <div className="flex justify-center w-full">
            <Products />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
