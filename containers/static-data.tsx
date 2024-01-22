import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const serviceData = {
    data: [
        { imageUrl: '/icons/bx_bxs-book-reader.png', name: 'Easy Wins', description: 'Get your best looking smile now!' },
        { imageUrl: '/icons/carbon_book.png', name: 'Concrete', description: 'Defalcate is most focused in helping you discover your most beautiful smile' },
        { imageUrl: '/icons/bx_bxs-book-reader.png', name: 'Hack Growth', description: 'Overcame any hurdle or any other problem.' },
    ],
    dataHeader: {
        title: 'Featured Products',
        caption: 'THE BEST SERVICES',
        detail: 'Problems trying to resolve the conflict between '
    }
}

const bestSellingData = {
    dataHeader: {
        title: 'Featured Products',
        caption: 'BESTSELLER PRODUCTS',
        detail: 'Problems trying to resolve the conflict between ',
    }
}

const featurePost = {
    topContent: {
        title: 'Featured Posts',
        caption: 'Practice Advice'
    },
    cards: [
        {
            headers: ['Google', 'Trending', 'New'],
            title: "Loudest à la Madison #1 (L'integral)",
            image: '/images/unsplash_hHdHCfAifHU.png',
            text: " We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
            date: '22 April 2021',
            comment: '10 comments',
            more: 'Learn More'
        },
        {
            headers: ['Google', 'Trending', 'New'],
            title: "Loudest à la Madison #1 (L'integral)",
            image: '/images/unsplash_tVEqStC2uz8.png',
            text: " We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
            date: '22 April 2021',
            comment: '10 comments',
            more: 'Learn More'
        },
        {
            headers: ['Google', 'Trending', 'New'],
            title: "Loudest à la Madison #1 (L'integral)",
            image: '/images/unsplash_dEGu-oCuB1Y.png',
            text: " We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
            date: '22 April 2021',
            comment: '10 comments',
            more: 'Learn More'
        }
    ]
}

const testimonialData = {
    gallery: [
        { image: '/images/unsplash_0y8p69vwIYM.jpeg' },
        { image: '/images/unsplash_ah7yIXWrtKs.png' },
        { image: '/images/unsplash_6_dx4H4yi1Y.png' },
        { image: '/images/unsplash_GHztzvLLOdQ.png' },
        { image: '/images/unsplash_UUTOuXqaExk.png' },
        { image: '/images/unsplash_rhn8ff1G_QY.png' },
        { image: '/images/unsplash_jo40QKbxUP0.png' },
        { image: '/images/unsplash_QLGA5Zv3doo.png' },
        { image: '/images/unsplash_1R1ecHV4i0Y.png' },
    ],
    testimonial: {
        header: 'What they say about us',
        rating: 4,
        text: 'Slate helps you see how many more days you need to work to reach your financial goal.',
        name: 'Regina Miles',
        title: 'Designer',
        image: '/images/user.jpg'
    }
}

const actionCall = {
    topContent: {
        title: 'Problems trying to resolve the conflict between',
        caption: 'Designing Better Experience'
    },
    data: {
        text: 'Problems trying to resolve the conflict between the two major realms of Classical physics: ',
        price: '$16.48',
        button: 'ADD YOUR CALL TO ACTION'
    }
}

const footer = {
    companyInfo: {
        name: 'Company Info',
        list: ['About us', 'Carrier', 'We are hiring', 'Blog'],
    },
    legal: {
        name: 'Legal',
        list: ['About us', 'Carrier', 'We are hiring', 'Blog'],
    },
    feature: {
        name: 'Features',
        list: ['Business Marketing', 'User Anaytic', 'Live Chat', 'Unlimited Support'],
    },
    resources: {
        name: 'Resources',
        list: ['IOS & Android', 'Watch a Demo', 'Customers', 'API'],
    },
    getInTouch: {
        name: 'Get In Touch',
        text: 'Your Email',
        action: 'Subscribe',
        caption: 'Lore imp sum dolor Amit'
    },
    reserved: 'Made With Love By Finland All Right Reserved',
    header: {
        image: '/images/Bandage.png',
        icons: [
            {
                name: 'Facebook',
                icon: <FacebookIcon fontSize="medium" color="secondary"/>,
            },
            {
                name: 'Instagram',
                icon: <InstagramIcon fontSize="medium" color="secondary" />,
            },
            {
                name: 'Twitter',
                icon: <TwitterIcon fontSize="medium" color="secondary" />,
            },
        ]
    }
}

const featuredCompany = [
    { image: '/images/company1.png'},
    { image: '/images/company2.png'},
    { image: '/images/company3.png'},
    { image: '/images/company4.png'},
    { image: '/images/company5.png'},
    { image: '/images/company6.png'},
]

const description = {
    header: ['description', 'additionalDescription', 'reviews'],
    content: {
        header: 'the quick fox jumps over ',
        text: [
            'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
            'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
            'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.'
        ],
        image: '/images/unsplash_QANOF9iJlFs.png'
    }
};

const productCard = {
    mainImage: '/images/single-product-1-cover-2.jpeg',
    otherImage: ['/images/single-product-1-thumb-1.png', '/images/single-product-1-thumb-2.png']
};

export { serviceData, bestSellingData, featurePost, testimonialData, actionCall, footer, featuredCompany, description, productCard }