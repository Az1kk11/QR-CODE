import axios from "./api";

const ProductServices = {
    async products() {
        const { data } = await axios.get('/products')
        return data
    },
    // async product(id: number) {
    //     const { data } = await axios.post('/product', id)
    //     return data
        
    // },
    // async productDelete(id: number) {
    //     const { data } = await axios.delete(`/product/${id}`)
    //     return data
    // },
}
export default ProductServices