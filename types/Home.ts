import { TypographyProps } from '@mui/material';

export type ActionCallProps = {
    action: {
        button: string,
        text: string
    },
}

export type FeaturedContentProps = {
    data: {
        title: string,
        caption: string
    }
}

export type HeaderProps = {
    dataHeader: {
        title: string,
        caption: string,
        detail: string
    }
}


export type FeaturedCardProps = {
    cards: {
        headers: string[],
        title: string,
        image: string,
        text: string,
        date: string,
        comment: string,
        more: string
    }[]
}

export interface HeaderContentProps {
    data: {
        header?: string
        caption: string
        detail?: string
        isvisible?: boolean
    }
}

export interface Item {
    itemCount?: number;
    category?: string;
    readMore?: string;
    variant?: TypographyProps['variant'];
}

export interface ItemContentProps extends Item {
    variant?: TypographyProps['variant'];
}

export type ServiceItemProps = {
    data: {
        imageUrl: string;
        name: string;
        description: string;
    }[],
};

export type Testimonialprops = {
    data: {
        gallery: { image: string }[],
        testimonial: {
            header: string,
            rating: number,
            text: string,
            name: string,
            title: string,
            image: string
        }
    }
}