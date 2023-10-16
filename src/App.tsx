import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layouts from './layouts/layouts'
import { Home, Cart, NotFound, ProductDetail } from './components'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layouts />}>
        
        <Route path='' element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='product/:id' element={<ProductDetail />} />
        <Route path='*' element={<NotFound />} />

      </Route>
    </Routes>
  )
}

export default App
