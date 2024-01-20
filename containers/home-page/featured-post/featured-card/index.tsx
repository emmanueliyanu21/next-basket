import React from 'react'
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BarChartIcon from '@mui/icons-material/BarChart';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { FeaturedCardProps } from '@/types/Home';

const FeaturedCards = ({ cards }: FeaturedCardProps) => {
    return (
        <Box flexWrap="wrap" display="flex" justifyContent="center" gap={3}>
            {cards.map((product, index) => (
                <Box maxWidth={348} className="bg-white shadow-md pb-8" key={index} >
                    <Image src={product.image} alt={product.title} width={348} height={300} />
                    <Box className="px-6 py-2">
                        <Box className="text-grey my-4" display="flex" gap={3}>
                            {product.headers.map((tag, index) => (
                                <Typography className={`font-Montserrat text-xs font-normal leading-4 tracking-wide ${index === 0 ? 'text-secondary' : ''}`} key={index}>{tag}</Typography>
                            ))}
                        </Box>
                        <Typography className="text-black pb-4 font-Montserrat font-light text-xl leading-30 tracking-0.2">{product.title}</Typography>
                        <Typography maxWidth={280} className="pb-4 font-light text-grey font-Montserrat text-14 font-normal leading-20 tracking-0.2" >{product.text}</Typography>
                        <Box className="pb-2" display="flex" justifyContent="space-between">
                            <Typography className="pb-2 text-grey font-Montserrat text-xs font-normal leading-16 tracking-0.2"><AccessTimeIcon className='text-sm mr-1'  color='secondary' />{product.date}</Typography>
                            <Typography className="text-grey font-Montserrat text-xs font-normal leading-16 tracking-0.2"><BarChartIcon className='text-sm mr-1' color='primary' />{product.comment}</Typography>
                        </Box>
                        <Typography className="text-Montserrat text-sm font-medium leading-6 tracking-wider text-grey">{product.more} <ChevronRightIcon fontSize='small' color='secondary' /></Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    )
}

export default FeaturedCards
