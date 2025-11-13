import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-emerald-900 mb-6">Contact Us</h1>
        <div className="prose max-w-none">
          <p className="text-gray-700 mb-4">
            We'd love to hear from you! Whether you have questions, feedback, or suggestions, feel free to reach out.
          </p>

          <h2 className="text-2xl font-semibold text-emerald-800 mt-6 mb-3">Get In Touch</h2>
          <p className="text-gray-700 mb-4">
            For inquiries about our Arabic Name Generator service, please contact us through the following channels:
          </p>

          <div className="bg-emerald-50 p-6 rounded-lg mt-6">
            <h3 className="text-xl font-semibold text-emerald-800 mb-3">Development & Support</h3>
            <p className="text-gray-700 mb-2">
              This service is developed and maintained by Varabit Web Design & Development.
            </p>
            <a 
              href="https://varabit.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-600 hover:text-emerald-800 font-medium"
            >
              Visit Varabit.com →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
