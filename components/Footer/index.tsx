import React from 'react'
import {Box, Button, Container, TextField, Typography, List, ListItem, ListItemButton} from '@mui/material';
import Image from 'next/image';
import { Data, GetInTouch, ListData } from '@/types/FooterNav';
import Link from 'next/link';

const DynamicList: React.FC<ListData & GetInTouch> = ({ name, list, text, action, caption }) => (
    <Box className="my-16">
        <Typography className="text-black text-Montserrat text-base font-bolder leading-6 tracking-tighter">{name}</Typography>
        {list ? <List>
            {list?.map((item, index) => (
                <ListItem disablePadding key={index} className='font-black'>
                    <ListItemButton className="mb-0 pb-1 pl-0 font-black">
                    <Typography className='text-grey font-Montserrat text-sm leading-6 tracking-wide' component="span" fontWeight={600}>
                {item}
            </Typography>
                    </ListItemButton>
                </ListItem>
            ))}
        </List> :
            <Box>
                <Box className="mt-6" width={"100%"} height={"70px"}>
                    <TextField style={{ width: "60%", height: "60px", borderRadius: "2px" }} className='bg-lightWhite border-none' id="outlined-basic" label={text} variant="outlined" />
                    <Button style={{ width: "40%", height: "56px", marginLeft: "-15px", borderRadius: "2px" }} size='large' className='py-4 border-none bg-secondary text-white shadow-none capitalize' variant="contained">{action}</Button>
                </Box>
                <Typography className='font-light text-xs pt-2 text-grey '>{caption}</Typography>
            </Box>
        }
    </Box>
);

const Footer: React.FC<{ data: Data }> = ({ data }) => (
    <Box >
        <Box className=" bg-gray-100">
            <Container className="lg:px-32">
                <Box className="py-12 border-b border-solid border-gray-300" display="flex" justifyContent="space-between">
                    <Image src={data.header.image} alt="Bandage"
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: '100px', height: 'auto' }} className="mr-10" />
                    <Box display="flex" gap={2} className="lg:mr-16">
                        {data.header.icons.map((icon, index) => (
                            <Link href={"#"} key={index}>{icon.icon}</Link>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
        <Container className="md:px-32">
            <Box flexWrap="wrap" display="flex" justifyContent="space-between">
                <DynamicList {...data.companyInfo} />
                <DynamicList {...data.legal} />
                <DynamicList {...data.feature} />
                <DynamicList {...data.resources} />
                <DynamicList {...data.getInTouch} />
            </Box>
        </Container>
        <Box className="py-8 bg-gray-100">
            <Container className="md:px-32">
                <Typography className="text-grey text-sm font-Montserrat font-medium leading-6 tracking-wide">{data.reserved}</Typography>
            </Container>
        </Box>
    </Box>
);

export default Footer
