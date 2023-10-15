import { Outlet } from 'react-router-dom'
import { Header } from "../components"

const Layouts = () => {
    return (
        <>
            <Header />
            <>
                <Outlet />
            </>
        </>
    )
}

export default Layouts