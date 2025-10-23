import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchByMeaningProps {
  onSearch: (meaning: string) => void;
  isLoading: boolean;
}

export const SearchByMeaning: React.FC<SearchByMeaningProps> = ({ onSearch, isLoading }) => {
  const [meaning, setMeaning] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for meaning:', meaning);
    onSearch(meaning);
  };

  return (
    <form onSubmit={handleSearch} className="space-y-4">
      <div>
        <label htmlFor="meaning" className="block text-sm font-medium text-gray-700 mb-2">
          Enter a word or concept (e.g., "love", "sky", "strength")
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="text"
            name="meaning"
            id="meaning"
            className="focus:ring-emerald-500 focus:border-emerald-500 block w-full rounded-lg py-3 px-4 sm:text-sm border border-gray-300 hover:border-emerald-400 transition-colors duration-200"
            placeholder="e.g., strength, wisdom, peace"
            value={meaning}
            onChange={(e) => setMeaning(e.target.value)}
            disabled={isLoading}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Discover Arabic names related to your chosen meaning, along with synonyms and related concepts.
        </p>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={isLoading || !meaning.trim()}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Searching...
            </>
          ) : (
            <>
              <Search className="h-5 w-5 mr-2" />
              Find Names
            </>
          )}
        </button>
      </div>
    </form>
  );
};