import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import InvestigateTxHash from './pages/InvestigateTxHash';
import InvestigateAddress from './pages/InvestigateAddress';
import Home from './pages/Home';
import LayoutWrap from './components/LayoutWrap';

function App() {
  return (
    <BrowserRouter>
      <LayoutWrap auth={false}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/investigate-txhash/" element={<InvestigateTxHash />} />
          <Route path="/investigate-address/" element={<InvestigateAddress />} />
        </Routes>
      </LayoutWrap>
    </BrowserRouter>
  );
}

export default App;
