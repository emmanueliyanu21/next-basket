import React from 'react';
import { Modal, Fade, Box, Button, Typography, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { RootState } from '../../store/store';
import { closeCartModal } from '@/redux/action/cart.action';
import { formatPrice } from '@/libs/util';
import { Close } from '@mui/icons-material';

const CartModal = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart);
    const handleClose = () => {
        dispatch(closeCartModal());
    }

    const getTotalPriceAndQuantity = () => {
        const result = cartItems.items.reduce(
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
            open={cartItems.isCartModalOpen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            onClose={handleClose}
            sx={{
                maxWidth: "610px",
                width: "95%",
                margin: "auto"
            }}
        >
            <Fade in={cartItems.isCartModalOpen}>
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
                            <Close/>
                        </Button>
                   </Box>
                    {totalQuantity ?
                  <Box className="max-w-md mx-auto">
                      {cartItems.items.map((item: any) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                    <Divider className='my-8'/>
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
