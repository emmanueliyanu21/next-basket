import SearchIcon from '@mui/icons-material/Search';
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
       { name: "hamburger", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 14" fill="none">
       <path d="M0.571472 0H23.4286V2.28571H0.571472V0ZM6.28576 5.71429H23.4286V8H6.28576V5.71429ZM13.4286 11.4286H23.4286V13.7143H13.4286V11.4286Z" fill="#252B42" />
     </svg>},
    ],
   logo: Bandage
}

export { data }