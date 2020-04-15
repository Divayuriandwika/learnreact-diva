import React from 'react';
import Body from './components/body/Body';
import Nametext from './components/body/Nametext';
import Centertext from './components/body/Centertext';
import Logo from './components/body/Logo';
import Navbar from './components/body/Navbar';

function App() {
  return (
  
    <div className="App">
      <Navbar/>
        <Body/>
        <Nametext/>
        <Centertext/>
        <Logo/>
        
        
        
      
    </div>
    
  );
}

export default App;
