import React from 'react'
import TopContent from './TopContent'
import FeaturedCards from './FeaturedCard'
import Container from '@mui/material/Container';

export type FeaturedCardProps = {
    cards: {
        headers: string[],
        title: string,
        image: string,
        text: string,
        date: string,
        comment: string,
        more: string
    }[]
}

export type FeaturedContentProps = {
    data: {
        title: string,
        caption: string
    }
}

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
