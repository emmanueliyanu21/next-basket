import Link from 'next/link';
import Paper from '@mui/material/Paper';
import { MenuList, MenuItem, Box } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import { NavbarProps } from '@/types/Navbar';
import { Menu } from '@mui/icons-material';

type MobileNavProps = {
  data: NavbarProps["data"];
  handleClose: Function
}
export default function MobileNavbar({ data, handleClose }: MobileNavProps) {
  return (
    <Paper className='shadow-none pt-8' sx={{ width: 500, maxWidth: '100%', position: "absolute", top: "0", left: "0", minHeight: "60vh", height: "100%", zIndex: "99" }}>
      <Box className="px-4 pb-4" display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
        <Link href={"/"}><h2>Bandage</h2></Link>
        <span onClick={() => handleClose()}><Menu /></span>
      </Box>
      <MenuList className='text-center'>
        {data.menuItems.map((item, index) => (
          <MenuItem key={index}>
            <ListItemText className="font-montserrat text-grey font-Montserrat text-2xl font-normal leading-10 tracking-wide">{item.name}</ListItemText>
          </MenuItem>
        ))}
        <MenuItem>
          <ListItemText>{data.loginRegisterMenuItem}</ListItemText>
        </MenuItem>
        <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
          {data.icons.map((item, index) => (
            item.name !== "hamburger" && <MenuItem key={index}>
              <Link href={`/${item.name}`}>
                <span>{item.icon}</span>
              </Link>
            </MenuItem>
          ))}
        </Box>
      </MenuList>
    </Paper>
  );
}