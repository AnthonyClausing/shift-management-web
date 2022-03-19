 /** @jsxImportSource theme-ui */
import React from 'react';
// import Auth from './components/Auth'
import Settings from './views/Settings'
import ModalBus from './views/ModalBus';
import {Heading, Box} from 'theme-ui'
function App() {
  return (
    <div id="app">
      <Box as="header" sx={{textAlign: 'center'}}>
        <Heading as='h1'>Shift Management</Heading>
      </Box>
      {/* ROUTER VIEW */}
      {/* <Auth></Auth> */}
      <Settings></Settings>
      {<ModalBus ></ModalBus>}
    </div>
  );
}

export default App;
