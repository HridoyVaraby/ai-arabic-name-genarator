import { LLMModel } from '../types/model';

export const DEFAULT_MODEL: LLMModel = {
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
};

export const API_CONFIG = {
  GROQ_API_KEY: import.meta.env.VITE_GROQ_API_KEY,
  GROQ_API_URL: 'https://api.groq.com/openai/v1/chat/completions'
};
