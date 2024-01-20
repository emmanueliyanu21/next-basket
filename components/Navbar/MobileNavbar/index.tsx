import { ReactNode } from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

type NavbarProps = {
    data: {
        menuItems: string[];
        loginRegisterMenuItem: string;
        icons: ReactNode[];
        logo: ReactNode;
    };
};
export default function MobileNavbar({data}: NavbarProps) {
  return (
    <Paper className='shadow-none' sx={{ width: 500, maxWidth: '100%' }}>
      <MenuList className='text-center'>
        {data.menuItems.map((item, index) => (
            <MenuItem key={index}>
            <ListItemText className="font-montserrat text-grey font-Montserrat text-2xl font-normal leading-10 tracking-wide">{item}</ListItemText>
          </MenuItem>
        ))}
        <MenuItem>
          <ListItemText>{data.loginRegisterMenuItem}</ListItemText>
        </MenuItem>
        {data.icons.map((item, index) => (
            <MenuItem key={index}>
            <ListItemText>{item}</ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
}