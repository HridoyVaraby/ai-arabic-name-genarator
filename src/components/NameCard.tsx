import React from 'react';
import { ArabicName } from '../types/name';

interface NameCardProps {
  name: ArabicName;
}

export const NameCard: React.FC<NameCardProps> = ({ name }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-3xl font-bold text-right mb-2 text-emerald-800">{name.arabic}</h3>
      <p className="text-lg font-semibold text-emerald-600 mb-2">{name.transliteration}</p>
      <p className="text-gray-700 mb-2">{name.meaning}</p>
      {name.culturalSignificance && (
        <p className="text-sm text-gray-600 italic">{name.culturalSignificance}</p>
      )}
    </div>
  );
};