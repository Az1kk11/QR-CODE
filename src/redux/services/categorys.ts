import axios from "./api";

const CategoryServices = {
    async category() {
        const { data } = await axios.get('/categories')
        return data
    }
}
export default CategoryServices