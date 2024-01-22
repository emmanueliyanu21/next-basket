import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Bandage from '../../public/images/Bandage.png'
import { ShoppingCartOutlined, FavoriteBorderOutlined } from '@mui/icons-material';

const data = {
    menuItems: [
        {url: '/', name: 'Home'},
        {url: 'shop', name: 'Shop'},
        {url: 'about', name: 'About'},
        {url: 'blog', name: 'Blog'},
        {url: 'contact', name: 'Contact'},
        {url: 'pages', name: 'Pages'},
    ],
    loginRegisterMenuItem: 'Login / Register',
    icons: [
        {name: "search", icon: <SearchIcon fontSize="small" key="search"  />},
        {name: "cart", icon: <ShoppingCartOutlined fontSize="small" key="cart"  />, hasCount: true},
        {name: "wishlist", icon: <FavoriteBorderOutlined fontSize="small" key="wishlist"  />, hasCount: true},
       { name: "hamburger", icon:<MenuIcon fontSize="small" key="menu"  />},
    ],
   logo: Bandage
}

export { data }