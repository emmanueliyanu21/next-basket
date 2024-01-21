import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { Box,  Typography, IconButton } from '@mui/material';
import { removeItem } from '../../../redux/action/cart.action';
import { formatPrice } from '../../../libs/util';
import { RootState } from '../../../store/store';
import { Delete } from '@mui/icons-material';
import { WishItem } from '@/types/WishList';

type WishListProps = {
  item: WishItem
}

const WishListItem = ({ item }: WishListProps) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const deleteItem = (productId: number) => {
    dispatch(removeItem(productId))
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
          <IconButton onClick={() => deleteItem(item.id)}>
            <Delete style={{color: "#8B0000"}}/>
          </IconButton>
         </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WishListItem;
