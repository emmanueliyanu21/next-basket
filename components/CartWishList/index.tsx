import React, { useState } from 'react';
import { Modal, Fade, Box, Button, Typography, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { formatPrice, getLocalStorageItems } from '@/libs/util';
import { Close } from '@mui/icons-material';
// import { getLocalStorageItems } from '@/libs/util';
import { handleCartWishModal } from '@/redux/action/cart.action';
import { CartItem } from '@/types/Cart';
import { WishItem } from '@/types/WishList'
import CartItemModal from './CartWishListItems';

export type CommonItem = {
    id: number;
    price: number;
    thumbnail: string;
    title: string;
    quantity: number; // Optional for compatibility
    stock?: number
  }

const CartWishList = () => {
    const dispatch = useDispatch();
    const { isVisible } = useSelector((state: RootState) => state.cart);
    
    const handleClose = () => {
        dispatch(handleCartWishModal({status:false, key: 'cart'}));
    }

    const cartItems: CommonItem[] = getLocalStorageItems('cart');
    const wishItems: CommonItem[] = getLocalStorageItems('wishhList');
    const getTotalPriceAndQuantity = <T extends CommonItem>(items: T[]) => {
        return items.reduce(
            (accumulator, item) => {
                accumulator.totalPrice += item.quantity * item.price;
                accumulator.totalQuantity += item.quantity;
                return accumulator;
            },
            { totalPrice: 0, totalQuantity: 0 }
        );
    };

    const cartTotal = getTotalPriceAndQuantity(cartItems)
    const wishTotal = getTotalPriceAndQuantity(wishItems)
    return (
        <Modal
            open={isVisible.status}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            onClose={handleClose}
            sx={{
                maxWidth: "610px",
                width: "95%",
                margin: "auto",
            }}
        >
            <Fade in={isVisible.status}>
                <Box
                    className="bg-white p-4 rounded-md"
                    sx={{
                        width: "100%",
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                        <Typography className="text-grey font-montserrat" variant="body1" gutterBottom>
                          { isVisible.key === 'cart' ? 'Shopping Cart' : 'WishList'}
                        </Typography>
                        <Button onClick={handleClose}>
                            <Close />
                        </Button>
                    </Box>
                    {isVisible.key === 'cart' ? <Box>
                    {cartItems.length ?
                    <Box className="max-w-md mx-auto">
                        <Box className=" max-h-[400px] overflow-auto overflow-y-scroll">
                            <Box className="h-full"> 
                            {cartItems.map((item) => (
                                <CartItemModal key={item.id} item={item} isCart={true} />
                            ))}
                            </Box>
                            </Box>
                            <Divider className='my-8' />
                            <Box className="flex mb-8 item-center justify-between">
                                <Typography variant="body1" className='text-grey'>
                                    Total Items: {cartTotal.totalQuantity}
                                </Typography>
                                <Typography variant="h6" className='text-black'>
                                    {formatPrice(cartTotal.totalPrice)}
                                </Typography>
                            </Box>
                            <Box my={2} textAlign={"right"}>
                                <Button variant="contained" className="bg-secondary text-white" color="secondary">
                                    Checkout
                                </Button>
                            </Box>
                            
                        </Box>
                        :
                        <Box height={"200px"} textAlign={"center"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                            <p>Your cart is empty</p>
                        </Box>
                    }
                    </Box> : 
                    <Box>
                        {wishTotal.totalQuantity ?
                        <Box className="max-w-md mx-auto">
                            {wishItems.map((item: any) => (
                                <CartItemModal key={item.id} item={item} isCart={false} />
                            ))}
                            <Divider className='my-8' />
                            <Box className="flex mb-8 item-center justify-between">
                                <Typography variant="body1" className='text-grey'>
                                    Total Items: {wishTotal.totalQuantity}
                                </Typography>
                                <Typography variant="h6" className='text-black'>
                                    {formatPrice(wishTotal.totalPrice)}
                                </Typography>
                            </Box>
                        </Box>
                        :
                        <Box height={"200px"} textAlign={"center"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                            <p>Your wish list is empty</p>
                        </Box>
                    }
                    </Box>
                    }
                </Box>
            </Fade>
        </Modal>
    );
};

export default CartWishList;
