import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Chapter1 from './pages/chapters/Chapter1';
import Chapter2 from './pages/chapters/Chapter2';
import Chapter3 from './pages/chapters/Chapter3';
import Chapter4 from './pages/chapters/Chapter4';
import Chapter5 from './pages/chapters/Chapter5';
import Chapter6 from './pages/chapters/Chapter6';
import Chapter7 from './pages/chapters/Chapter7';
import Chapter8 from './pages/chapters/Chapter8';
import Chapter9 from './pages/chapters/Chapter9';
import Chapter10 from './pages/chapters/Chapter10';
import Chapter11 from './pages/chapters/Chapter11';
import Chapter12 from './pages/chapters/Chapter12';
import Chapter13 from './pages/chapters/Chapter13';
import Chapter14 from './pages/chapters/Chapter14';
import Chapter15 from './pages/chapters/Chapter15';
import Chapter16 from './pages/chapters/Chapter16';
import Chapter17 from './pages/chapters/Chapter17';
import Chapter18 from './pages/chapters/Chapter18';
import Chapter19 from './pages/chapters/Chapter19';
import Chapter20 from './pages/chapters/Chapter20';
import Chapter21 from './pages/chapters/Chapter21';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
       
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chap1" element={<Chapter1 />} />
            <Route path="/chap2" element={<Chapter2 />} />
            <Route path="/chap3" element={<Chapter3 />} />
            <Route path="/chap4" element={<Chapter4 />} />
            <Route path="/chap5" element={<Chapter5 />} />
            <Route path="/chap6" element={<Chapter6 />} />
            <Route path="/chap7" element={<Chapter7 />} />
            <Route path="/chap8" element={<Chapter8 />} />
            <Route path="/chap9" element={<Chapter9 />} />
            <Route path="/chap10" element={<Chapter10 />} />
            <Route path="/chap11" element={<Chapter11 />} />
            <Route path="/chap12" element={<Chapter12 />} />
            <Route path="/chap13" element={<Chapter13 />} />
            <Route path="/chap14" element={<Chapter14 />} />
            <Route path="/chap15" element={<Chapter15 />} />
            <Route path="/chap16" element={<Chapter16 />} />
            <Route path="/chap17" element={<Chapter17 />} />
            <Route path="/chap18" element={<Chapter18 />} />
            <Route path="/chap19" element={<Chapter19 />} />
            <Route path="/chap20" element={<Chapter20 />} />
            <Route path="/chap21" element={<Chapter21 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;