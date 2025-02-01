import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, FileText, Clock, AlertTriangle } from 'lucide-react';

interface DashboardProps {
  darkMode: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ darkMode }) => {
  const [showCashFlow, setShowCashFlow] = useState(false);
  const [showAgreements, setShowAgreements] = useState(false);

  const cashFlowData = [
    { name: 'Jan', inflow: 65000, outflow: 45000 },
    { name: 'Feb', inflow: 75000, outflow: 48000 },
    { name: 'Mar', inflow: 85000, outflow: 52000 },
    { name: 'Apr', inflow: 95000, outflow: 55000 },
  ];

  const agreementData = {
    active: 45,
    expired: 12
  };

  return (
    <div className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>
      <h1 className="text-3xl font-bold text-yellow-400 mb-2">Dashboard</h1>
      <p className="text-gray-400 mb-8">Welcome to the VClub Dashboard</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Revenue Card */}
        <div 
          className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg cursor-pointer`}
          onClick={() => setShowCashFlow(!showCashFlow)}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Total Revenue</h3>
            <DollarSign className="text-yellow-400" />
          </div>
          <p className="text-3xl font-bold">$500,000</p>
          <p className="text-sm text-gray-400">Generated from active agreements</p>
        </div>

        {/* Active Agreements Card */}
        <div 
          className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg cursor-pointer`}
          onClick={() => setShowAgreements(!showAgreements)}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Active Agreements</h3>
            <FileText className="text-yellow-400" />
          </div>
          <p className="text-3xl font-bold">45</p>
          <p className="text-sm text-gray-400">Currently in effect</p>
        </div>

        {/* Upcoming Renewals Card */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Upcoming Renewals</h3>
            <Clock className="text-yellow-400" />
          </div>
          <p className="text-3xl font-bold">7</p>
          <p className="text-sm text-gray-400">Due in the next 30 days</p>
        </div>

        {/* Compliance Risks Card */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Compliance Risks</h3>
            <AlertTriangle className="text-yellow-400" />
          </div>
          <p className="text-3xl font-bold">3</p>
          <p className="text-sm text-gray-400">Potential issues detected</p>
        </div>
      </div>

      {/* Cash Flow Chart */}
      {showCashFlow && (
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg mb-8`}>
          <h3 className="text-xl font-semibold mb-4">Cash Flow Analysis</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cashFlowData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="inflow" name="Cash Inflow" fill="#4ade80" />
                <Bar dataKey="outflow" name="Cash Outflow" fill="#f87171" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Agreement Status */}
      {showAgreements && (
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg mb-8`}>
          <h3 className="text-xl font-semibold mb-4">Agreement Status</h3>
          <div className="flex justify-around">
            <div className="text-center">
              <p className="text-4xl font-bold text-green-500">{agreementData.active}</p>
              <p className="text-gray-400">Active</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-red-500">{agreementData.expired}</p>
              <p className="text-gray-400">Expired</p>
            </div>
          </div>
        </div>
      )}

      {/* FAS Score */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
        <h3 className="text-xl font-semibold mb-6">FAS Score</h3>
        <div className="flex flex-col items-center">
          <div className="relative w-48 h-48 mb-4">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
              <span className="text-5xl font-bold text-white">87</span>
            </div>
          </div>
          <p className="text-center mb-4">
            <span className="font-semibold">Interpretation:</span> High-Performing Agreement
          </p>
          <p className="text-center text-gray-400 mb-6">
            Optimized for revenue, liquidity, and compliance.
          </p>
          <div className="w-full max-w-md">
            <h4 className="font-semibold mb-2">Breakdown:</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Monetization:</span>
                <span>28/30</span>
              </div>
              <div className="flex justify-between">
                <span>Risk Compliance:</span>
                <span>20/25</span>
              </div>
              <div className="flex justify-between">
                <span>Execution Efficiency:</span>
                <span>18/20</span>
              </div>
              <div className="flex justify-between">
                <span>Liquidity & Cost Efficiency:</span>
                <span>12/15</span>
              </div>
              <div className="flex justify-between">
                <span>AI Utilization:</span>
                <span>9/10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;