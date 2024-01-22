import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { incrementQuantity, decrementQuantity, removeItem } from '../../../redux/action/cart.action';
import { findProductById, formatPrice, saveCartToLocalStorage } from '../../../libs/util';
import { RootState } from '../../../store/store';
import { Delete } from '@mui/icons-material';
import { CartItem } from '@/types/Cart';

type intems = {
  item: CartItem
}

const CartItem = ({ item }: intems) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const handleIncrement = (productId: number) => {
    dispatch(incrementQuantity(productId));
    const updatedProduct = findProductById(cart.items, productId);
    if (updatedProduct) {
      saveCartToLocalStorage([...cart.items]); 
    }
  };

  const handleDecrement = (productId: number) => {
    dispatch(decrementQuantity(productId));
    const updatedProduct = findProductById(cart.items, productId);
    if (updatedProduct) {
      saveCartToLocalStorage([...cart.items]);
    }
  };

  const deleteItem = (productId: number) => {
    dispatch(removeItem(productId))
    const updatedProduct = findProductById(cart.items, productId);
    if (updatedProduct) {
      saveCartToLocalStorage([...cart.items]);
    }
  }

  return (
    <Box >
      <Box className="bg-white py-2 mt-10">
        <Box key={item.id} className="flex items-center justify-between">
          <Box className="flex items-center space-x-4">
            <Image src={item.thumbnail} alt="Bandage" width="0"
              height="0"
              sizes="100vw"
              style={{ width: '60px', height: 'auto' }} />
            <Box>
              <Typography variant="subtitle1">{item.title}</Typography>
              <Typography variant="body2">{formatPrice(item.price)}</Typography>
            </Box>
          </Box>
         <Box display={"flex"}>
         <Box className="flex items-center space-x-2">
            <Button
            sx={{width: "10px"}}
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
          <IconButton onClick={() => deleteItem(item.id)}>
            <Delete style={{color: "#8B0000"}}/>
          </IconButton>
         </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartItem;
