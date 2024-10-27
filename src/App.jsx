
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home/HomePage'
import CartPage from './pages/cart/CartPage'
import WishlistPage from './pages/wishlist/WishlistPage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/wishlist' element={<WishlistPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
