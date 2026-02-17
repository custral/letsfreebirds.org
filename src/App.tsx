import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Donate from './pages/Donate';
import Approach from './pages/Approach';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="approach" element={<Approach />} />
          <Route path="projects" element={<Projects />} />
          <Route path="donate" element={<Donate />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
