import Box from '@mui/material/Box';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

type Product = {
  product: {
  id: string;
  name: string;
  description: string;
}
};

const Product = ({ product }: Product) => {
  const router = useRouter();
  const { id } = router.query;

  if (!product) {
    return <p>Loading...</p>; // Handle loading state
  }

  return (
    <Box>
      <h1>{product.name}</h1>
      <p>Description: {product.description}</p>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const product = await response.json();

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    // console.error('Error fetching product details:', error.message);

    return {
      props: {
        product: null, // Handle error state
      },
    };
  }
};

export default Product;
