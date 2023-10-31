import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import '../css/product.css'
import { useDispatch, useSelector } from 'react-redux'
import { categoriesStart, categoriesSuccess, postProductStart, postProductsFailure, productStart, productSuccess, selectCategories, selectProducts } from '../../redux/slices'
import ProductServices from '../../redux/services/products'
import CategoryServices from '../../redux/services/categorys'

const thead = [
    { name: 'ID' },
    { name: 'Category name' },
    { name: 'Name' },
    { name: 'Price' },
    { name: 'Edit' },
    { name: 'Delete' },
]

export const AdminProduct: React.FC = () => {
    const dispatch = useDispatch()
    const { categories } = useSelector(selectCategories)
    const { products, isLoading } = useSelector(selectProducts)
    const [values, setValues] = useState({
        name: '',
        description: '',
        image: '',
        price: '',
        category_id: '',
        time_created: '',
        weight: '',
    })

    const getProduct = async () => {
        dispatch(productStart())
        try {
            const response = await ProductServices.products()
            dispatch(productSuccess(response.products))
        } catch (error) {
            console.log(error);
        }
    }

    const getCategories = async () => {
        dispatch(categoriesStart())
        try {
            const response = await CategoryServices.category()
            dispatch(categoriesSuccess(response.categories))
        } catch (error: any) {
            toast.error(error.response.data.message)
        }
    }

    useEffect(() => {
        getProduct()
        getCategories()
    }, [])


    const handleSubmit = async (e: React.FormEventHandler<HTMLFormElement> | any) => {
        e.preventDefault()
        const product = new FormData()
        product.set('name', values.name)
        product.set('description', values.description)
        product.set('image', values.image)
        product.set('price', values.price)
        product.set('category_id', values.category_id)
        product.set('time_created', values.time_created)
        product.set('weight', values.weight)
        dispatch(postProductStart())
        try {
            await ProductServices.productPost(product)
            toast.success('Project succesfuly created')
            getProduct()
        } catch (error: any) {
            dispatch(postProductsFailure())
            toast.error(error.response.data.message)
        }
    }

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement> | any) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    const onChangeImg = (e: any) => {
        setValues({ ...values, image: e.target.files[0] })
    }

    const deleteHandler = async (id: number) => {
        try {
            await ProductServices.productDelete(id)
            getProduct()
            toast.success('Categorie succesfuly deleted')
        } catch (error: any) {
            toast.error(error.response.data.message)
        }
    }

    return (
        <section className='projects-page'>
            <h3>Project create</h3>
            <form onSubmit={handleSubmit}>
                <div className='input-box'>
                    <input
                        name="name"
                        placeholder="Name"
                        type="text"
                        onChange={onChangeValue}
                        required
                    />
                    <input
                        name="description"
                        placeholder="Description"
                        type="text"
                        onChange={onChangeValue}
                        required
                    />
                    <input
                        type="number"
                        name="price"
                        required
                        onChange={onChangeValue}
                        placeholder='price'
                    />
                    <input
                        type="number"
                        name="time_created"
                        required
                        onChange={onChangeValue}
                        placeholder='time created'
                    />
                    <input
                        type="number"
                        name="weight"
                        required
                        onChange={onChangeValue}
                        placeholder='weight'
                    />
                </div>
                <div className='input-box'>
                    <input
                        className='image-select'
                        name="image"
                        type="file"
                        onChange={onChangeImg}
                        required
                    />
                    <select
                        className="mb-3"
                        name='category_id'
                        onChange={onChangeValue}
                        required
                    >
                        <option>Categories</option>
                        {categories?.map(item => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                    <button
                        disabled={isLoading}
                    >
                        {isLoading ? 'Loading...' : 'Create'}
                    </button>
                </div>
            </form>

            <div className="res-table">
                <table>
                    <thead>
                        <tr>
                            {thead?.map((item, index) => (
                                <th key={index}>{item?.name}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map(item => (
                            <tr>
                                <th>{item?.id}</th>
                                <th>{item?.category}</th>
                                <th>{item?.name}</th>
                                <td> <span className='price'>{item?.price}</span> $</td>
                                <td>
                                    <button
                                        className='edit'
                                    // onClick={() => deleteHandler(item.id)}
                                    >
                                        <i className="ri-file-edit-line"></i>
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className='delete'
                                        onClick={() => deleteHandler(item.id)}
                                    >
                                        <i className="ri-delete-bin-line"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}