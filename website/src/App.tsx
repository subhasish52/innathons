import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Contracts from './components/Contracts';
import Track from './components/Track';
import Contact from './components/Contact';
import ComplianceRisks from './components/ComplianceRisks';

function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex space-x-6">
              <NavLink to="/" className={({ isActive }) => 
                `hover:text-yellow-400 ${isActive ? 'text-yellow-400' : ''}`
              }>
                Home
              </NavLink>
              <NavLink to="/contracts" className={({ isActive }) => 
                `hover:text-yellow-400 ${isActive ? 'text-yellow-400' : ''}`
              }>
                Contracts
              </NavLink>
              <NavLink to="/track" className={({ isActive }) => 
                `hover:text-yellow-400 ${isActive ? 'text-yellow-400' : ''}`
              }>
                Track
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => 
                `hover:text-yellow-400 ${isActive ? 'text-yellow-400' : ''}`
              }>
                Contact
              </NavLink>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-700"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <NavLink to="/profile" className="hover:text-yellow-400">
                My Profile
              </NavLink>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard darkMode={darkMode} />} />
            <Route path="/profile" element={<Profile darkMode={darkMode} />} />
            <Route path="/contracts" element={<Contracts darkMode={darkMode} />} />
            <Route path="/track" element={<Track darkMode={darkMode} />} />
            <Route path="/contact" element={<Contact darkMode={darkMode} />} />
            <Route path="/compliance-risks" element={<ComplianceRisks darkMode={darkMode} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;