import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CentralLandingPage from './pages/CentralLandingPage';
import Dashboard from './pages/Dashboard';
import { useEffect } from 'react';
import { seedInitialDataIfEmpty } from './utils/tracking';

function App() {
  useEffect(() => {
    // Initialize mock data for the dashboard demo
    seedInitialDataIfEmpty();
  }, []);

  return (
    <Router>
      <div className="gradient-bg"></div>
      <Routes>
        {/* Central LP is the main entry point */}
        <Route path="/" element={<CentralLandingPage />} />
        {/* Individual LPs remain accessible */}
        <Route path="/lp/:examId" element={<LandingPage />} />
        {/* Admin Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
