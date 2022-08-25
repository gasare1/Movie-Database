import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routers from './Routers';
import Navbar from './components/Common/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routers/>
    </div>
  );
}

export default App;
