import axios from "./api";

const AuthServices = {
    async adminLogin(user: object) {
        const { data } = await axios.post('/login', user)
        return data
    }
}

export default AuthServices