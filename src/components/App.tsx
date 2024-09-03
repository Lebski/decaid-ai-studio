import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import Layout from 'components/Layout/Layout';
import HomePage from 'pages/HomePage';
import CreatePage from 'pages/CreatePage';
import ResearchPage from 'pages/ResearchPage';
import DesignPage from 'pages/DesignPage';

import logo from 'assets/images/logo.svg';
import userAvatar from 'assets/images/user-avatar.jpg';
import homeIcon from 'assets/images/home-line.svg';
import createIcon from 'assets/images/edit-04.svg';
import researchIcon from 'assets/images/search-refraction.svg';
import designIcon from 'assets/images/palette.svg';
import SettingsPage from 'pages/SettingsPage';
import SupportPage from 'pages/SupportPage';

function AppContent() {
  const navigate = useNavigate();

  const sidebarProps = {
    logo: logo,
    navItems: [
      { icon: homeIcon, label: 'Home', path: '/home' },
      { icon: createIcon, label: 'Create', path: '/create' },
      { icon: researchIcon, label: 'Research', path: '/research' },
      { icon: designIcon, label: 'Design', path: '/design' },
    ],
    userProfile: {
      avatar: userAvatar,
      name: 'Olivia Rhye',
      email: 'olivia@untitledui.com',
      onLogout: () => {
        console.log('Logout clicked');
        navigate('/login');
      }
    },
    onSearchInputChange: (value: string) => {
      console.log('Search input changed:', value);
    },
    onSearchSubmit: (value: string) => {
      console.log('Search submitted:', value);
    }
  };

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route
        path="/*"
        element={
          <Layout sidebarProps={sidebarProps}>
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/create" element={<CreatePage />} />
              <Route path="/research" element={<ResearchPage />} />
              <Route path="/design" element={<DesignPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/support" element={<SupportPage />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;