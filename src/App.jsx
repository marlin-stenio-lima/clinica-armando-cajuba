import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
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
        <Route path="/lp/:examId" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Redirect root to a default LP or dashboard for demo purposes */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
