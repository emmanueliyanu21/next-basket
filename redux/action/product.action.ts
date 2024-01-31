import { GET_ALL_CATEGORIES } from "../types/categories.types";

export const getCategories = () => ({
    type: GET_ALL_CATEGORIES,
    payload: '',
})

export const getProductCategory = (product: string[]) => ({
    type: GET_ALL_CATEGORIES,
    payload: product,
})