import { LLMModel } from '../types/model';

export const AVAILABLE_MODELS: LLMModel[] = [
  {
    id: 'openai/gpt-oss-20b',
    name: 'GPT OSS 20B',
    description: 'OpenAI GPT model optimized for high-quality text generation',
    context_length: 128000,
    provider: 'groq',
    pricing: {
      prompt: '0.0000001',
      completion: '0.0000001'
    },
    isFree: true
  }
];

export const DEFAULT_MODEL = AVAILABLE_MODELS[0];

export const API_CONFIG = {
  OPENROUTER_API_KEY: import.meta.env.VITE_OPENROUTER_API_KEY,
  GROQ_API_KEY: import.meta.env.VITE_GROQ_API_KEY,
  OPENROUTER_API_URL: 'https://openrouter.ai/api/v1/chat/completions',
  GROQ_API_URL: 'https://api.groq.com/openai/v1/chat/completions',
  HEADERS: {
    'HTTP-Referer': 'https://stackblitz.com',
    'X-Title': 'Arabic Name Generator'
  }
};
