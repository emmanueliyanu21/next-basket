import React from 'react'
import Button, { ButtonProps } from '@mui/material/Button';

const Index = ( props: ButtonProps) => {
    return (

        <Button
            className={`hover:bg-primary border border-solid border-secondary shadow-none ${'md:px-12 md:py-4 px-2 py-2'
                } font-bolder text-sm font-montserrat text-white bg-secondary`}
            color='secondary'
            variant={props.variant as 'text' | 'outlined' | 'contained'}
        >
            {props.children}
        </Button>
    )
}

export default Index
