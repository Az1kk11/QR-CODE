
export type Products = {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
}

export interface ProductsSliceState {
    isLoading: boolean;
    products: Products[];
    filterProducts: Products[];
    productDetail: Products[];
}
