import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-emerald-900 mb-6">Privacy Policy</h1>
        <div className="prose max-w-none">
          <p className="text-gray-700 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold text-emerald-800 mt-6 mb-3">Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            We collect information you provide directly to us when using our Arabic Name Generator service.
          </p>

          <h2 className="text-2xl font-semibold text-emerald-800 mt-6 mb-3">How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We use the information we collect to provide, maintain, and improve our services.
          </p>

          <h2 className="text-2xl font-semibold text-emerald-800 mt-6 mb-3">Data Security</h2>
          <p className="text-gray-700 mb-4">
            We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access.
          </p>

          <h2 className="text-2xl font-semibold text-emerald-800 mt-6 mb-3">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy, please contact us.
          </p>
        </div>
      </div>
    </div>
  );
};
