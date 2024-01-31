"use client"

import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from '../store/store';

import { ThemeProvider } from "@emotion/react";
import { theme } from '@/libs/theme'
import CartModal from '@/components/Cart';
import WishList from '@/components/WishList';

export default function ThemeClient({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Provider store={store}>
            <ToastContainer />
            <CartModal />
            <WishList />
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </Provider>
    )
} 