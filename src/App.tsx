import React from 'react';
import './App.css';
import { ButtonBase } from '@mui/material';
import FetchNews from './components/FetchNews';
import Contador from './components/Contador';
import FetchProducts from './components/FetchProducts';

function App() {
  return (

      <div className="App">
        <header className="App-header">
          <FetchProducts />
          
        </header>
      </div>

  );
}

export default App;
