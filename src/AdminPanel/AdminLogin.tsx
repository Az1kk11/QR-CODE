// import logo from '../../assets/imags/karsoft.png'
import React, { useEffect, useState } from 'react'

import './css/admin-login.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectAuth, siginAdminStart, siginAdminSuccess } from '../redux/slices/authSlice/slice'
import AuthServices from '../redux/services/auth'
import { toast } from 'react-toastify'

export const AdminLogin: React.FC = () => {
    const { isLoading, logedIn } = useSelector(selectAuth)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const loginHandler = async (e: React.FormEventHandler<HTMLFormElement> | any) => {
        e.preventDefault()

        const adminLogin = new FormData()
        adminLogin.set('email', email)
        adminLogin.set('password', password)
        dispatch(siginAdminStart())
        try {
            const response = await AuthServices.adminLogin(adminLogin)
            dispatch(siginAdminSuccess(response))
            toast.success('You have successfully logged in')
        } catch (error: any) {
            console.log(error);
            
            toast.error(error.response.data.message)
        }
    }

    useEffect(() => {
        if (logedIn) {
            navigate('/admin/categories')
        }
    }, [logedIn])


    return (
        <section className='admin-login'>
            {/* <img src={logo} alt="" /> */}
            <form onSubmit={loginHandler}>
                <h3>Admin</h3>
                <div className="input-box">
                    <input
                        type='text'
                        placeholder='Email'
                        required    
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        placeholder='Password'
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button
                    type='submit'
                    disabled={isLoading}
                >
                    {isLoading ? 'loading...' : 'Login'}
                </button>
            </form>
        </section>
    )
}