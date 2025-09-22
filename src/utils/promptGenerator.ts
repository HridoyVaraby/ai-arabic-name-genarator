import { Gender } from '../types/name';

export const generatePrompt = (letter: string, gender: Gender): string => {
  const isArabic = /[\u0600-\u06FF]/.test(letter);
  const letterInfo = isArabic
    ? `"${letter}" (Arabic letter)`
    : `"${letter}" (English letter "${letter.toLowerCase()}")`;

  return `Generate 8 authentic Arabic names that start with the letter ${letterInfo} for ${gender} gender.

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
- Each name must start with "${letter}"
- Names must be culturally appropriate for ${gender}
- Each name must be unique and traditional
- Include exactly 8 names
- Ensure perfect JSON formatting
- For Arabic letters, use proper Arabic script
- For English letters, use Arabic names that start with the equivalent Arabic letter`;
};
