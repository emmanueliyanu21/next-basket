import React, { useState } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Skeleton from '@mui/material/Skeleton';
import { isMediaSize, smallScreenSize, smallerScreenSize } from '@/libs/constants'

type ProductDetailProps = {
    images: string[];
    title: string;
    loading: boolean
}

const ProductGallery: React.FC<ProductDetailProps> = ({ images, title, loading }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    };

    const [sm, md] = [isMediaSize(smallerScreenSize), isMediaSize(smallScreenSize)]
    const imageWidth = sm ? 250 : md ? 350 : 500;

    return (
        <Box className="flex lg:block bg-lightWhite" justifyContent={"center"} flexDirection={"column"} alignItems={"center"} overflow={"hidden"} width={"100%"}>
            <Box className="relative max-w-lg w-100 p-4 mb-4 rounded-md" height={"500px"}>
                {!loading && images && images[currentImageIndex] ?
                    <Box display="flex" height={"100%"} width={"100%"}>
                        <IconButton onClick={handlePrevImage} style={{ position: "absolute", top: "50%" }}>
                            <ChevronLeftIcon fontSize='large' style={{ color: "white", fontSize: "50px" }} />
                        </IconButton>
                        <Image
                        className='xl:min-w-[400px]'
                            src={images[currentImageIndex]}
                            alt={title}
                            width={0}
                            height={0}
                            sizes='100vw'
                            style={{
                                maxWidth: "800px",
                                width: "100%",
                                maxHeight: "500px",
                                minHeight: "400px",
                                height: "100%",
                                objectFit: "cover",
                                overflow: "hidden",
                                objectPosition: "top"
                                }}
                            priority={true}
                        />
                        <IconButton onClick={handleNextImage} style={{ position: "absolute", top: "50%", right: "10px" }}>
                            <ChevronRightIcon fontSize='large' style={{ color: "white", fontSize: "50px" }} />
                        </IconButton>
                    </Box>
                    :
                    <Skeleton variant="rectangular" width={500} height={450} animation="wave" />
                }
            </Box>

            <Box display="flex" justifyContent="flex-start" gap={2} className="sm:w-500 xs:w:300 overflow-hidden h-full overflow-x-auto mt-2 ml-4">
                {images.length && !loading ? images.map((item, index) => (
                    <Image
                        key={index}
                        src={item}
                        alt={`image-${index}`}
                        width="0" height="0"
                        sizes="100vw"
                        style={{
                            width: '100px', height: '100px', cursor: 'pointer', objectFit: 'cover', objectPosition: "top"
                        }}
                        priority={true}
                        onClick={() => {
                            setCurrentImageIndex(index);
                        }}
                    />
                ))
                    :
                    <Box display={"flex"} gap={"10px"} justifyContent={"flex-start"}>
                        <Skeleton variant="rectangular" width={100} height={100} animation="wave" />
                        <Skeleton variant="rectangular" width={100} height={100} animation="wave" />
                        <Skeleton variant="rectangular" width={100} height={100} animation="wave" />
                    </Box>
                }
            </Box>
        </Box>
    );
};

export default ProductGallery;
