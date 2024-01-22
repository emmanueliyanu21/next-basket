import React, { useState } from 'react';
import {Box, Container, Tabs, Tab} from '@mui/material';
import Description from './description/index';
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
          <div>{children}</div>
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
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabsData = [
    { label: 'Description', content: <Description data={data} /> },
    { label: 'Additional Description', content: 'Additional Item' },
    { label: `Review(0)`, content: 'Review' },
  ];

  return (
    <Container>
      <Box className="pb-20s">
        <Box className="mb-12" display="flex" justifyContent="center" sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            sx={{
              '& .MuiTabs-flexContainer': {
                paddingBottom: "15px"
              },
              '& .MuiTabs-indicator': {
                display: 'none',
              },
              '& .MuiButtonBase-root':{
                fontWeight: "900",
                color: "#737373",
              },
              '& .Mui-selected': {
                fontWeight: "400"
              }
            }}
          className="overflow-x-auto font-montserrat" value={value} onChange={handleChange} aria-label="basic tabs example">
            {tabsData.map((tab, index) => (
              <Tab className='sm:w-500 xs:w-300 overflow-hidden' key={index} label={tab.label} {...a11yProps(index)} />
            ))}
          </Tabs>
        </Box>
        {tabsData.map((tab, index) => (
          <CustomTabPanel key={index} value={value} index={index}>
            {tab.content}
          </CustomTabPanel>
        ))}
      </Box>
    </Container>
  );
};

export default TabsPanel;
