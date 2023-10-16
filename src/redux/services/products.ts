import axios from "./api";

const ProductServices = {
    async products() {
        const { data } = await axios.get('/products')
        return data
    },
    async productDetail(id: string) {
        const { data } = await axios.get(`/product/${id}`)
        return data
    }
}
export default ProductServices