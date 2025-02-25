import { useState } from 'react'

import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import OrderPage from './pages/OrderPage'
import NotFoundPage from './pages/NotFoundPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import './global.scss'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
      
          <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="product/:id" element={<DetailPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
