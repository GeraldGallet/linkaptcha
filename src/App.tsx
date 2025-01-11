import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { GeneratePage, HomePage, LinkPage, NotFoundPage } from './pages';

const App: React.FC = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="/link/:token" element={<LinkPage />} />
            <Route path="/generate" element={<GeneratePage />} />
        </Routes>
    </Router>
  );
};

export default App;
