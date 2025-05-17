import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Dashboard } from './pages/Dashboard';
import { ApplicantDetail } from './pages/ApplicantDetail';
import { UploadResume } from './pages/UploadResume';
import { ScheduleInterview } from './pages/ScheduleInterview';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/applicant/:id" element={<ApplicantDetail />} />
        <Route path="/upload" element={<UploadResume />} />
        <Route path="/schedule" element={<ScheduleInterview />} />
      </Routes>
    </Router>
  );
}

export default App;