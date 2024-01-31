"use client"

import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from '../store/store';
import { ThemeProvider } from "@emotion/react";
import { theme } from '@/libs/theme'
import CartWishList from '@/components/CartWishList';

export default function ThemeClient({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Provider store={store}>
            <ToastContainer />
            <CartWishList />
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </Provider>
    )
} 