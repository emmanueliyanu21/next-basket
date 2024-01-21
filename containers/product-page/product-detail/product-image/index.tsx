import React, { useState } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Skeleton from '@mui/material/Skeleton';
import { SingleProduct } from '@/types/Product';
import { isMediaSize, smallScreenSize, smallerScreenSize } from '@/libs/constants'

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
    
    const [sm, md] = [isMediaSize(smallerScreenSize), isMediaSize(smallScreenSize) ]
    const imageWidth = sm ? 250 : md ? 350 : 500;

    return (
        <Box>
            <Box  className="relative max-w-lg w-100 shadow-sm p-4 mb-4 bg-white rounded-md border border-gray-300" height={"500px"}>
                {data.images && data.images[currentImageIndex] ? 
                <Box display="flex" height={"100%"} width={"100%"}>
                    <IconButton onClick={handlePrevImage} style={{position: "absolute", top: "50%"}}>
                        <ChevronLeftIcon fontSize='large' style={{color: "white", fontSize: "50px"}} />
                    </IconButton>
                    <Image
                    src={data.images[currentImageIndex]}
                    alt={data.title}
                    width={imageWidth} height={imageWidth}
                    style={{
                        width: '100%', height: '100%',
                         objectFit: 'cover',
                    }}
                    priority={true}
                />
                   <IconButton onClick={handleNextImage} style={{position: "absolute", top: "50%", right: "10px"}}>
                        <ChevronRightIcon fontSize='large' style={{color: "white", fontSize: "50px"}} />
                    </IconButton>
                </Box>
                    :
                    <Skeleton variant="rectangular" width={"100%"} height={"100%"} animation="wave" />
                }
            </Box>

            <Box display="flex" justifyContent="flex-start" gap={2} className="sm:w-500 xs:w:300 overflow-hidden h-full overflow-x-auto mt-2">
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
