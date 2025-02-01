import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  return (
    <div className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">Contact Us</h1>
      
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-lg`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-400 p-3 rounded-full">
                <Phone className="h-6 w-6 text-gray-900" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-xl">+91 7978833654</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-yellow-400 p-3 rounded-full">
                <Mail className="h-6 w-6 text-gray-900" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-xl">subhasish@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-yellow-400 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-gray-900" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Office Location</h3>
                <p className="text-xl">123 Business Avenue</p>
                <p className="text-gray-400">Tech Hub, Floor 5</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-yellow-400 p-3 rounded-full">
                <Clock className="h-6 w-6 text-gray-900" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Business Hours</h3>
                <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-400">Saturday: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  className={`w-full p-3 rounded-lg ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600' 
                      : 'bg-gray-50 border-gray-300'
                  } border focus:ring-2 focus:ring-yellow-400`}
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className={`w-full p-3 rounded-lg ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600' 
                      : 'bg-gray-50 border-gray-300'
                  } border focus:ring-2 focus:ring-yellow-400`}
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  rows={4}
                  className={`w-full p-3 rounded-lg ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600' 
                      : 'bg-gray-50 border-gray-300'
                  } border focus:ring-2 focus:ring-yellow-400`}
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-yellow-400 text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;