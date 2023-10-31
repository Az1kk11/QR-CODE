import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { DarkMode, Search } from '..'

import './Header.css'

export const Header: React.FC = () => {
    const location = useLocation()

    return (
        <div className="container">
            <div className="navbar">
                <div className='close-box'>
                    {location.pathname.startsWith('/product') ? (
                        <Link to={'/'} className="left-close">
                            <i className="ri-arrow-left-line"></i>
                        </Link>
                    ) : (
                        ''
                    )}
                    <DarkMode />
                </div>
                <div className="search-box">
                    <Search />
                </div>
                {/* <Link to={'/cart'} className="cart">
                    <i className="ri-shopping-cart-2-line"></i>
                </Link> */}
            </div>
        </div>
    )
}