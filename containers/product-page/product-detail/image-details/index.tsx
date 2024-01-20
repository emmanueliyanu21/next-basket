import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { formatPrice } from '@/libs/util';
import StarRating from '@/components/Shared/Rating';
import Button from '@/components/Shared/Button'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ColorPalette from './color-pallete';
import { ProductImageDetailsprops } from '@/types/Product';

const ImageDetails = ({data}: ProductImageDetailsprops) => {
    const buttonInfo = {
        value: 'Select Options',
        variant: 'contained'
    }
    return (
        <Box display="block" className="pt-2 pl-8">
            <Typography className="py-4 text-black font-Montserrat text-xl font-light leading-6 tracking-wider">
                {data.name}
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
                <Typography className="font-Montserrat text-sm font-bold tracking-wide text-secondary">
                    In Stock
                </Typography>
            </Box>

            <Box className="pb-14 pt-4 mt-36 border-t-2 border-gray-100">
                <ColorPalette />
            </Box>
            <Box display="flex" gap={2}  justifyContent="start" alignContent="center">
                <Button data={buttonInfo} />
                <Box className="pt-1" display="flex" gap={2}  justifyContent="start" alignContent="center">
                    <Box className="rounded-full border-2 border-gray-300 bg-white flex w-4 h-4 p-5 justify-center items-center"><FavoriteIcon /></Box>
                    <Box className="rounded-full border-2 border-gray-300 bg-white flex w-4 h-4 p-5 justify-center items-center"><ShoppingCartIcon /></Box>
                    <Box className="rounded-full border-2 border-gray-300 bg-white flex w-4 h-4 p-5 justify-center items-center"><VisibilityIcon /></Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ImageDetails
