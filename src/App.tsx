import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { SearchForm } from './components/SearchForm';
import { NameCard } from './components/NameCard';
import { ArabicName, Gender } from './types/name';
import { validateLetter } from './utils/nameUtils';
import { generateNames, generateNamesByMeaning } from './services/nameGenerator';
import { DEFAULT_MODEL } from './config/api';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import Contact from './pages/Contact';

function App() {
  const [names, setNames] = useState<ArabicName[]>([]);
  const [allGeneratedNames, setAllGeneratedNames] = useState<ArabicName[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentLetter, setCurrentLetter] = useState<string>('');
  const [currentGender, setCurrentGender] = useState<Gender>('neutral');
  const [searchType, setSearchType] = useState<'letter' | 'meaning'>('letter'); // Track search type

  const handleSubmit = async (letter: string, gender: Gender) => {
    setError(null);
    setSearchType('letter'); // Set search type to letter
    
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
    } catch {
      setError('Failed to generate names. Please try again.');
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
    } catch {
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
    setSearchType('letter');
  };

  const handleSearchByMeaning = async (meaning: string) => {
    setError(null);
    setSearchType('meaning'); // Set search type to meaning
    setIsLoading(true);
    try {
      const result = await generateNamesByMeaning(meaning, DEFAULT_MODEL.id);
      const generatedNames = result.names.map(name => ({
        arabic: name.arabic,
        transliteration: name.transliteration,
        meaning: name.meaning_nuance,
        gender: name.gender, // Include gender from the search result
        culturalSignificance: `Associated with meanings of ${meaning}.`
      }));
      setNames(generatedNames);
      setAllGeneratedNames(generatedNames);
    } catch {
      setError('Failed to generate names by meaning. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 flex flex-col">
            <div className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center">
                  <h1 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-4">Arabic Name Generator</h1>
                  <p className="text-base sm:text-lg text-emerald-700">
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
                    {/* Only show "Generate More" button for letter-based searches */}
                    {searchType === 'letter' && (
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
            
            {/* Footer with legal and promotional content */}
            <footer className="bg-emerald-800 text-white py-6 mt-8">
              <div className="max-w-4xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Copyright and attribution */}
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-semibold mb-2">Arabic Name Generator</h3>
                    <p className="text-emerald-200 text-sm">
                      &copy; {currentYear} Varabit Web Design and Development. All rights reserved.
                    </p>
                    <p className="text-emerald-200 text-sm mt-1">
                      Developed By <a href="https://varabit.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Varabit Web Design and Development</a>
                    </p>
                  </div>
                  
                  {/* Promotional content */}
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-semibold mb-2">Professional Web Development Services</h3>
                    <p className="text-emerald-200 text-sm mb-2">
                      Varabit Web Design and Development creates stunning, high-performance websites and web applications for businesses of all sizes. 
                      We specialize in modern technologies like React, Vue, and Node.js to deliver exceptional digital experiences.
                    </p>
                    <p className="text-emerald-200 text-sm">
                      <span className="font-medium">We're currently accepting new projects!</span> Contact us today to discuss your web development needs.
                    </p>
                  </div>
                </div>
                
                {/* Policy links */}
                <div className="mt-6 pt-4 border-t border-emerald-700 flex flex-wrap justify-center gap-4">
                  <Link to="/privacy-policy" className="text-emerald-300 hover:text-white text-sm">Privacy Policy</Link>
                  <Link to="/terms-of-service" className="text-emerald-300 hover:text-white text-sm">Terms of Service</Link>
                  <Link to="/cookie-policy" className="text-emerald-300 hover:text-white text-sm">Cookie Policy</Link>
                  <Link to="/contact" className="text-emerald-300 hover:text-white text-sm">Contact Us</Link>
                </div>
              </div>
            </footer>
          </div>
        } />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;