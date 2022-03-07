import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import GlobalStyles from './styles/global';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div>
        <h1>hello world</h1>
      </div>

      <GlobalStyles />
    </>
  );
}

export default App;
