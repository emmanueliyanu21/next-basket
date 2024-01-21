import React from 'react'
import TopContent from '../featured-post/top-content'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { formatPrice } from '@/libs/util';
import Button from '@/components/Shared/Button'
import { FeaturedContentProps, ActionCallProps } from '../../../types/Home'


const ActionCall: React.FC<FeaturedContentProps & ActionCallProps> = ({ data, action }) => {
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
            <Box className="py-8" display={"flex"} justifyContent={"center"}>
            <Button variant='contained'>
            ADD YOUR CALL TO ACTION
            </Button>
            </Box>
        </Box>
    )
}

export default ActionCall
