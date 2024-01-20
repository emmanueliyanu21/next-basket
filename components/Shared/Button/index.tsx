import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

type Buttonprops = {
    data: {
        value: string,
        variant: string
    }
}

const Index = ({ data }: Buttonprops) => {
    return (
        <Box display="flex" justifyContent="center">
            <Button
                className={`border border-solid border-secondary shadow-none ${'md:px-12 md:py-4 px-2 py-2'
                    } font-bolder text-sm font-montserrat text-white bg-secondary`}
                color='secondary'
                variant={data.variant as 'text' | 'outlined' | 'contained'}
            >
                {data.value}
            </Button> </Box>
    )
}

export default Index
