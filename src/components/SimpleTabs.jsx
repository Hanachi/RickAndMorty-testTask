import React from 'react';
import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Characters from './characters/Characters'
import Episodes from './episodes/Episodes';
import Location from './location/Location';
import TabPanel from './UI/TabPanel'


const SimpleTabs = (props) => {
  const { state } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <div className='appbar'>
      <AppBar position='static'>
        <Tabs variant='fullWidth' centered value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label='characters' {...a11yProps(0)} />
          <Tab label='episodes' {...a11yProps(1)} />
          <Tab label='locations' {...a11yProps(2)} />
          <Tab label='todoList' {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Characters state={state.characters.data} pagination={state.characters.pagination} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Episodes state={state.episodes.data} pagination={state.episodes.pagination} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Location state={state.location.data} pagination={state.location.pagination} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        toDoList
      </TabPanel>
    </div>
  );
}

export default connect()(SimpleTabs)
