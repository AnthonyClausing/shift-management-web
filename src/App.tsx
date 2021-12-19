import React from 'react';
import './stylesheets/App.css';
// import Auth from './components/Auth'
import Settings from './components/Settings'
import ModalBus from './components/ModalBus';

function App() {
  return (
    <div id="app">
      <header className="app-header">
        <div>Shift Management</div>
      </header>
      {/* ROUTER VIEW */}
      {/* <Auth></Auth> */}
      <Settings></Settings>
      {<ModalBus ></ModalBus>}
    </div>
  );
}

export default App;
