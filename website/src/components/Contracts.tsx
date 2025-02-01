import React, { useState } from 'react';
import { FileText, DollarSign, Calendar, AlertCircle, Upload, X, Eye } from 'lucide-react';

interface ContractsProps {
  darkMode: boolean;
}

interface Contract {
  id: number;
  name: string;
  type: string;
  value: number;
  startDate: string;
  endDate: string;
  status: string;
  parties: string[];
}

interface UploadedDocument {
  id: string;
  name: string;
  type: string;
  size: number;
  uploadDate: string;
  preview?: string;
}

const Contracts: React.FC<ContractsProps> = ({ darkMode }) => {
  const [contracts, setContracts] = useState<Contract[]>([
    {
      id: 1,
      name: 'Enterprise Software License Agreement',
      type: 'License',
      value: 150000,
      startDate: '2023-05-01',
      endDate: '2024-04-30',
      status: 'Active',
      parties: ['TechCorp Solutions', 'Enterprise Software Co.']
    },
    {
      id: 2,
      name: 'Cloud Infrastructure Services',
      type: 'Service',
      value: 250000,
      startDate: '2023-06-15',
      endDate: '2024-06-14',
      status: 'Active',
      parties: ['TechCorp Solutions', 'Cloud Provider Inc.']
    },
    {
      id: 3,
      name: 'Professional Services Agreement',
      type: 'Service',
      value: 75000,
      startDate: '2023-08-01',
      endDate: '2024-07-31',
      status: 'Active',
      parties: ['TechCorp Solutions', 'Consulting Partners LLC']
    }
  ]);

  const [uploadedDocuments, setUploadedDocuments] = useState<UploadedDocument[]>([]);
  const [previewDocument, setPreviewDocument] = useState<UploadedDocument | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        // Only accept PDF and image files
        if (file.type.startsWith('application/pdf') || file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const newDocument: UploadedDocument = {
              id: Math.random().toString(36).substr(2, 9),
              name: file.name,
              type: file.type,
              size: file.size,
              uploadDate: new Date().toISOString(),
              preview: e.target?.result as string
            };
            setUploadedDocuments(prev => [...prev, newDocument]);
          };
          reader.readAsDataURL(file);
        }
      });
    }
    // Reset input
    event.target.value = '';
  };

  const removeDocument = (id: string) => {
    setUploadedDocuments(prev => prev.filter(doc => doc.id !== id));
    if (previewDocument?.id === id) {
      setPreviewDocument(null);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">Contracts</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">Total Contracts</h3>
            <FileText className="text-yellow-400" />
          </div>
          <p className="text-2xl font-bold">{contracts.length}</p>
        </div>

        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">Total Value</h3>
            <DollarSign className="text-green-500" />
          </div>
          <p className="text-2xl font-bold text-green-500">
            ${contracts.reduce((sum, contract) => sum + contract.value, 0).toLocaleString()}
          </p>
        </div>

        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">Active</h3>
            <Calendar className="text-blue-500" />
          </div>
          <p className="text-2xl font-bold text-blue-500">
            {contracts.filter(c => c.status === 'Active').length}
          </p>
        </div>

        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">Expiring Soon</h3>
            <AlertCircle className="text-yellow-500" />
          </div>
          <p className="text-2xl font-bold text-yellow-500">2</p>
        </div>
      </div>

      {/* Contracts Table */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg overflow-hidden mb-8`}>
        <table className="w-full">
          <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <tr>
              <th className="px-6 py-3 text-left">Contract Name</th>
              <th className="px-6 py-3 text-left">Type</th>
              <th className="px-6 py-3 text-left">Value</th>
              <th className="px-6 py-3 text-left">Start Date</th>
              <th className="px-6 py-3 text-left">End Date</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Parties</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {contracts.map((contract) => (
              <tr key={contract.id} className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                <td className="px-6 py-4 font-medium">{contract.name}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    contract.type === 'License' 
                      ? 'bg-purple-100 text-purple-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {contract.type}
                  </span>
                </td>
                <td className="px-6 py-4">${contract.value.toLocaleString()}</td>
                <td className="px-6 py-4">{new Date(contract.startDate).toLocaleDateString()}</td>
                <td className="px-6 py-4">{new Date(contract.endDate).toLocaleDateString()}</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {contract.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm">
                    {contract.parties.map((party, index) => (
                      <div key={index}>{party}</div>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Document Upload Section */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6`}>
        <h2 className="text-xl font-bold mb-6 flex items-center">
          <Upload className="mr-2" />
          Upload Documents
        </h2>

        {/* Upload Area */}
        <div className="mb-8">
          <div className={`border-2 border-dashed ${darkMode ? 'border-gray-600' : 'border-gray-300'} rounded-lg p-8 text-center`}>
            <input
              type="file"
              id="file-upload"
              className="hidden"
              onChange={handleFileUpload}
              accept=".pdf,image/*"
              multiple
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center"
            >
              <Upload className={`w-12 h-12 mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <p className="text-lg font-medium mb-2">Drop files here or click to upload</p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Supports PDF and image files
              </p>
            </label>
          </div>
        </div>

        {/* Uploaded Documents List */}
        {uploadedDocuments.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Uploaded Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {uploadedDocuments.map((doc) => (
                <div
                  key={doc.id}
                  className={`${
                    darkMode ? 'bg-gray-700' : 'bg-gray-50'
                  } p-4 rounded-lg flex items-center justify-between`}
                >
                  <div className="flex items-center space-x-4">
                    <FileText className="text-yellow-400" />
                    <div>
                      <p className="font-medium">{doc.name}</p>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {formatFileSize(doc.size)} • {new Date(doc.uploadDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setPreviewDocument(doc)}
                      className="p-2 rounded-lg hover:bg-gray-600"
                      title="Preview"
                    >
                      <Eye size={20} />
                    </button>
                    <button
                      onClick={() => removeDocument(doc.id)}
                      className="p-2 rounded-lg hover:bg-gray-600"
                      title="Remove"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Document Preview Modal */}
        {previewDocument && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden`}>
              <div className="p-4 flex justify-between items-center border-b">
                <h3 className="text-lg font-semibold">{previewDocument.name}</h3>
                <button
                  onClick={() => setPreviewDocument(null)}
                  className="p-2 rounded-lg hover:bg-gray-700"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-4 overflow-auto max-h-[calc(90vh-100px)]">
                {previewDocument.type.startsWith('image/') ? (
                  <img
                    src={previewDocument.preview}
                    alt={previewDocument.name}
                    className="max-w-full h-auto"
                  />
                ) : (
                  <iframe
                    src={previewDocument.preview}
                    title={previewDocument.name}
                    className="w-full h-[70vh]"
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contracts;