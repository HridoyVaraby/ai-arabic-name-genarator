// Arabic or English single letter validation
const arabicLetterRegex = /^[\u0600-\u06FF]$/;
const englishLetterRegex = /^[a-zA-Z]$/;

export const validateLetter = (letter: string): boolean => {
  if (!letter) return false;
  
  return arabicLetterRegex.test(letter) || englishLetterRegex.test(letter);
};
