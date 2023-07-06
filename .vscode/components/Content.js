import './Content.css';
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tutorials from './Tutorials';
import Jupiter from './Jupiter';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


const CustomTabs = styled(Tabs)(({ theme }) => ({
  backgroundColor: theme.status.default,
  color:theme.status.font,
  height:"50px",
}));

const theme1 = createTheme({
  status: {
    default: "#212121",
    font:"#29b6f6"
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function Content() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <ThemeProvider theme={theme1}>
    <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
      <AppBar position="static">
        <CustomTabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              backgroundColor: "white"
            }
          }}
          textColor="inherit"
          variant="fullWidth"
        >
          <Tab label="Tutorials" {...a11yProps(0)} sx={{fontWeight:"bold"}}/>
          <Tab label="Jupiter" {...a11yProps(1)} sx={{fontWeight:"bold"}}/>
        </CustomTabs>
      </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Tutorials />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Jupiter />
        </TabPanel>
    </Box>
    </ThemeProvider>
  );
}