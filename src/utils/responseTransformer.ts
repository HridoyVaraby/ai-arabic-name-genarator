import { ArabicName } from '../types/name';

const extractJSONFromText = (text: string): any => {
  try {
    // First attempt: direct JSON parse
    return JSON.parse(text);
  } catch {
    // Second attempt: find JSON array in text with more flexible regex
    let jsonText = text.match(/\[[\s\S]*?\]/)?.[0];
    if (!jsonText) {
      // Third attempt: look for any JSON-like structure
      jsonText = text.match(/\{[\s\S]*?\}|\[[\s\S]*?\]/)?.[0];
      if (!jsonText) {
        throw new Error('No JSON structure found in response');
      }
    }

    try {
      let cleanedJSON = jsonText
        .replace(/[\u200B-\u200D\uFEFF]/g, '') // Remove zero-width spaces
        .replace(/,\s*([}\]])/g, '$1') // Remove trailing commas before closing brackets
        .replace(/([{,]\s*)(\w+):/g, '$1"$2":') // Add quotes to unquoted keys
        .replace(/:\s*'([^']*)'/g, ':"$1"') // Convert single quotes to double quotes
        .replace(/,\s*$/, ''); // Remove trailing comma

      return JSON.parse(cleanedJSON);
    } catch (parseError) {
      // Fourth attempt: try to fix common JSON issues
      try {
        const fixedJSON = jsonText
          .replace(/,\s*([}\]])/g, '$1')
          .replace(/([{,]\s*)(\w+):/g, '$1"$2":')
          .replace(/:\s*'([^']*)'/g, ':"$1"')
          .replace(/,\s*$/, '');

        return JSON.parse(fixedJSON);
      } catch {
        // Fifth attempt: try to extract just the array content
        try {
          const arrayContent = jsonText.match(/\[([\s\S]*)\]/)?.[1];
          if (arrayContent) {
            const items = arrayContent.split('},').map(item => {
              const cleanItem = item.replace(/,\s*$/, '').replace(/^\s*{\s*/, '').replace(/\s*}\s*$/, '');
              return '{' + cleanItem + '}';
            });

            const validItems = items.filter(item => item.includes('arabic') && item.includes('transliteration') && item.includes('meaning'));
            if (validItems.length > 0) {
              return validItems.map(item => {
                try {
                  return JSON.parse(item);
                } catch {
                  return null;
                }
              }).filter(Boolean);
            }
          }
        } catch {
          // Final attempt: return empty array if all else fails
          throw new Error(`Failed to parse JSON after multiple attempts: ${parseError instanceof Error ? parseError.message : 'Unknown error'}`);
        }
      }
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

  if (validNames.length < 5) {
    throw new Error(`Not enough valid names (got ${validNames.length}, need at least 5)`);
  }

  return validNames.slice(0, 8);
};
