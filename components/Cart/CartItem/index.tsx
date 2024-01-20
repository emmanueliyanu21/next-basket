import { useState } from 'react';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Modal, Typography, Button } from '@mui/material';
import { incrementQuantity, decrementQuantity } from '../../../redux/action/cart.action';
import { formatPrice } from '../../../libs/util';
import { RootState } from '../../../store/store';
import { CartItem } from '@/redux/reducer/cartReducer';

type intems = {
  item: CartItem
}

const CartItem = ({ item }: intems) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);


  const handleIncrement = (productId: number) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrement = (productId: number) => {
    dispatch(decrementQuantity(productId));
  };

  const getTotalPrice = () => {
    console.log('I was clicked')
    // return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <Box >
      <Box className="bg-white p-4 max-w-md mx-auto mt-10">
        <Typography variant="body2" className="mb-4">
          Shopping Cart
        </Typography>
        <Box key={item.id} className="flex items-center justify-between mb-4">
          <Box className="flex items-center space-x-4">
            <Image src={item.thumbnail} alt="Bandage" width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '30px', height: 'auto' }} />
            <Box>
              <Typography variant="subtitle1">{item.name}</Typography>
              <Typography variant="body2">{formatPrice(item.price)}</Typography>
            </Box>
          </Box>
          <Box className="flex items-center space-x-2">
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleDecrement(item.id)}
              disabled={item.quantity <= 1}
            >
              -
            </Button>
            <Typography>{item.quantity}</Typography>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleIncrement(item.id)}
            >
              +
            </Button>
          </Box>
        </Box>
        <Typography variant="h6" className="mb-4">
          Total: 
          {/* {formatPrice(getTotalPrice(120))} */}
        </Typography>

        {/* <Button variant="contained" color="primary" onClick={onClose}>
          Close
        </Button> */}
      </Box>
    </Box>
  );
};

export default CartItem;
