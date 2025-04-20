import Header from "../ui/Header"
import Filters from "../ui/Filters"

function Home() {
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex flex-col items-center">
        <Header />
        <Filters />
      </div>
    </div>
  )
}
export default Home
