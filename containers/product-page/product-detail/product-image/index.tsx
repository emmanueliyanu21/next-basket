import React from 'react'
import Box from '@mui/material/Box';
import Image from 'next/image';
import { ProductDetailsProps } from '@/types/Product';

const ProductImage = ({ data }: ProductDetailsProps) => {
    return (
        <Box>
            <Image src={data.thumbnail} alt="image" width="0" height="0"
                sizes="100vw"
                style={{
                    width: '500px', height: '500px', objectFit: 'cover',
                }} />
            <Box display="flex" justifyContent="flex-start" gap={2} className="mt-2">
                {data.images.map((item, index) => (
                    <Image key={index} src={item} alt="image" width="0" height="0" sizes="100vw"
                        style={{
                            width: '100px', height: 'auto', objectFit: 'cover',
                        }} />
                ))}
            </Box>
        </Box>
    )
}

export default ProductImage
