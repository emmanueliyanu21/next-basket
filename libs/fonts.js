import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display:'swap',
  fallback: ['sans-serif'],
  variable: '--font-montserrat'
});
export default montserrat;