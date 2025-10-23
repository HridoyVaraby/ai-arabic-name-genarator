import { ArabicName } from './name';

export interface MeaningSearchResults {
  directTranslation: {
    arabic: string;
    pronunciation: string;
    englishMeaning: string;
  };
  names: {
    arabic: string;
    transliteration: string;
    gender: string;
    meaning_nuance: string;
  }[];
  synonyms: {
    arabic_word: string;
    transliteration: string;
    concept: string;
    englishMeaning: string;
    names: ArabicName[];
  }[];
}
