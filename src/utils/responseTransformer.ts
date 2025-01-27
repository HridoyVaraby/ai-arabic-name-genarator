import { ArabicName } from '../types/name';

const extractJSONFromText = (text: string): any => {
  try {
    // First attempt: direct JSON parse
    return JSON.parse(text);
  } catch {
    // Second attempt: find JSON array in text
    const matches = text.match(/\[[\s\S]*\]/);
    if (!matches) {
      throw new Error('No JSON array found in response');
    }

    try {
      const cleanedJSON = matches[0]
        .replace(/[\u200B-\u200D\uFEFF]/g, '') // Remove zero-width spaces
        .replace(/\,(?!\s*?[\{\[\"\'\w])/g, ''); // Remove trailing commas
      
      return JSON.parse(cleanedJSON);
    } catch {
      throw new Error('Failed to parse extracted JSON');
    }
  }
};

const validateName = (name: any): boolean => {
  return (
    typeof name === 'object' &&
    typeof name.arabic === 'string' &&
    typeof name.transliteration === 'string' &&
    typeof name.meaning === 'string' &&
    (name.culturalSignificance === undefined || typeof name.culturalSignificance === 'string') &&
    name.arabic.trim() !== '' &&
    name.transliteration.trim() !== '' &&
    name.meaning.trim() !== ''
  );
};

const sanitizeName = (name: any): ArabicName => ({
  arabic: String(name.arabic).trim(),
  transliteration: String(name.transliteration).trim(),
  meaning: String(name.meaning).trim(),
  culturalSignificance: name.culturalSignificance ? String(name.culturalSignificance).trim() : undefined
});

export const validateAndTransformResponse = (content: string): ArabicName[] => {
  const parsedData = extractJSONFromText(content);

  if (!Array.isArray(parsedData)) {
    throw new Error('Response is not an array');
  }

  const validNames = parsedData
    .filter(validateName)
    .map(sanitizeName);

  if (validNames.length === 0) {
    throw new Error('No valid names found in response');
  }

  if (validNames.length < 20) {
    throw new Error(`Not enough valid names (got ${validNames.length}, need 20)`);
  }

  return validNames.slice(0, 20);
};
