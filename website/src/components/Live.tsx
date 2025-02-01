import React from 'react';

interface LiveProps {
  darkMode: boolean;
}

const Live: React.FC<LiveProps> = ({ darkMode }) => {
  return (
    <div className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">Live</h1>
      <p>Live page content will go here</p>
    </div>
  );
};

export default Live;