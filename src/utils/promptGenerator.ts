import { Gender } from '../types/name';

const sanitizeInput = (input: string, maxLength: number = 50): string => {
  if (!input) return '';
  // 1. Trim whitespace
  let sanitized = input.trim();

  // 2. Limit length
  if (sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength);
  }

  // 3. Remove control characters to prevent injection
  // eslint-disable-next-line no-control-regex
  sanitized = sanitized.replace(/[\x00-\x1F\x7F]/g, '');

  // 4. Remove quotes to prevent breaking out of the prompt context
  sanitized = sanitized.replace(/["'`]/g, '');

  return sanitized;
};

export const generatePrompt = (letter: string, gender: Gender): string => {
  const cleanLetter = sanitizeInput(letter, 10);

  // Map English letters to their Arabic equivalents for better AI understanding
  const englishToArabicMap: { [key: string]: string } = {
    'A': 'ا (Alif)', 'B': 'ب (Ba)', 'C': 'ك (Kaf) or ق (Qaf)', 'D': 'د (Dal)', 'E': 'ع (Ayn) or ا (Alif)', 
    'F': 'ف (Fa)', 'G': 'غ (Ghain) or ج (Jeem)', 'H': 'ه (Ha)', 'I': 'ي (Ya)', 'J': 'ج (Jeem)', 
    'K': 'ك (Kaf)', 'L': 'ل (Lam)', 'M': 'م (Meem)', 'N': 'ن (Noon)', 'O': 'و (Waw)', 
    'P': 'ب (Ba) or ف (Fa)', 'Q': 'ق (Qaf)', 'R': 'ر (Ra)', 'S': 'س (Seen)', 'T': 'ت (Ta)', 
    'U': 'و (Waw)', 'V': 'ف (Fa)', 'W': 'و (Waw)', 'X': 'ك (Kaf) or ز (Zay)', 'Y': 'ي (Ya)', 
    'Z': 'ز (Zay)'
  };

  const isEnglishLetter = /^[A-Z]$/i.test(cleanLetter);
  const arabicEquivalent = isEnglishLetter ? englishToArabicMap[cleanLetter.toUpperCase()] || cleanLetter : cleanLetter;

  return `Generate 8 authentic Arabic names that start with the letter "${cleanLetter}" for ${gender} gender.

IMPORTANT: You must respond with ONLY a valid JSON array. No other text, explanations, or formatting.

The response must be a JSON array like this:
[
  {
    "arabic": "Arabic name here",
    "transliteration": "Transliteration here",
    "meaning": "Meaning here",
    "culturalSignificance": "Cultural significance here"
  }
]

Requirements:
- Return ONLY the JSON array
- Start your response with [ and end with ]
- Each name must start with the letter ${cleanLetter}${isEnglishLetter ? ` (which corresponds to the Arabic letter ${arabicEquivalent})` : ''}
- Names must be culturally appropriate for ${gender}
- Each name must be unique and traditional
- Include exactly 8 names
- Ensure perfect JSON formatting
- For Arabic letters, use proper Arabic script
- For English letters, generate Arabic names that start with the equivalent Arabic letter: ${arabicEquivalent}`;
};

export const generateMeaningPrompt = (meaning: string): string => {
  const cleanMeaning = sanitizeInput(meaning, 100);
  return `For the English word "${cleanMeaning}", provide the following in a JSON object. Respond ONLY with valid JSON, no other text or explanations.

The response must be a JSON object with this exact structure:
{
  "directTranslation": {
    "arabic": "Arabic translation here",
    "pronunciation": "Pronunciation guide here",
    "englishMeaning": "English meaning here"
  },
  "names": [
    {
      "arabic": "Arabic name here",
      "transliteration": "Transliteration here",
      "gender": "male|female|neutral",
      "meaning_nuance": "Specific meaning nuance here"
    }
  ],
  "synonyms": [
    {
      "arabic_word": "Arabic synonym here",
      "transliteration": "Transliteration here",
      "concept": "Concept description here",
      "englishMeaning": "English meaning here",
      "names": [
        {
          "arabic": "Arabic name here",
          "transliteration": "Transliteration here"
        }
      ]
    }
  ]
}

Requirements:
- Return ONLY the JSON object with the exact structure above
- Ensure all properties are present in each object
- Include at least 5 names in the "names" array
- Include at least 3 synonyms in the "synonyms" array
- For the "names" array, specify gender as "male", "female", or "neutral"
- Ensure perfect JSON formatting with proper quotes and commas`;
};