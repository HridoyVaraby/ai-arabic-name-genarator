import React from 'react';
import { ArabicName } from '../types/name';

interface SearchResultsProps {
  results: {
    directTranslation: {
      arabic: string;
      pronunciation: string;
    };
    names: ArabicName[];
    synonyms: {
      arabic_word: string;
      transliteration: string;
      concept: string;
      names: ArabicName[];
    }[];
  };
}

export const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-emerald-800 mb-4">Direct Translation</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-3xl text-right font-arabic">{results.directTranslation.arabic}</p>
          <p className="text-lg text-gray-600">{results.directTranslation.pronunciation}</p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-emerald-800 mb-4">Names with this Meaning</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {results.names.map((name, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <p className="text-2xl text-right font-arabic">{name.arabic}</p>
              <p className="text-lg font-semibold">{name.transliteration}</p>
              <p className="text-sm text-gray-500">{name.gender}</p>
              <p className="text-md mt-2">{name.meaning}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-emerald-800 mb-4">Synonyms and Related Concepts</h2>
        <div className="space-y-6">
          {results.synonyms.map((synonym, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-emerald-700">{synonym.concept}</h3>
              <p className="text-2xl text-right font-arabic">{synonym.arabic_word}</p>
              <p className="text-lg text-gray-600">{synonym.transliteration}</p>
              <div className="mt-4">
                <h4 className="font-semibold">Related Names:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  {synonym.names.map((name, nameIndex) => (
                    <div key={nameIndex} className="bg-gray-50 p-3 rounded-md">
                      <p className="text-xl text-right font-arabic">{name.arabic}</p>
                      <p className="font-semibold">{name.transliteration}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
