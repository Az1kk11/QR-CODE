import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactStars from "react-stars";
import { motion } from "framer-motion"
import ProductServices from '../../redux/services/products'
import { DetailTextSkeleton, ImageSkeleton } from '..';

import './ProductDetail.css'

type typeParams = {
    id: string | any
}

export const ProductDetail: React.FC = () => {
    const [count, setCount] = useState<number>(0)
    const { id } = useParams<typeParams>()
    const navigate = useNavigate()

    const [product, setProduct] = React.useState<{
        id: number;
        name: string;
        description: string;
        price: string;
        image: string;
        weight: string;
        time_created: string;
    }>()

    useEffect(() => {
        async function fetchPizza() {
            try {
                const { data } = await ProductServices.productDetail(id)
                setProduct(data)
            } catch (error) {
                alert('Error data')
                navigate('/')
            }
        }
        fetchPizza()
    }, [id])


    return (
        <div className="container">
            <div className="productDetail">
                <div className="detail-content">
                    <div className="detail-img">
                        {product ? (
                            <img src={product.image} alt={product.name} />
                        ) : (
                            <ImageSkeleton height={500} width={800} />
                        )}
                    </div>
                    <div className="detail-text">
                        {product ? (
                            <>
                                <h2>{product.name}</h2>
                                <p>{product.description}</p>
                                <h4>Price {product.price}$</h4>
                                <h4>Weight {product.weight}g</h4>
                                <ReactStars
                                    className='stars'
                                    value={2.5}
                                    edit={false}
                                    size={24}
                                />
                            </>
                        ) : (
                            <DetailTextSkeleton />
                        )}
                        <div className="add-cart">
                            <div className="cart-top">
                                <motion.button whileTap={count === 0 ? { scale: 1 } : { scale: 0.9 }} className="cart-minus"
                                    disabled={count === 0}
                                    onClick={() => count === 0 ? setCount(0) : setCount(count - 1)}
                                >
                                    <i className="ri-subtract-line"></i>
                                </motion.button>
                                <div className="cart-count">{count}</div>
                                <motion.button whileTap={{ scale: 0.9 }} className="cart-plus"
                                    onClick={() => setCount(count + 1)}
                                >
                                    <i className="ri-add-line"></i>
                                </motion.button>
                            </div>
                            <motion.button whileTap={{ scale: 0.9 }} className='add-cart-btn'>
                                Add to cart
                            </motion.button>
                        </div>
                    </div>
                </div>
                <form className="product-commit">
                    <div className="input-box">
                        <label>Оцените блюдо</label>
                        <ReactStars
                            className='stars'
                            value={0}
                            edit={true}
                            size={54}
                        />
                        <label htmlFor="number">Телефон</label>
                        <input type='tel' id='number' placeholder='Номер телефона' required />
                    </div>
                    <div className="input-box textarea">
                        <label htmlFor="description">Отзыв</label>
                        <textarea name="" id="description" required cols={30} rows={10} aria-disabled placeholder='Введите текст'></textarea>
                    </div>
                    <motion.button whileTap={{ scale: 0.9 }} type='submit' className='commit-btn'>
                        Отправить отзыв
                    </motion.button>
                </form>
            </div>
        </div>
    )
}