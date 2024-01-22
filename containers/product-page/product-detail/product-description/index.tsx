import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Typography, Box, CircularProgress} from '@mui/material';
import {  formatPrice } from '@/libs/util';
import StarRating from '@/components/Shared/Rating';
import Button from '@/components/Shared/Button'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ColorPalette from './color-pallete';
import { SingleProduct } from '@/types/Product';
import { addToCart, openCartModal } from '@/redux/action/cart.action';
import Snackbar from '@/components/Snackbar';
import { addToWish, openWishModal } from '@/redux/action/wish.action';

type ProductDetailProps = {
    data: SingleProduct;
    loading: boolean;
}
const snacksData = {
    cart: "Items added to cart!",
    wishlist: "Items added to wishlist!"
}
const ProductDescription: React.FC<ProductDetailProps> = ({ data, loading }) => {
    const [isVisible, setSnackbarOpen] = useState(false);
    const [snackMessage, setSnackbarMessage] = useState("");

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        setSnackbarOpen(true);
        setSnackbarMessage(snacksData.cart);
        dispatch(addToCart(data));
        dispatch(openCartModal());
    };

    const handleAddToWish = () => {
        setSnackbarOpen(true);
        setSnackbarMessage(snacksData.wishlist);
        dispatch(addToWish(data));
        dispatch(openWishModal());
    }

    // this is static because the api has no color pallete
    const colors = ['#23A6F0', '#2DC071', '#E77C40', '#252B42'];

    return (

        <Box style={{maxWidth: "600px", margin: "auto", width: "100%"}} display="block" className="pt-2 pl-8">
            {loading || !data.brand ? <Box height={"300px"} alignItems={"center"} className="mt-12" sx={{ display: 'flex', justifyContent: 'center'}}>
                <CircularProgress />
            </Box>
            :
            
        <>
            <Snackbar open={isVisible} close={() => setSnackbarOpen(false)} message={snackMessage} />
            <Typography className="py-4 text-black font-Montserrat text-xl font-light leading-6 tracking-wider">
                {data.brand}
            </Typography>
            <Box className="py-2" justifyContent="left" display="flex" alignItems="center" gap={2}>
                <StarRating value={data.rating} />
                <Typography className="text-grey font-Montserrat text-sm font-medium tracking-wide">10 Reviews</Typography>
            </Box>
            <Typography className="font-Montserrat text-2xl font-bold leading-8 tracking-wide text-black">
                {formatPrice(data.price)}
            </Typography>
            <Box className="py-2" justifyContent="left" display="flex" alignItems="center" gap={2}>
                <Typography className="font-Montserrat text-sm font-medium tracking-wider text-grey">
                    Availability :
                </Typography>
                <Typography className="font-Montserrat text-sm font-bold tracking-wide">
                    {data.stock > 0 ? <span className='text-secondary'>In Stock</span> : <span className='text-red'>Out of Stock</span>}
                </Typography>
            </Box>
            <Box><Typography>{data.description}</Typography></Box>
            <Box className="pb-14 pt-4 mt-32 border-t-2 border-gray-100">
                <ColorPalette colors={colors} />
            </Box>
            <Box className="xs:flex flex-wrap" display="flex" gap={2} justifyContent="start" alignContent="center">
                <Button variant="contained">
                    Select Options
                </Button>
                <Box className="pt-1" display="flex" gap={2} justifyContent="start" alignContent="center">
                    <Box onClick={handleAddToWish} className="cursor-pointer hover:bg-gray-100 hover:border-gray-400 transition duration-300 ease-in-out rounded-full border-2 border-gray-300 bg-white flex w-4 h-4 p-5 justify-center items-center"><FavoriteIcon /></Box>
                    <Box onClick={handleAddToCart} className="cursor-pointer hover:bg-gray-100 hover:border-gray-400 transition duration-300 ease-in-out rounded-full border-2 border-gray-300 bg-white flex w-4 h-4 p-5 justify-center items-center"><ShoppingCartIcon /></Box>
                    <Box className="cursor-pointer hover:bg-gray-100 hover:border-gray-400 transition duration-300 ease-in-out rounded-full border-2 border-gray-300 bg-white flex w-4 h-4 p-5 justify-center items-center"><VisibilityIcon /></Box>
                </Box>
                
            </Box>
            </>
            }
        </Box>
    )
}

export default ProductDescription
