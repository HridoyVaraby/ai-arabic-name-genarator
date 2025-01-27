import React, { useState } from 'react';
import { SearchForm } from './components/SearchForm';
import { NameCard } from './components/NameCard';
import { ArabicName, Gender } from './types/name';
import { validateLetter } from './utils/nameUtils';
import { generateNames } from './services/nameGenerator';

function App() {
  const [names, setNames] = useState<ArabicName[]>([]);
  const [allGeneratedNames, setAllGeneratedNames] = useState<ArabicName[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentLetter, setCurrentLetter] = useState<string>('');
  const [currentGender, setCurrentGender] = useState<Gender>('neutral');
  const [currentModelId, setCurrentModelId] = useState<string>('');

  const handleSubmit = async (letter: string, gender: Gender, modelId: string) => {
    setError(null);
    
    if (!validateLetter(letter)) {
      setError('Please enter a valid Arabic or English letter');
      return;
    }

    setIsLoading(true);
    try {
      const generatedNames = await generateNames(letter, gender, modelId);
      setNames(generatedNames);
      setAllGeneratedNames(generatedNames);
      setCurrentLetter(letter);
      setCurrentGender(gender);
      setCurrentModelId(modelId);
    } catch (err) {
      setError('Failed to generate names. Please try again or Select a different model from the select language model option.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateMore = async () => {
    if (!currentLetter || !currentGender || !currentModelId) return;

    setIsLoading(true);
    try {
      const newNames = await generateNames(currentLetter, currentGender, currentModelId);
      const uniqueNewNames = newNames.filter(newName =>
        !allGeneratedNames.some(existingName => existingName.arabic === newName.arabic)
      );
      setNames(prevNames => [...prevNames, ...uniqueNewNames]);
      setAllGeneratedNames(prevNames => [...prevNames, ...uniqueNewNames]);
    } catch (err) {
      setError('Failed to generate names. Please try again or Select a different model from the select language model option.');
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
    setCurrentModelId('');
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
              <NameCard key={index} name={name} onGenerateMore={handleGenerateMore} />
            ))}
            {!isLoading && (
              <div className="col-span-full flex justify-center">
                <button
                  onClick={handleGenerateMore}
                  className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  Generate More
                </button>
              </div>
            )}
          </div>
        )}

        {!names.length && !error && (
          <div className="text-center text-gray-500 py-12">
            Enter a letter and select gender preference to generate names
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
