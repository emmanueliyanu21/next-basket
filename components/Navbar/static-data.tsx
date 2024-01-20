import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';
import Bandage from '../../public/images/Bandage.png'

const data = {
    menuItems: [
        'Home',
        'Shop',
        'About',
        'Blog',
        'Contact',
        'Pages',
    ],
    loginRegisterMenuItem: 'Login / Register',
    icons: [
        <SearchIcon fontSize="small" key="search"  />,
        <ShoppingCartIcon fontSize="small" key="cart"  />,
        <FavoriteIcon fontSize="small" key="wishlist"  />,
        <MenuIcon fontSize="small" key="menu"  />,
    ],
   logo: Bandage
}

export { data }