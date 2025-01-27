import { Gender } from '../types/name';

export const generatePrompt = (letter: string, gender: Gender): string => {
  return `Generate exactly 20 authentic Arabic names that start with the letter "${letter}" for ${gender} gender.

Return a JSON array containing objects with these exact properties:
{
  "arabic": "الاسم",
  "transliteration": "Al-Ism",
  "meaning": "The detailed meaning",
  "culturalSignificance": "Cultural context (optional)"
}

Requirements:
- Generate exactly 20 names
- Each name must start with "${letter}"
- Names must be culturally appropriate for ${gender}
- Include ONLY the JSON array in your response
- Ensure valid JSON format
- No additional text or explanations
- Each name must be unique
- Each name must be a real, traditional Arabic name`;
};
