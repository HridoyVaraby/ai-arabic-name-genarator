export interface ArabicName {
  arabic: string;
  transliteration: string;
  meaning: string;
  gender?: string;
  culturalSignificance?: string;
}

export type Gender = 'male' | 'female' | 'neutral';

export interface LLMModel {
  id: string;
  name: string;
  description: string;
  isFree: boolean;
}