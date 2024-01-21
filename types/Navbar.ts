import { StaticImageData } from "next/image";
import { ReactNode } from "react";
interface menuIcon {
    name: string;
    icon: ReactNode;
    hasCount?: boolean
}
interface MenuItem {
    url: string;
    name: string;
}
export type NavbarProps = {
    data: {
        menuItems: MenuItem[];
        loginRegisterMenuItem: string;
        icons: menuIcon[];
        logo: StaticImageData;
    };
};