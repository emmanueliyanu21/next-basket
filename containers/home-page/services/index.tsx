import React from 'react'
import HeaderContent from '../header-content'
import Container from '@mui/material/Container';
import Cards from './cards'
import Box from '@mui/material/Box';
import { HeaderProps, ServiceItemProps } from '@/types/Home';

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
