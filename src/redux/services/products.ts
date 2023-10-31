import axios from "./api";

// export type ProductsPost = {
//     name: string;
//     description: string;
//     image: string;
//     price: number;
//     category_id: number;
//     time_created: number;
//     weight: number;
// }

const ProductServices = {
    async products() {
        const { data } = await axios.get('/products')
        return data
    },
    async productDetail(id: string) {
        const { data } = await axios.get(`/product/${id}`)
        return data
    },
    async productPost(product: FormData) {
        const { data } = await axios.post('/product/create', product)
        return data
    },
    async productDelete(id: number) {
        const { data } = await axios.delete(`product/delete/${id}`)
        return data
    }
    
}
export default ProductServices