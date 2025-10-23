import React from 'react';
import { ArabicName } from '../types/name';

interface NameCardProps {
  name: ArabicName;
}

export const NameCard: React.FC<NameCardProps> = ({ name }) => {
  // Function to get badge color based on gender
  const getGenderBadgeClass = (gender: string | undefined) => {
    if (!gender) return 'bg-gray-100 text-gray-800';
    
    switch (gender.toLowerCase()) {
      case 'male':
        return 'bg-blue-100 text-blue-800';
      case 'female':
        return 'bg-pink-100 text-pink-800';
      case 'neutral':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <h3 className="text-3xl font-bold text-right mb-2 text-emerald-800">{name.arabic}</h3>
        {name.gender && (
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getGenderBadgeClass(name.gender)}`}>
            {name.gender.charAt(0).toUpperCase() + name.gender.slice(1)}
          </span>
        )}
      </div>
      <p className="text-lg font-semibold text-emerald-600 mb-2">{name.transliteration}</p>
      <p className="text-gray-700 mb-2">{name.meaning}</p>
      {name.culturalSignificance && (
        <p className="text-sm text-gray-600 italic">{name.culturalSignificance}</p>
      )}
    </div>
  );
};