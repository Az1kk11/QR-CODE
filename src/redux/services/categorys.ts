import axios from "./api";

const CategoryServices = {
    async category() {
        const { data } = await axios.get('/categories')
        return data
    },
    async categoryDetail(id:number) {
        const { data } = await axios.get(`category/${id}`)
        return data
    },
    async categoryPost(categories: FormData) {
        const { data } = await axios.post('/category/create', categories)
        return data
    },
    async categoryDelete(id: number) {
        const { data } = await axios.delete(`category/delete/${id}`)
        return data
    }
}
export default CategoryServices