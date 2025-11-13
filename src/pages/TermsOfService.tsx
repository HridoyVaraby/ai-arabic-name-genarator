import React from 'react';

export const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-emerald-900 mb-6">Terms of Service</h1>
        <div className="prose max-w-none">
          <p className="text-gray-700 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold text-emerald-800 mt-6 mb-3">Acceptance of Terms</h2>
          <p className="text-gray-700 mb-4">
            By accessing and using the Arabic Name Generator, you accept and agree to be bound by these Terms of Service.
          </p>

          <h2 className="text-2xl font-semibold text-emerald-800 mt-6 mb-3">Use License</h2>
          <p className="text-gray-700 mb-4">
            Permission is granted to use this service for personal, non-commercial purposes.
          </p>

          <h2 className="text-2xl font-semibold text-emerald-800 mt-6 mb-3">Disclaimer</h2>
          <p className="text-gray-700 mb-4">
            The materials on Arabic Name Generator are provided on an 'as is' basis. We make no warranties, expressed or implied.
          </p>

          <h2 className="text-2xl font-semibold text-emerald-800 mt-6 mb-3">Limitations</h2>
          <p className="text-gray-700 mb-4">
            In no event shall Arabic Name Generator be liable for any damages arising out of the use or inability to use our service.
          </p>
        </div>
      </div>
    </div>
  );
};
