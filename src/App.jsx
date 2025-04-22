import { Routes, Route, Navigate } from "react-router-dom"
import AppLayout from "./ui/AppLayout"
import ProductDetailPage from "./pages/ProductDetailPage.jsx"
import ProductsPage from "./pages/ProductsPage.jsx"
import NotFound from "./pages/NotFoundPage.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to="products" replace />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="product/:id" element={<ProductDetailPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
