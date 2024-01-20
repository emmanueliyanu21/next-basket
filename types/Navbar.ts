import { ReactNode } from 'react'

export type NavbarProps = {
    data: {
        menuItems: string[];
        loginRegisterMenuItem: string;
        icons: ReactNode[];
        logo: ReactNode;
    };
};