import React, { useEffect, useState } from 'react'

import '../css/categories.css'
import { categoriesStart, categoriesSuccess, postCategorieFailure, postCategorieStart, postCategorieSuccess, selectCategories } from '../../redux/slices'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CategoryServices from '../../redux/services/categorys'
import { toast } from 'react-toastify'

export const AdminCategories: React.FC = () => {

    const { categories, isLoading } = useSelector(selectCategories)
    const [name, setName] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

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
        getCategories()
    }, [])

    const handleSubmit = async (e: React.FormEventHandler<HTMLFormElement> | any) => {
        e.preventDefault()
        getCategories()
        const categories = new FormData()
        categories.set('name', name)

        dispatch(postCategorieStart())
        try {
            await CategoryServices.categoryPost(categories)
            dispatch(postCategorieSuccess())
            getCategories()
            toast.success('Categorie succesfuly created')
        } catch (error: any) {
            dispatch(postCategorieFailure())
            toast.error(error.response.data.message)
        }
    }

    const deleteProduct = async (id: number) => {
        dispatch(categoriesStart())
        try {
            await CategoryServices.categoryDelete(id)
            getCategories()
            toast.success('Categorie succesfuly deleted')
        } catch (error: any) {
            toast.error(error.response.data.message)
        }
    }


    return (
        <section className='categorie'>
            <h3 className='categorie-title'>Categorie Create</h3>

            <form onSubmit={handleSubmit}>
                <label className='text-light'>Categories name</label>
                <input
                    placeholder='Title'
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement> | any) => setName(e.target.value)}
                />

                <button type='submit'>
                    {isLoading ? 'Loading...' : 'Create'}
                </button>
            </form>

            <h3 className='all-categories'>All Categories</h3>
            <table>
                <thead className='text-light'>
                    <tr>
                        <th>ID</th>
                        <th>Category name</th>
                        <th>Products</th>
                        <th>Action</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {categories?.map(item => (
                        <tr>
                            <th scope="row">{item.id}</th>
                            <td className='text-capitalize'>{item.name}</td>
                            <td className='text-capitalize'>{item.products}</td>
                            <td>
                                <button
                                    onClick={() => deleteProduct(item.id)}
                                >
                                    {isLoading ? 'Deleting...' : 'Delete'}
                                </button>
                            </td>
                            <td
                                className='category-item'
                            // onClick={() => navigate(`/admin/categories/${item.id}`)}
                            >
                                <i className="ri-file-edit-line"></i>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section >
    )
}