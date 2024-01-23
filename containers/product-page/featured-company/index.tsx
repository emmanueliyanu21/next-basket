import React from 'react'
import Image from 'next/image';
import {Grid, Box} from '@mui/material';
import { FeaturedCompanyProps } from '@/types/Product';

const FeaturedCompany = ({ data }: FeaturedCompanyProps) => {
    return (
        <Box className='py-16 bg-lightWhite' maxWidth={"1200px"} margin={"auto"}>
            <Grid container spacing={2}  >
                {data.map((item, index) => (
                    <Grid display="flex" alignItems="center" justifyContent="center" key={index} item xs={12} sm={2} className='text-center py-8'>
                        <Image src={item.image} alt="" width={200} height={200} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default FeaturedCompany
