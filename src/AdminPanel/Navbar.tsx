import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import './css/navbar.css'
import { logoutAdmin } from '../redux/slices/authSlice/slice'
import { removeItem } from '../helpers/persistance-storage'

function LeftNavbar() {
    const [isOpen, setOpen] = useState(false)
    const toggle = () => setOpen(!isOpen)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const menuRef = useRef()

    const logoutHandler = () => {
        dispatch(logoutAdmin())
        removeItem('token')
        navigate('/admin-login')
    }

    // useEffect(()=>{
    //     let handler = (e: any) => {
    //         if (!menuRef.current.contains(e.target)) {
    //             setOpen(false)
    //         }
    //     }

    //     document.addEventListener('mousedown', handler)
    // })

    return (
        <section
            className={isOpen ? ' sidebar-left navactive' : 'sidebar-left'}
            style={location.pathname.startsWith('/admin-login') ? {display:'none'} : {display:'block', width: isOpen ? '250px' : '70px'}}
            // ref={menuRef}
        >

            <i className="ri-menu-line" style={{ display: isOpen ? 'none' : 'block' }} onClick={toggle}></i>

            <div className="logo">
                {isOpen ? (
                    <i className="ri-arrow-left-line"
                        style={{ paddingRight: isOpen ? '10px' : '0px' }}
                        onClick={toggle}></i>
                ) : (
                    <i className="ri-menu-line" onClick={toggle}></i>
                )}
                <div style={{ display: isOpen ? 'block' : 'none' }}>
                    {/* <img className='logo-admin' src={logo} alt="" /> */}
                </div>
            </div>
            <ul className='sidebar-menu'>
                {navbarItems.map((item, index) => (
                    <NavLink to={item.navigate}
                        key={index}
                        className={(navclassName) => navclassName.isActive ? 'nav-active' : ''}>
                        <li className="sidebar">
                            <span>{item.icon}</span>
                            <span style={{ display: isOpen ? 'block' : 'none' }}>{item.title}</span>
                        </li>
                    </NavLink>
                ))}
                <li className='sidebar text-light'
                onClick={logoutHandler}
                >
                    <i className="ri-logout-box-line"></i>
                    <span style={{ display: isOpen ? 'block' : 'none' }}>Logout</span>
                </li>
            </ul>
        </section>
    )
}

export default LeftNavbar

const navbarItems = [
    { title: 'Categories', navigate: 'admin/categories', icon: <i className="ri-bar-chart-horizontal-line"></i> },
    { title: 'Products', navigate: 'admin/products', icon: <i className="ri-product-hunt-line"></i> },
]