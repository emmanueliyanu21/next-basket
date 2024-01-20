import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Image from 'next/image';
import Skeleton from '@mui/material/Skeleton';
import { ProductDetailsProps, SingleProduct } from '@/types/Product';

type ProductDetailProps = {
    data: SingleProduct;
  }

const ImageGallery: React.FC<ProductDetailProps> = ({ data }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : data.images.length - 1));
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex < data.images.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <Box>
            <Box width={500} className="relative shadow-sm p-4 mb-4 bg-white rounded-md border border-gray-300">
                {/* <React.Fragment>
                   
                        <Skeleton variant="rectangular" width={500} height={500} />
                        </React.Fragment> */}
                <Image
                    src={data?.images[currentImageIndex]}
                    alt="image"
                    width="0" height="0"
                    sizes="100vw"
                    style={{
                        width: '500px', height: '450px', objectFit: 'cover',
                    }}
                    priority={true} />
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: '100px',
                        display: 'flex',
                        width: '480px',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <IconButton onClick={handlePrevImage}>
                        <ChevronLeftIcon fontSize='large' />
                    </IconButton>
                    <IconButton onClick={handleNextImage}>
                        <ChevronRightIcon fontSize='large' />
                    </IconButton>
                </Box>
            </Box>

            <Box display="flex" justifyContent="flex-start" gap={2} className="mt-2">
                {data.images.map((item, index) => (
                    <Image
                        key={index}
                        src={item}
                        alt={`image-${index}`}
                        width="0" height="0"
                        sizes="100vw"
                        style={{
                            width: '100px', height: '100px', cursor: 'pointer', objectFit: 'cover',
                        }}
                        priority={true}
                        onClick={() => {
                            setCurrentImageIndex(index);
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default ImageGallery;
