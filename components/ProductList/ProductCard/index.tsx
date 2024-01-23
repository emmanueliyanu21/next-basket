import Image from 'next/image';
import Link from 'next/link';
import { Typography, Box } from '@mui/material';
import { formatPrice } from '../../../libs/util'
import { Product } from '@/types/Product';

type ProductCardProps = {
    item: Product
}

const ProductCard = ({ item }: ProductCardProps) => {
    return (
        <Box  >
            <Link href={`/product/${item.id}`}>
                <Box display="flex" justifyContent="center" height={250}>
                    <Image
                        src={item.images[0]}
                        alt={item.title}
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{
                            width: '100%', height: '100%',
                            minWidth: '183px',
                            maxWidth: '400px',
                            minHeight: '238px',
                            maxHeight: '450px',
                            objectFit: 'cover',
                            overflow: "hidden",
                            objectPosition: "top"
                        }}
                    />
                </Box>
                <Box textAlign="center" className="font-montserrat my-4">
                    <Typography className="text-center my-2 text-black font-Montserrat text-light font-bold leading-24 tracking-wide" >{item.title}</Typography>
                    <Typography className="text-center mb-2 text-grey font-Montserrat text-small font-bold leading-24 tracking-wide capitalize">{item.category}</Typography>
                    <Typography className='pb-4  font-bold text-light'><span className=" text-lightGrey text-grey">{formatPrice(item.price)}</span> &nbsp;&nbsp;<span className='text-primary'>{formatPrice(item.discountPercentage)}</span></Typography>
                </Box>
            </Link>
        </Box>
    )
}

export default ProductCard
