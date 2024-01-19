import React from 'react'
import TopContent from '../FeaturedPost/TopContent'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { formatPrice } from '@/utils/util';
import Button from '../../../components/Shared/Button'

type ActionCall = {
    action: {
        button: string,
        text: string
    },
}

export type FeaturedContentProps = {
    data: {
        title: string,
        caption: string
    }
}

const button = {
    value: 'ADD YOUR CALL TO ACTION',
    variant: 'contained'
}

const ActionCall: React.FC<FeaturedContentProps & ActionCall> = ({ data, action }) => {
    return (
        <Box className="bk-wrapper py-36 bg-cover bg-no-repeat bg-center" >
            <Box display="flex" textAlign="center" justifyContent="center" >
                <Box maxWidth={600}>
                    <TopContent data={data} />
                </Box>
            </Box>
            <Box display="flex" textAlign="center" justifyContent="center">
                <Typography maxWidth={450} className="pb-4 text-center font-Montserrat font-regular text-sm leading-24 tracking-wider text-grey">{action.text}</Typography>
            </Box>
            <Typography className='py-2 text-center font-Montserrat font-bold' variant='h5' color="primary">{formatPrice(16.48)}</Typography>
            <Box className="py-8">
            <Button data={button} />
            </Box>
        </Box>
    )
}

export default ActionCall
