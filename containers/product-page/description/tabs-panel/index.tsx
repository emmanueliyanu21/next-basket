import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Description from '../index';
import { TabPanelProps, DescriptionProps } from '@/types/Product';

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </Box>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const TabsPanel = ({ data }: DescriptionProps) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const review = 0
    return (
        <Container>
            <Box className="pb-20s">
                <Box className='mb-12' display="flex" justifyContent="center" sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Description" {...a11yProps(0)} />
                        <Tab label="Additional Description" {...a11yProps(1)} />
                        <Tab label={`Review(${review})`} {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Description data={data} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    Additional Item
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    Review
                </CustomTabPanel>
            </Box>
        </Container>
    )
}

export default TabsPanel
