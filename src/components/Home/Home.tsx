import React, { useEffect, useState } from 'react'
import { Categorys } from '../Categorys/Categorys'
import { ProductsCart } from '../ProductsCards/ProductsCard'
import CategoryServices from '../../redux/services/categorys'
import { categoriesStart, categoriesSuccess } from '../../redux/slices/categories/slice'
import { useDispatch, useSelector } from 'react-redux'
import { Products, productFilter, productStart, productSuccess, selectProducts } from '../../redux/slices/produts/slice'
import ProductServices from '../../redux/services/products'
import Skeleton from '../ProductsCards/Skeleton'

import './Home.css'

export const Home: React.FC = () => {
    const dispatch = useDispatch()

    const { products, filterProducts, isLoading } = useSelector(selectProducts)

    const filterCategory = (categoryName: string) => {
        if (categoryName === '') {
            dispatch(productFilter(products))
        } else {
            const newProducts = products.filter(item => item.category === categoryName)
            dispatch(productFilter(newProducts))
        }
    }

    const getCategories = async () => {
        dispatch(categoriesStart())
        try {
            const res = await CategoryServices.category()
            dispatch(categoriesSuccess(res.categories))
        } catch (error) { console.log(error) }
    }

    const getProducts = async () => {
        dispatch(productStart());
        try {
            const res = await ProductServices.products();
            dispatch(productSuccess(res.products));
            dispatch(productFilter(res.products))
        } catch (error) { console.log(error) };
    }

    useEffect(() => {
        getProducts()
        getCategories()
    }, [])

    const productsCard = filterProducts.map((item: Products) => <ProductsCart key={item.id} {...item} />)
    const skeletons = [...new Array(8)].map((_, i) => <Skeleton key={i} />)

    return (
        <div className='container' >
            <Categorys filterCategory={filterCategory} />

            <div className="cards">
                {isLoading ? skeletons : productsCard}
            </div>
        </div>
    )
}
