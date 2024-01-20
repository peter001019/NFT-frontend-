import React from 'react';
import './index.css'; // Tailwind CSS styles
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Random } from './pages/Random';
import { RandomOngoing } from './pages/RandomOngoing';
import { IssueComplete } from './pages/IssueComplete';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/random" element={<Random />} />
        <Route path="/randomOngoing" element={<RandomOngoing />} />
        <Route path="/issueComplete" element={<IssueComplete />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
