import React from 'react'
import HeaderContent from '../header-content'
import {Container, Box} from '@mui/material';
import Cards from './cards'
import { HeaderProps, ServiceItemProps } from '@/types/Home';

const Services: React.FC<ServiceItemProps & HeaderProps> =  ({ data, dataHeader}) => {
    return (
        <Container className='my-36 pb-8'>
            <HeaderContent content={dataHeader} />
            <Box className='my-16'>
                <Cards data={data} />
            </Box>
        </Container>
    )
}

export default Services
