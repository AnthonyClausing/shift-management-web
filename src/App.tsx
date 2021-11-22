import React from 'react';
import './stylesheets/App.css';
// import Auth from './components/Auth'
import Settings from './components/Settings'
function App() {
  return (
    <div id="app">
      <header className="app-header">
        <div>Shift Management</div>
      </header>
      {/* ROUTER VIEW */}
      {/* <Auth></Auth> */}
      <Settings></Settings>
    </div>
  );
}

export default App;
