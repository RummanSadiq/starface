import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import MainContent from './MainContent';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <NavBar />
      <MainContent />
    </div>
  );
};

export default Dashboard;
