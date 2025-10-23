import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { SearchForm } from './components/SearchForm';
import { NameCard } from './components/NameCard';
import { ArabicName, Gender } from './types/name';
import { validateLetter } from './utils/nameUtils';
import { generateNames, generateNamesByMeaning } from './services/nameGenerator';
import { DEFAULT_MODEL } from './config/api';
import { SearchResults } from './components/SearchResults';

function App() {
  const [names, setNames] = useState<ArabicName[]>([]);
  const [allGeneratedNames, setAllGeneratedNames] = useState<ArabicName[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentLetter, setCurrentLetter] = useState<string>('');
  const [currentGender, setCurrentGender] = useState<Gender>('neutral');
  const [meaningSearchResults, setMeaningSearchResults] = useState<any>(null);

  const handleSubmit = async (letter: string, gender: Gender) => {
    setError(null);
    setMeaningSearchResults(null);
    
    if (!validateLetter(letter)) {
      setError('Please enter a valid Arabic or English letter');
      return;
    }

    setIsLoading(true);
    try {
      const generatedNames = await generateNames(letter, gender, DEFAULT_MODEL.id);
      setNames(generatedNames);
      setAllGeneratedNames(generatedNames);
      setCurrentLetter(letter);
      setCurrentGender(gender);
    } catch (err) {
      setError('Failed to generate names. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchByMeaning = async (meaning: string) => {
    setError(null);
    setNames([]);
    setIsLoading(true);
    try {
      const results = await generateNamesByMeaning(meaning, DEFAULT_MODEL.id);
      setMeaningSearchResults(results);
    } catch (err) {
      setError('Failed to generate names by meaning. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateMore = async () => {
    if (!currentLetter || !currentGender) return;

    setIsLoading(true);
    try {
      const newNames = await generateNames(currentLetter, currentGender, DEFAULT_MODEL.id);
      const uniqueNewNames = newNames.filter(newName =>
        !allGeneratedNames.some(existingName => existingName.arabic === newName.arabic)
      );
      setNames(prevNames => [...prevNames, ...uniqueNewNames]);
      setAllGeneratedNames(prevNames => [...prevNames, ...uniqueNewNames]);
    } catch (err) {
      setError('Failed to generate names. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setNames([]);
    setAllGeneratedNames([]);
    setError(null);
    setCurrentLetter('');
    setCurrentGender('neutral');
    setMeaningSearchResults(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-emerald-900 mb-4">Arabic Name Generator</h1>
          <p className="text-lg text-emerald-700">
            Discover beautiful Arabic names with their meanings and cultural significance
          </p>
        </div>

        <SearchForm
          onSubmit={handleSubmit}
          onSearchByMeaning={handleSearchByMeaning}
          onReset={handleReset}
          isLoading={isLoading}
        />

        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {names.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {names.map((name, index) => (
              <NameCard key={index} name={name} />
            ))}
            <div className="col-span-full flex justify-center">
              <button
                onClick={handleGenerateMore}
                disabled={isLoading}
                className="flex items-center justify-center px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50"
              >
                {isLoading ? (
                  <RefreshCw className="w-5 h-5 animate-spin mr-2" />
                ) : null}
                Generate More
              </button>
            </div>
          </div>
        )}

        {meaningSearchResults && (
          <SearchResults results={meaningSearchResults} />
        )}

        {!names.length && !meaningSearchResults && !error && (
          <div className="text-center text-gray-500 py-12">
            Enter a letter and select gender preference to generate names
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
