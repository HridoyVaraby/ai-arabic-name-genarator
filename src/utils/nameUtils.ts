export const validateLetter = (letter: string): boolean => {
  if (!letter) return false;
  
  // Arabic or English single letter validation
  const arabicLetterRegex = /^[\u0600-\u06FF]$/;
  const englishLetterRegex = /^[a-zA-Z]$/;
  
  return arabicLetterRegex.test(letter) || englishLetterRegex.test(letter);
};
