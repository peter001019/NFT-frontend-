import React from 'react';
import './index.css'; // Tailwind CSS styles
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './page';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
