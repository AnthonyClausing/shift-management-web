import React from 'react';
import './stylesheets/App.css';
import Auth from './components/Auth'
function App() {
  return (
    <div id="app">
      <header className="app-header">
        <div>Shift Management</div>
      </header>
      {/* ROUTER VIEW */}
      <Auth></Auth>
    </div>
  );
}

export default App;
