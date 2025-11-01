import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SOSButton } from './components/SOSButton';
import { HomePage } from './pages/HomePage';
import { DevicesPage } from './pages/DevicesPage';
import { DashboardPage } from './pages/DashboardPage';
import { CaregiverPage } from './pages/CaregiverPage';
import { CommunityPage } from './pages/CommunityPage';
import { AccountPage } from './pages/AccountPage';
import { SupportPage } from './pages/SupportPage';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/devices" element={<DevicesPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/caregiver" element={<CaregiverPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <SOSButton />
        <Toaster position="top-center" />
      </div>
    </Router>
  );
}
