export type Categories = {
    id:number;
    name: string;
    products: number
}

export interface CategoriesSliceState {
    isLoading: boolean;
    categories: Categories[];
}