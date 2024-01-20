import React, { useEffect } from 'react';
import { Modal, Backdrop, Fade, Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { RootState } from '../../store/store';
import { closeCartModal } from '@/redux/action/cart.action';

const CartModal = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart);

    const handleClose = () => {
        dispatch(closeCartModal());
    }

    return (
        <Modal
    open={cartItems.isCartModalOpen}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
>
    <Fade in={cartItems.isCartModalOpen}>
        <Box
            className="bg-white p-4 rounded-md"
            sx={{
                width: 600,
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}
        >
            <Typography variant="h5" gutterBottom>
                Shopping Cart
            </Typography>
            {cartItems.items.map((item: any) => (
                <CartItem key={item.id} item={item} />
            ))}
            <Box mt={2} display="flex" justifyContent="space-between">
                <Button onClick={handleClose} color="secondary">
                    Close
                </Button>
                <Button variant="contained" color="secondary">
                    Checkout
                </Button>
            </Box>
        </Box>
    </Fade>
</Modal>

    );
};

export default CartModal;
