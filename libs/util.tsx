import { CartItem } from "@/types/Cart";
import { BestSellingProduct, SingleProduct } from "@/types/Product";

const formatPrice = (price: number) => {
    return price?.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

const getCartFromLocalStorage = () => {
    try {
        const cartData = localStorage.getItem('cart');
        return cartData ? JSON.parse(cartData) : [];
    } catch (error) {
        console.error('Error parsing cart data:', error);
        return [];
    }
};

const saveCartToLocalStorage = (cartItems: CartItem[]) => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
};

const findProductById = (cart: CartItem[], productId: number): CartItem | undefined => {
    return cart.find(product => product.id === productId);
  };

export { formatPrice, getCartFromLocalStorage, saveCartToLocalStorage, findProductById, }