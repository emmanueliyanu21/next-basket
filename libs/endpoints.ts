export const baseURL =  "https://dummyjson.com";

export const getSingle = `https://dummyjson.com/products/`


// const getCartFromLocalStorage = (): CartItem[] => {
//     if (typeof window !== "undefined") {
//         const cartData = window?.localStorage.getItem(dataKeys.cart);
//         return cartData ? JSON.parse(cartData) : [];
//     } else {
//         return []
//     }
// };

// const saveCartToLocalStorage = (cartItems: CartItem[]) => {
//     if (typeof window !== "undefined") {
//         window?.localStorage.setItem(dataKeys.cart, JSON.stringify(cartItems));
//     } else {
//         return []
//     }
// };

// const getWishListFromLocalStorage = (): WishItem[] => {
//     if (typeof window !== "undefined") {
//         const wishData = window?.localStorage.getItem(dataKeys.wishList);
//         return wishData ? JSON.parse(wishData) : [];
//     } else {
//         return []
//     }
// };

// const saveWishListToLocalStorage = (wishItems: WishItem[]) => {
//     if (typeof window !== "undefined") {
//         window?.localStorage.setItem(dataKeys.wishList, JSON.stringify(wishItems));
//     } else {
//         return []
//     }
// };

// const updatePrdtQuantityInCart = (productId: number, count: -1 | 1): CartItem[] => {
//     const itemsInCart = getCartFromLocalStorage()
//     const updatedCart = itemsInCart.map((item) =>
//         item.id === productId ? { ...item, quantity: item.quantity + count } : item
//     )
//     saveCartToLocalStorage(updatedCart)
//     return updatedCart;
// }

// const addPrdtToCart = (product: SingleProduct): CartItem[] => {
//     const { id, price, thumbnail, title, stock } = product
//     const storedCart = getCartFromLocalStorage();
//     const cart = { id, price, thumbnail, title, stock }
//     const existingProduct = storedCart.find((item) => item.id === product.id);

//     if (!existingProduct) {
//         const updatedCart = [...storedCart, { ...cart, quantity: 1 }];
//         saveCartToLocalStorage(updatedCart);
//         return updatedCart;
//     }

//     return storedCart;
// };

// const removePrdtFromCart = (productId: number) => {
//     const cartInLs = getCartFromLocalStorage()
//     // const myCart = cartInLs.length ? cartInLs : cart
//     const updatedCart = cartInLs.filter((item) => item.id !== productId)
//     saveCartToLocalStorage(updatedCart)
//     return updatedCart
// }

// const removePrdtFromWish = (productId: number, wish: WishItem[]) => {
//     const cartInLs = getWishListFromLocalStorage()
//     const myWish = cartInLs.length ? cartInLs : wish
//     const updatedWish = myWish.filter((item) => item.id !== productId)
//     saveWishListToLocalStorage(updatedWish)
//     return updatedWish
// }

// const addPrdtToWishList = (product: SingleProduct): WishItem[] => {
//     const { id, price, thumbnail, title } = product;
//     const wishInLs = getWishListFromLocalStorage();
//     const myWish: WishItem = { id, price, thumbnail, title, quantity: 1 };
//     const existingProductIndex = wishInLs.findIndex((item) => item.id === product.id);
//     if (existingProductIndex === -1) {
//       const updatedWish = [...wishInLs, myWish];
//       saveWishListToLocalStorage(updatedWish);
//       return updatedWish;
//     }
//     return wishInLs;
//   };
