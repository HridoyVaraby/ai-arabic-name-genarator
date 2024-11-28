import React from 'react';
import { Search, RefreshCw, RotateCcw } from 'lucide-react';
import { Gender } from '../types/name';
import { ModelSelector } from './ModelSelector';

interface SearchFormProps {
  onSubmit: (letter: string, gender: Gender, modelId: string) => void;
  onReset: () => void;
  isLoading: boolean;
}

export const SearchForm: React.FC<SearchFormProps> = ({ onSubmit, onReset, isLoading }) => {
  const [letter, setLetter] = React.useState('');
  const [gender, setGender] = React.useState<Gender>('neutral');
  const [modelId, setModelId] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(letter, gender, modelId);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <ModelSelector
        onModelChange={setModelId}
      />

      <div>
        <label htmlFor="letter" className="block text-sm font-medium text-gray-700 mb-2">
          Starting Letter (Arabic or English)
        </label>
        <input
          type="text"
          id="letter"
          maxLength={1}
          value={letter}
          onChange={(e) => setLetter(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          placeholder="Enter a letter..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Gender Preference</label>
        <div className="flex gap-4">
          {(['male', 'female', 'neutral'] as const).map((option) => (
            <label key={option} className="flex items-center">
              <input
                type="radio"
                name="gender"
                value={option}
                checked={gender === option}
                onChange={(e) => setGender(e.target.value as Gender)}
                className="mr-2 text-emerald-600 focus:ring-emerald-500"
              />
              <span className="capitalize">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isLoading || !modelId || !letter}
          className="flex items-center justify-center px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {isLoading ? (
            <RefreshCw className="w-5 h-5 animate-spin mr-2" />
          ) : (
            <Search className="w-5 h-5 mr-2" />
          )}
          Generate Names
        </button>
        
        <button
          type="button"
          onClick={onReset}
          className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
        >
          <RotateCcw className="w-5 h-5 mr-2" />
          Start New Search
        </button>
      </div>
    </form>
  );
};