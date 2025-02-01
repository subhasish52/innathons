import React, { useState } from 'react';
import { Calendar, AlertCircle, DollarSign, FileText, TrendingDown, CheckCircle2 } from 'lucide-react';

interface RenewalItem {
  id: string;
  name: string;
  dueDate: string;
  amount: number;
  penalty: number;
  priority: 'Essential' | 'Optional';
  status: 'Pending' | 'Overdue';
  type: 'License' | 'Contract';
}

interface TrackProps {
  darkMode: boolean;
}

const Track: React.FC<TrackProps> = ({ darkMode }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'essential' | 'optional'>('all');

  const renewals: RenewalItem[] = [
    {
      id: '1',
      name: 'Enterprise Software License',
      dueDate: '2024-04-15',
      amount: 15000,
      penalty: 3000,
      priority: 'Essential',
      status: 'Pending',
      type: 'License'
    },
    {
      id: '2',
      name: 'Cloud Infrastructure Contract',
      dueDate: '2024-04-20',
      amount: 25000,
      penalty: 5000,
      priority: 'Essential',
      status: 'Pending',
      type: 'Contract'
    },
    {
      id: '3',
      name: 'Development Tools License',
      dueDate: '2024-04-25',
      amount: 5000,
      penalty: 1000,
      priority: 'Optional',
      status: 'Pending',
      type: 'License'
    },
    {
      id: '4',
      name: 'Support Services Contract',
      dueDate: '2024-04-10',
      amount: 8000,
      penalty: 1600,
      priority: 'Essential',
      status: 'Overdue',
      type: 'Contract'
    },
    {
      id: '5',
      name: 'Analytics Platform License',
      dueDate: '2024-04-30',
      amount: 12000,
      penalty: 2400,
      priority: 'Optional',
      status: 'Pending',
      type: 'License'
    }
  ];

  const filteredRenewals = renewals.filter(renewal => {
    if (selectedFilter === 'essential') return renewal.priority === 'Essential';
    if (selectedFilter === 'optional') return renewal.priority === 'Optional';
    return true;
  });

  const totalAmount = filteredRenewals.reduce((sum, item) => sum + item.amount, 0);
  const totalPenalty = filteredRenewals.reduce((sum, item) => sum + item.penalty, 0);
  const essentialCount = renewals.filter(r => r.priority === 'Essential').length;
  const optionalCount = renewals.filter(r => r.priority === 'Optional').length;

  return (
    <div className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">Renewal Tracking</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">Total Amount</h3>
            <DollarSign className="text-yellow-400" />
          </div>
          <p className="text-2xl font-bold">${totalAmount.toLocaleString()}</p>
        </div>

        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">Potential Penalties</h3>
            <AlertCircle className="text-red-500" />
          </div>
          <p className="text-2xl font-bold text-red-500">${totalPenalty.toLocaleString()}</p>
        </div>

        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">Essential Renewals</h3>
            <FileText className="text-green-500" />
          </div>
          <p className="text-2xl font-bold text-green-500">{essentialCount}</p>
        </div>

        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">Optional Renewals</h3>
            <TrendingDown className="text-blue-500" />
          </div>
          <p className="text-2xl font-bold text-blue-500">{optionalCount}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setSelectedFilter('all')}
          className={`px-4 py-2 rounded-lg ${
            selectedFilter === 'all'
              ? 'bg-yellow-400 text-gray-900'
              : darkMode
              ? 'bg-gray-700 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          All Renewals
        </button>
        <button
          onClick={() => setSelectedFilter('essential')}
          className={`px-4 py-2 rounded-lg ${
            selectedFilter === 'essential'
              ? 'bg-yellow-400 text-gray-900'
              : darkMode
              ? 'bg-gray-700 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          Essential Only
        </button>
        <button
          onClick={() => setSelectedFilter('optional')}
          className={`px-4 py-2 rounded-lg ${
            selectedFilter === 'optional'
              ? 'bg-yellow-400 text-gray-900'
              : darkMode
              ? 'bg-gray-700 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          Optional Only
        </button>
      </div>

      {/* Renewals Table */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg overflow-hidden`}>
        <table className="w-full">
          <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <tr>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Type</th>
              <th className="px-6 py-3 text-left">Due Date</th>
              <th className="px-6 py-3 text-left">Amount</th>
              <th className="px-6 py-3 text-left">Penalty</th>
              <th className="px-6 py-3 text-left">Priority</th>
              <th className="px-6 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredRenewals.map((renewal) => (
              <tr key={renewal.id} className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                <td className="px-6 py-4">{renewal.name}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    renewal.type === 'License' 
                      ? 'bg-purple-100 text-purple-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {renewal.type}
                  </span>
                </td>
                <td className="px-6 py-4">{new Date(renewal.dueDate).toLocaleDateString()}</td>
                <td className="px-6 py-4">${renewal.amount.toLocaleString()}</td>
                <td className="px-6 py-4 text-red-500">${renewal.penalty.toLocaleString()}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    renewal.priority === 'Essential' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {renewal.priority}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    renewal.status === 'Pending' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {renewal.status === 'Pending' ? (
                      <Calendar className="w-4 h-4 mr-1" />
                    ) : (
                      <AlertCircle className="w-4 h-4 mr-1" />
                    )}
                    {renewal.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cost Optimization Tips */}
      <div className={`mt-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <CheckCircle2 className="text-green-500 mr-2" />
          Cost Optimization Recommendations
        </h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            Consider bundling the Development Tools License with the Enterprise Software License for potential discounts
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            The Analytics Platform License could be optimized by switching to a usage-based pricing model
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            Early renewal of the Cloud Infrastructure Contract might qualify for a 10% discount
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Track;