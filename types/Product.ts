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

export type ProductDetailsProps = {
    data: {
        mainImage: string,
        otherImage: string[]
    }
}