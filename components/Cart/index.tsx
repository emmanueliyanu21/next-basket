import React from 'react';
import { Modal, Fade, Box, Button, Typography, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { RootState } from '../../store/store';
import { formatPrice } from '@/libs/util';
import { Close } from '@mui/icons-material';
import { getCartFromLocalStorage } from '@/libs/util';
import { handleCartModal } from '@/redux/action/cart.action';

const CartModal = () => {
    const dispatch = useDispatch();
    const { cartVisible } = useSelector((state: RootState) => state.cart);
    const cartItems = getCartFromLocalStorage();
    
    const handleClose = () => {
        dispatch(handleCartModal(false));
    }

    const getTotalPriceAndQuantity = () => {
        const result = cartItems.reduce(
            (accumulator, item) => {
                accumulator.totalPrice += item.quantity * item.price;
                accumulator.totalQuantity += item.quantity;
                return accumulator;
            },
            { totalPrice: 0, totalQuantity: 0 }
        );

        return result;
    };

    const { totalPrice, totalQuantity } = getTotalPriceAndQuantity();

    return (
        <Modal
            open={cartVisible}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            onClose={handleClose}
            sx={{
                maxWidth: "610px",
                width: "95%",
                margin: "auto",
            }}
        >
            <Fade in={cartVisible}>
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
                            Shopping Cart
                        </Typography>
                        <Button onClick={handleClose}>
                            <Close />
                        </Button>
                    </Box>
                    {cartItems.length ?
                    <Box className="max-w-md mx-auto">
                        <Box className=" max-h-[400px] overflow-auto overflow-y-scroll">
                            <Box className="h-full"> 
                            {cartItems.map((item: CartItem) => (
                                <CartItem key={item.id} item={item} />
                            ))}
                            </Box>
                            </Box>
                            <Divider className='my-8' />
                            <Box className="flex mb-8 item-center justify-between">
                                <Typography variant="body1" className='text-grey'>
                                    Total Items: {totalQuantity}
                                </Typography>
                                <Typography variant="h6" className='text-black'>
                                    {formatPrice(totalPrice)}
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
                </Box>
            </Fade>
        </Modal>
    );
};

export default CartModal;
