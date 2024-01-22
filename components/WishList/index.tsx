import React from 'react';
import { Modal, Fade, Box, Button, Typography, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { formatPrice } from '@/libs/util';
import { Close } from '@mui/icons-material';
import { closeWishModal } from '@/redux/action/wish.action';
import WishListItem from './WishListItem';

const WishListModal = () => {
    const dispatch = useDispatch();
    const wishLists = useSelector((state: RootState) => state.wishList);
    const handleClose = () => {
        dispatch(closeWishModal());
    }

    const getTotalPriceAndQuantity = () => {
        const result = wishLists.items.reduce(
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
            open={wishLists.isWishModalOpen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            onClose={handleClose}
            sx={{
                maxWidth: "610px",
                width: "95%",
                margin: "auto"
            }}
        >
            <Fade in={wishLists.isWishModalOpen}>
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
                    <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                        <Typography className="text-grey font-montserrat" variant="body1" gutterBottom>
                            WishList
                        </Typography>
                        <Button onClick={handleClose}>
                            <Close />
                        </Button>
                    </Box>
                    {totalQuantity ?
                        <Box className="max-w-md mx-auto">
                            {wishLists.items.map((item: any) => (
                                <WishListItem key={item.id} item={item} />
                            ))}
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
                                {/* <Button onClick={handleClose} color="secondary" className="bg-black text-white">
                            Close
                        </Button> */}
                                <Button variant="contained" className="bg-secondary text-white" color="secondary">
                                    Add To Cart
                                </Button>
                            </Box>
                        </Box>
                        :
                        <Box height={"200px"} textAlign={"center"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                            <p>Your wish list is empty</p>
                        </Box>
                    }
                </Box>
            </Fade>
        </Modal>

    );
};

export default WishListModal;
