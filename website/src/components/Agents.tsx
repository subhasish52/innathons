import React from 'react';

interface AgentsProps {
  darkMode: boolean;
}

const Agents: React.FC<AgentsProps> = ({ darkMode }) => {
  return (
    <div className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">Agents</h1>
      <p>Agents page content will go here</p>
    </div>
  );
};

export default Agents;