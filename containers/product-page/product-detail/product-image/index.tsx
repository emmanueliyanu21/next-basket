import React from 'react'
import Box from '@mui/material/Box';
import Image from 'next/image';
import { ProductDetailsProps } from '@/types/Product';

const ProductImage = ({ data }: ProductDetailsProps) => {
    const images = [ 'example1', 'example2']
    return (
        <Box>
            <Image src={data.thumbnail} alt="image" width={600} height={600} />
            <Box display="flex" justifyContent="flex-start" gap={2} className="mt-2">
                { data.images.map((item, index) => (
                    <Image key={index} src={item} alt="image" width={100} height={100} />
                ))}
            </Box>
        </Box>
    )
}

export default ProductImage
