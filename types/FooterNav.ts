import { ReactNode } from 'react'

export type ListData = {
    name: string;
    list?: string[];
};

export type GetInTouch = {
    name: string,
    text?: string,
    action?: string,
    caption?: string
};

export type FooterHeader = {
    image: string,
    icons: {
        name: string,
        icon: ReactNode
    }[]
}

export type Data = {
    companyInfo: ListData;
    legal: ListData;
    feature: ListData;
    reserved: string;
    resources: ListData
    header: FooterHeader,
    getInTouch: GetInTouch
};