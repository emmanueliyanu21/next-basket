import React from 'react'
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export type FeaturedCompanyProps = {
    data: {
        image: string
    }[]
}

const FeaturedCompany = ({ data }: FeaturedCompanyProps) => {
    return (
        <Container className='py-16 bg-lightWhite'>
            <Grid  container spacing={2}  >
                {data.map((item, index) => (
                    <Grid display="flex" alignItems="center" justifyContent="center" key={index} item xs={12} sm={2} className='text-center py-8'>
                        <Image src={item.image} alt="" width={200} height={200} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default FeaturedCompany
