import { Link } from 'react-router-dom'
import { DarkMode, Search } from '../'
import './Header.css'

export const Header = () => {
    return (
        <div className="container">
            <div className="navbar">
                <DarkMode />
                <Search />
                <Link to={'/cart'} className="cart">
                    <i className="ri-shopping-cart-2-line"></i>
                </Link>
            </div>
        </div>
    )
}