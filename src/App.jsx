import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import CommandPalette from './components/CommandPalette';
import Home from './pages/Home';

function App() {
  const [isAppLoading, setIsAppLoading] = useState(true);

  return (
    <>
      {isAppLoading && <Loader onLoadingComplete={() => setIsAppLoading(false)} />}
      
      {!isAppLoading && (
        <Router>
          <CommandPalette />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
