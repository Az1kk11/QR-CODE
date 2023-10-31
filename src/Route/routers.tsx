import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, NotFound, ProductDetail } from '../components'
import { AdminLogin } from '../AdminPanel/AdminLogin'
import Protected from './protected'
import { AdminCategories } from '../AdminPanel/Category/AdminCategories'
import { CategoriesPut } from '../AdminPanel/Category/AdminCategoriePut'
import { AdminProduct } from '../AdminPanel/Products/AdminProducts'

const Routers = () => {
  return (
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='product/:id' element={<ProductDetail />} />
      <Route path='*' element={<NotFound />} />

      {/* admin panel */}

      <Route path='admin-login' element={<AdminLogin />} />

      <Route element={<Protected />}>
        <Route path='admin/categories' element={<AdminCategories />} />
        <Route path='admin/categories/:id' element={<CategoriesPut />} />
        <Route path='admin/products' element={<AdminProduct />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes >
  )
}

export default Routers