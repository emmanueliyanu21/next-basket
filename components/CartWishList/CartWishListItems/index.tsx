import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { updateCart } from '../../../redux/action/cart.action';
// import { removeItem as removeFromCart } from '../../../redux/action/cart.action';
import { formatPrice, removeItemFromItems, updateQuantityInItems, } from '../../../libs/util';
import { Delete } from '@mui/icons-material';
import { CartItem } from '@/types/Cart';
import { WishItem } from '@/types/WishList';

type CartWishProps = {
  item: CartItem | WishItem,
  isCart: boolean
}

const CartWishListItem = ({ item, isCart }: CartWishProps) => {
  const dispatch = useDispatch();

  const handleIncrement = (productId: number) => {
    dispatch(updateCart(updateQuantityInItems('cart', productId, 1)))
  };

  const handleDecrement = (productId: number) => {
    dispatch(updateCart(updateQuantityInItems('cart', productId, -1)));
  };

  const deleteItem = (productId: number) => {
    dispatch(updateCart(removeItemFromItems('cart', productId)));
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
          {isCart && (
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
              disabled={!!(item.stock && item.quantity >= item.stock)}
            >
              +
            </Button>
          </Box>
          )}
          <IconButton onClick={() => deleteItem(item.id)}>
            <Delete style={{color: "#8B0000"}}/>
          </IconButton>
         </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartWishListItem;
