import { useLocation, useNavigate } from 'react-router-dom'
import LeftNavbar from '../AdminPanel/Navbar'
import Routers from '../Route/routers'
import { Header } from '../components'
import './layouts.css'
import { useEffect } from 'react'

const Layouts = () => {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (location.pathname === '/admin') {
            navigate('/admin/categories')
        }
    }, [])

    return (
        <div className={location.pathname.startsWith('/admin') ? 'layout' : ''} >
            {location.pathname.startsWith('/admin') ? <LeftNavbar /> : <Header />}
            <>
                <Routers />
            </>
        </div>
    )
}

export default Layouts