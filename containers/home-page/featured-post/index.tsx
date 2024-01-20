import React from 'react'
import TopContent from './top-content'
import FeaturedCards from './featured-card'
import Container from '@mui/material/Container';
import { FeaturedCardProps, FeaturedContentProps } from '@/types/Home';

const FeaturedPost: React.FC<FeaturedContentProps & FeaturedCardProps> = ({ data, cards }) => {
    return (
        <>
            <TopContent data={data} />
            <Container maxWidth="lg" className="pb-2">
                <FeaturedCards cards={cards} />
            </Container>
        </>
    )
}

export default FeaturedPost
