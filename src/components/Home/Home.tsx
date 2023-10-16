import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Products, productFilter, productStart, productSuccess, selectProducts, categoriesStart, categoriesSuccess } from '../../redux/slices/'
import ProductServices from '../../redux/services/products'
import CategoryServices from '../../redux/services/categorys'
import { ProductSkeleton, ProductsCart, Categorys } from '..'

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
    const skeletons = [...new Array(8)].map((_, i) => <ProductSkeleton key={i} />)

    return (
        <div className='container' >
            <Categorys filterCategory={filterCategory} />

            <div className="cards">
                {isLoading ? skeletons : productsCard}
            </div>
        </div>
    )
}
