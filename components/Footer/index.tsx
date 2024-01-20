import React, { ReactNode } from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Data, GetInTouch, ListData } from '@/types/FooterNav';

const DynamicList: React.FC<ListData & GetInTouch> = ({ name, list, text, action, caption }) => (
    <Box className="my-16">
        <Typography className="text-black text-Montserrat text-base font-bold leading-6 tracking-tighter">{name}</Typography>
        {list ? <List>
            {list?.map((item, index) => (
                <ListItem disablePadding key={index}>
                    <ListItemButton className="mb-0 pb-0 pl-0">
                        <ListItemText className="mb-0 pb-0 text-grey text-montserrat text-base font-bold leading-6 tracking-wide" primary={item} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List> :
            <Box className="pt-6">
                <TextField className='bg-lightWhite border-none' id="outlined-basic" label={text} variant="outlined" />
                <Button size='large' className='py-3.5 border-none bg-secondary text-white shadow-none' variant="contained">{action}</Button>
                <Typography className='font-light text-xs pt-2 text-grey'>{caption}</Typography>
            </Box>}

    </Box>
);

const Footer: React.FC<{ data: Data }> = ({ data }) => (
    <Box >
        <Box className=" bg-gray-100">
            <Container >
                <Box className="py-12 border-b border-solid border-gray-300" display="flex" justifyContent="space-between">
                    <Image src={data.header.image} alt="Bandage"
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: '100px', height: 'auto' }} className="mr-10" />
                    <Box display="flex" gap={2}>
                        {data.header.icons.map((icon, index) => (
                            <React.Fragment key={index}>{icon.icon}</React.Fragment>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
        <Container>
            <Box flexWrap="wrap" display="flex" justifyContent="space-between">
                <DynamicList {...data.companyInfo} />
                <DynamicList {...data.legal} />
                <DynamicList {...data.feature} />
                <DynamicList {...data.resources} />
                <DynamicList {...data.getInTouch} />
            </Box>
        </Container>
        <Box className="py-8 bg-gray-100">
            <Container>
                <Typography className="text-grey text-sm font-montserrat font-medium leading-6 tracking-wide">{data.reserved}</Typography>
            </Container>
        </Box>
    </Box>
);

export default Footer
