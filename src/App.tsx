import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Text } from './components/Text';
import { ButtonBase } from '@mui/material';
import Contador from './components/Contador';

function App() {
  return (

      <div className="App">
        <header className="App-header">
          
          <ButtonBase></ButtonBase>
          <Contador />
        </header>
      </div>

  );
}

export default App;
