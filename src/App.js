import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Inbox from './pages/Inbox.jsx';
import Analytics from './pages/Analytics.jsx';
import Tickets from './pages/Tickets.jsx';
import Settings from './pages/Settings.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<Inbox />} />
          
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Tickets />} />
          <Route path="/productList" element={<Settings />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;