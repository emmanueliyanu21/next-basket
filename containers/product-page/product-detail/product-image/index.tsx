import React from 'react'
import Box from '@mui/material/Box';
import Image from 'next/image';
import { ImageProp } from '@/types/Product';
// import example1 from '../../../../../public/images/example1.jpeg'
// import example2 from '../../../../../public/images/example2.jpeg'

const ProductImage = ({ data }: ImageProp) => {
    const images = [ 'example1', 'example2']
    return (
        <Box>
            <Image src={data} alt="image" width={600} height={600} />
            <Box display="flex" justifyContent="flex-start" gap={2} className="mt-2">
                {/* { images.map((item, index) => (
                    <Image key={index} src={item} alt="image" width={100} height={100} />
                ))} */}
            </Box>
        </Box>
    )
}

export default ProductImage
