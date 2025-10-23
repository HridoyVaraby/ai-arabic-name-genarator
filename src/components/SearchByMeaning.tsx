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
        <label htmlFor="meaning" className="block text-sm font-medium text-gray-700">
          Enter a word or concept (e.g., "love", "sky")
        </label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <input
            type="text"
            name="meaning"
            id="meaning"
            className="focus:ring-emerald-500 focus:border-emerald-500 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
            placeholder="e.g., strength"
            value={meaning}
            onChange={(e) => setMeaning(e.target.value)}
          />
          <button
            type="submit"
            disabled={isLoading || !meaning}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>
    </form>
  );
};
