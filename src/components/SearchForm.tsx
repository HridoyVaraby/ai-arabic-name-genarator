import React from 'react';
import { Search, RefreshCw, RotateCcw } from 'lucide-react';
import { Gender } from '../types/name';

// English alphabet A-Z
const ENGLISH_LETTERS = Array.from({ length: 26 }, (_, i) => 
  String.fromCharCode(65 + i)
);

// Common Arabic alphabet letters used in names
const ARABIC_LETTERS = [
  'ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 
  'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 
  'ل', 'م', 'ن', 'ه', 'و', 'ي'
];

interface SearchFormProps {
  onSubmit: (letter: string, gender: Gender) => void;
  onReset: () => void;
  isLoading: boolean;
}

export const SearchForm: React.FC<SearchFormProps> = ({ onSubmit, onReset, isLoading }) => {
  const [letter, setLetter] = React.useState('');
  const [gender, setGender] = React.useState<Gender>('neutral');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(letter, gender);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <div>
        <label htmlFor="letter" className="block text-sm font-medium text-gray-700 mb-2">
          Select Starting Letter
        </label>
        <select
          id="letter"
          value={letter}
          onChange={(e) => setLetter(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        >
          <option value="">Choose a letter...</option>
          
          <optgroup label="English Alphabet">
            {ENGLISH_LETTERS.map((char) => (
              <option key={`en-${char}`} value={char}>
                {char} - {String.fromCharCode(97 + char.charCodeAt(0) - 65)}
              </option>
            ))}
          </optgroup>
          
          <optgroup label="Arabic Alphabet">
            {ARABIC_LETTERS.map((char, index) => (
              <option key={`ar-${index}`} value={char}>
                {char} - {getArabicLetterName(char)}
              </option>
            ))}
          </optgroup>
        </select>
      </div>

      {/* Rest of the component remains the same */}
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
          disabled={isLoading || !letter}
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

// Helper function to get Arabic letter names
function getArabicLetterName(char: string): string {
  const names: { [key: string]: string } = {
    'ا': 'Alif',
    'ب': 'Ba',
    'ت': 'Ta',
    'ث': 'Tha',
    'ج': 'Jeem',
    'ح': 'Haa',
    'خ': 'Khaa',
    'د': 'Dal',
    'ذ': 'Thal',
    'ر': 'Ra',
    'ز': 'Zay',
    'س': 'Seen',
    'ش': 'Sheen',
    'ص': 'Sad',
    'ض': 'Dad',
    'ط': 'Taa',
    'ظ': 'Zaa',
    'ع': 'Ayn',
    'غ': 'Ghain',
    'ف': 'Fa',
    'ق': 'Qaf',
    'ك': 'Kaf',
    'ل': 'Lam',
    'م': 'Meem',
    'ن': 'Noon',
    'ه': 'Ha',
    'و': 'Waw',
    'ي': 'Ya'
  };
  return names[char] || char;
}
