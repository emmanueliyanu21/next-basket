import React from 'react'
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ServiceItemProps } from '@/types/Home';

const Cards = ({data}: ServiceItemProps ) => {
    return (
        <Box flexWrap="wrap" display="flex" justifyContent="center">
            {data.map((item, index) => (
                <Box key={index} width={300} mx="auto" textAlign="center">
                    <Box className="mb-8" display="flex" justifyContent="center">
                        <Image src={item.imageUrl} width={80} height={80} alt={item.name} />
                    </Box>
                    <Typography className="text-center font-Montserrat text-2xl font-bold leading-8 text-black mb-2">{item.name}</Typography>
                    <Box display="flex" justifyContent="center">
                        <Typography className="text-center font-regular text-grey leading-5 font-montserrat tracking-wider  text-small" maxWidth={200} variant='body2'>{item.description}</Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default Cards;

