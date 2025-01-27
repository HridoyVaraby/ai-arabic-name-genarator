import { OpenRouterModel } from '../types/model';

export const FALLBACK_MODELS: OpenRouterModel[] = [
  {
    id: 'mistralai/mistral-7b-instruct:free',
    name: 'Mistral 7B Free',
    description: 'Free model with balanced performance',
    context_length: 4096,
    provider: 'MistralAI',
    pricing: {
      prompt: '0',
      completion: '0'
    }
  }
];
