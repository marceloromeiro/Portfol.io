import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import GlobalStyles from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Main />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
