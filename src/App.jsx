import { Routes, Route, Navigate } from "react-router-dom"
import AppLayout from "./ui/AppLayout"
import ProductsPage from "./pages/ProductsPage.jsx"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to="products" replace />} />
        <Route path="products" element={<ProductsPage />} />
        {/* <Route path="products/:id" element={<Product />} /> */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
