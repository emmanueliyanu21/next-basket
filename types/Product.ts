export type ProductListProps = {
    data: Product[],
    limit?: number
}

export type Product = {
        id: number,
        imageUrl: string;
        title: string;
        category: string;
        discountPercentage: number,
        price: number,
        images: string[]
}

export type DescriptionProps = {
    data: {
        header: string[],
        content: {
            header: string,
            text: string[],
            image: string
        }
    }
}

export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export type FeaturedCompanyProps = {
    data: {
        image: string
    }[]
}

export type ProductImageDetailsprops = {
    data: {
        name: string,
        rating: number,
        price: number
    }
}

export type ImageProp = {
    data: string
}

export type ProductIDProp = {
    data: number
}

export type ProductDetailsProps = {
    data: SingleProduct
}

export type SingleProduct = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export type PaginationProps = {
    skip?: number,
    limit?: number
}

export interface ProductState {
    bestSelling: BestSellingProduct;
    singleProduct: SingleProduct;
    loading: boolean
}

export interface BestSellingProduct {
    products: Product[];
    limit: number;
    total: number;
    skip: number;
}
