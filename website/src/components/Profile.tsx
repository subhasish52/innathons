import React from 'react';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';

interface ProfileProps {
  darkMode: boolean;
}

const Profile: React.FC<ProfileProps> = ({ darkMode }) => {
  const companyData = {
    name: "TechCorp Solutions",
    email: "contact@techcorp.com",
    phone: "+1 (555) 123-4567",
    address: "123 Innovation Drive, Silicon Valley, CA 94025",
    description: "Leading provider of enterprise software solutions",
    founded: "2015",
    employees: "250+",
    industry: "Technology",
    website: "www.techcorp.com"
  };

  return (
    <div className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">Company Profile</h1>
      
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Building2 className="text-yellow-400 mr-3" size={24} />
              <div>
                <h2 className="text-2xl font-bold">{companyData.name}</h2>
                <p className="text-gray-400">{companyData.description}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-yellow-400 mr-3" size={20} />
                <p>{companyData.email}</p>
              </div>
              <div className="flex items-center">
                <Phone className="text-yellow-400 mr-3" size={20} />
                <p>{companyData.phone}</p>
              </div>
              <div className="flex items-center">
                <MapPin className="text-yellow-400 mr-3" size={20} />
                <p>{companyData.address}</p>
              </div>
            </div>
          </div>

          <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-6 rounded-lg`}>
            <h3 className="text-xl font-semibold mb-4">Company Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Founded:</span>
                <span>{companyData.founded}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Employees:</span>
                <span>{companyData.employees}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Industry:</span>
                <span>{companyData.industry}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Website:</span>
                <span>{companyData.website}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;