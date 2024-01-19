import React from 'react'
import HeaderContent from '../HeaderContent'
import Container from '@mui/material/Container';
import Cards from './Cards'
import Box from '@mui/material/Box';

export type ServiceItemProps = {
    data: {
        imageUrl: string;
        name: string;
        description: string;
    }[],
};

export type HeaderProps = {
    dataHeader: {
        header: string,
        caption: string,
        detail: string
    }
}

const Services: React.FC<ServiceItemProps & HeaderProps> =  ({ data, dataHeader}) => {
    return (
        <Container className='my-36 pb-8'>
            <HeaderContent data={dataHeader} />
            <Box className='my-16'>
                <Cards data={data} />
            </Box>
        </Container>
    )
}

export default Services
