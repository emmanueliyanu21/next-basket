export type ProductCardProps = {
    data: {
        id: number,
        imageUrl: string;
        title: string;
        category: string;
        discountPercentage: number,
        price: number,
        images: string[]
    }[],
}

export type Product = {
    data: {
        id: number,
        imageUrl: string;
        title: string;
        category: string;
        discountPercentage: number,
        price: number,
        images: string[]
    }[],
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
    data: {
        id: number,
        title: string,
        description: string,
        price: number,
        discountPercentage: number,
        rating: number,
        stock: number,
        brand: string,
        category: string,
        thumbnail: string,
        images: string[]
    }
}
