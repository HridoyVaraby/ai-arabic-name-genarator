import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-emerald-900 mb-6">About Arabic Name Generator</h1>
        <div className="prose max-w-none">
          <p className="text-gray-700 mb-4">
            Welcome to the Arabic Name Generator, your trusted resource for discovering beautiful Arabic names with deep cultural significance.
          </p>

          <h2 className="text-2xl font-semibold text-emerald-800 mt-6 mb-3">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            We aim to help parents, writers, and anyone interested in Arabic culture find meaningful names that resonate with their values and heritage.
          </p>

          <h2 className="text-2xl font-semibold text-emerald-800 mt-6 mb-3">How It Works</h2>
          <p className="text-gray-700 mb-4">
            Our AI-powered generator uses advanced algorithms to provide authentic Arabic names along with their meanings, transliterations, and cultural context.
          </p>

          <h2 className="text-2xl font-semibold text-emerald-800 mt-6 mb-3">Features</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Search by starting letter</li>
            <li>Search by meaning</li>
            <li>Gender-specific names</li>
            <li>Detailed cultural significance</li>
            <li>Accurate transliterations</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
