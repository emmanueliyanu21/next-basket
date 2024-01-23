import { CartItem } from "@/types/Cart";
import { WishItem } from "@/types/WishList";
export const dataKeys = {
    cart: "next_cart",
    wishList: "next_wishhlist"
}

const formatPrice = (price: number) => {
    return price?.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

const getCartFromLocalStorage = (): CartItem[] => {
    const cartData = window?.localStorage.getItem(dataKeys.cart);
    return cartData ? JSON.parse(cartData) : [];
};

const saveCartToLocalStorage = (cartItems: CartItem[]) => {
    window?.localStorage.setItem(dataKeys.cart, JSON.stringify(cartItems));
};

const getWishListFromLocalStorage = (): WishItem[] => {
    const wishData = window?.localStorage.getItem(dataKeys.wishList);
    return wishData ? JSON.parse(wishData) : [];
};

const saveWishListToLocalStorage = (wishItems: WishItem[]) => {
    window?.localStorage.setItem(dataKeys.wishList, JSON.stringify(wishItems));
};

const findProductById = (cart: CartItem[], productId: number): CartItem | undefined => {
    return cart.find(product => product.id === productId);
};

const updatePrdtQuantityInCart = (productId: number, carts: CartItem[], count: -1 | 1): CartItem[] => {

    const itemsInCart = getCartFromLocalStorage()
    const b = itemsInCart.length ? itemsInCart : carts
    const updatedCart = b.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + count } : item
    )
    saveCartToLocalStorage(updatedCart)
    return updatedCart;
}

const addPrdtToCart = (product: CartItem, cart: CartItem[]) => {
    const cartInLs = getCartFromLocalStorage()
    const myCart = cartInLs.length ? cartInLs : cart
    const existingProduct = myCart.find((item) => item.id === product.id)
    if (!existingProduct) {
        let updatedCart = [...myCart, { ...product, quantity: 1 }]
        saveCartToLocalStorage(updatedCart)
        return updatedCart
    }
    return cart;
}

const removePrdtFromCart = (productId: number, cart: CartItem[]) => {
    const cartInLs = getCartFromLocalStorage()
    const myCart = cartInLs.length ? cartInLs : cart
    const updatedCart = myCart.filter((item) => item.id !== productId)
    saveCartToLocalStorage(updatedCart)
    return updatedCart
}

const removePrdtFromWish = (productId: number, wish: WishItem[]) => {
    const cartInLs = getWishListFromLocalStorage()
    const myWish = cartInLs.length ? cartInLs : wish
    const updatedWish = myWish.filter((item) => item.id !== productId)
    saveWishListToLocalStorage(updatedWish)
    return updatedWish
}

const addPrdtToWishList = (product: WishItem, wish: WishItem[]) => {
    const cartInLs = getWishListFromLocalStorage()
    const myWish = cartInLs.length ? cartInLs : wish
    const existingProduct = myWish.find((item) => item.id === product.id)
    if (!existingProduct) {
        let updatedWish = [...myWish, { ...product, quantity: 1 }]
        saveWishListToLocalStorage(updatedWish)
        return updatedWish
    }
    return wish;
}

export { formatPrice, getCartFromLocalStorage, saveCartToLocalStorage, findProductById, updatePrdtQuantityInCart, addPrdtToCart, removePrdtFromCart, removePrdtFromWish, addPrdtToWishList, getWishListFromLocalStorage }