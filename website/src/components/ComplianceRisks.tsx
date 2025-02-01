import React from 'react';
import { AlertTriangle, FileText, Shield, AlertCircle } from 'lucide-react';

interface ComplianceRisksProps {
  darkMode: boolean;
}

const ComplianceRisks: React.FC<ComplianceRisksProps> = ({ darkMode }) => {
  const complianceIssues = [
    {
      id: 1,
      title: 'Data Protection Agreement Expiring',
      description: 'The DPA with cloud service provider needs renewal within 15 days',
      severity: 'High',
      document: 'DPA-2023-CS-Provider.pdf',
      dueDate: '2024-04-01'
    },
    {
      id: 2,
      title: 'Missing Security Audit Documentation',
      description: 'Annual security audit documentation for Q1 2024 is pending',
      severity: 'Medium',
      document: 'Security-Audit-Q1-2024.pdf',
      dueDate: '2024-04-15'
    },
    {
      id: 3,
      title: 'Vendor Compliance Certificate Update',
      description: 'Three vendors require updated compliance certificates',
      severity: 'Low',
      document: 'Vendor-Compliance-Update.pdf',
      dueDate: '2024-04-30'
    }
  ];

  return (
    <div className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">Compliance Risks</h1>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">High Priority</h3>
            <AlertTriangle className="text-red-500" />
          </div>
          <p className="text-2xl font-bold text-red-500">1</p>
          <p className="text-sm text-gray-400">Requires immediate attention</p>
        </div>

        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">Medium Priority</h3>
            <AlertCircle className="text-yellow-500" />
          </div>
          <p className="text-2xl font-bold text-yellow-500">1</p>
          <p className="text-sm text-gray-400">Monitor closely</p>
        </div>

        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">Low Priority</h3>
            <Shield className="text-green-500" />
          </div>
          <p className="text-2xl font-bold text-green-500">1</p>
          <p className="text-sm text-gray-400">Regular follow-up needed</p>
        </div>
      </div>

      {/* Detailed List */}
      <div className="space-y-6">
        {complianceIssues.map((issue) => (
          <div
            key={issue.id}
            className={`${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } p-6 rounded-lg shadow-lg`}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{issue.title}</h3>
                <p className="text-gray-400 mb-4">{issue.description}</p>
                <div className="flex items-center space-x-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    issue.severity === 'High' 
                      ? 'bg-red-100 text-red-800' 
                      : issue.severity === 'Medium'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {issue.severity} Priority
                  </span>
                  <span className="text-gray-400">Due: {new Date(issue.dueDate).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="text-yellow-400" />
                <span className="text-sm text-gray-400">{issue.document}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recommendations */}
      <div className={`mt-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
        <h2 className="text-xl font-bold mb-4">Recommended Actions</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-yellow-400 mr-2">•</span>
            Schedule immediate review of the Data Protection Agreement
          </li>
          <li className="flex items-start">
            <span className="text-yellow-400 mr-2">•</span>
            Initiate Q1 2024 security audit documentation process
          </li>
          <li className="flex items-start">
            <span className="text-yellow-400 mr-2">•</span>
            Contact vendors for compliance certificate updates
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ComplianceRisks;