import React from 'react'
import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';
import { Typography } from '@mui/material';
import { formatPrice } from '../../libs/util'
import { ProductCardProps } from '../../types/Product'

const ProductCard = ({ data }: ProductCardProps) => {
    return (
        <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={2}>
            {data.map((item, index) => (
                <Box key={index} >
                    <Link href={`/product/${item.id}`}>
                        <Box display="flex" justifyContent="center" height={250}>
                            <Image
                                src={item.images[0]}
                                alt={item.title}
                                width="0"
                                height="0"
                                sizes="100vw"
                                style={{
                                    width: '100%', height: 'auto',
                                    minWidth: '183px',
                                    maxWidth: '183px',
                                    minHeight: '238px',
                                    maxHeight: '250px',
                                    objectFit: 'cover',
                                }}
                            />
                        </Box>
                        <Box textAlign="center" className="font-montserrat my-4">
                            <Typography className="text-center my-2 text-black font-Montserrat text-light font-bold leading-24 tracking-wide" >{item.title}</Typography>
                            <Typography className="text-center mb-2 text-grey font-Montserrat text-small font-bold leading-24 tracking-wide capitalize">{item.category}</Typography>
                            <Typography className='pb-4  font-bold text-light'><span className=" text-lightGrey text-grey">{formatPrice(item.price)}</span> &nbsp;&nbsp;<span className='text-primary'>{formatPrice(item.discountPercentage)}</span></Typography>
                        </Box>
                    </Link>
                </Box>

            ))}
        </Box>

    )
}

export default ProductCard
