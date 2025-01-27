export const AVAILABLE_MODELS: LLMModel[] = [
  {
    id: 'mistralai/mistral-7b-instruct-v0.1',
    name: 'Mistral 7B',
    description: 'Balanced performance, good for general use',
    isFree: true
  },
  {
    id: 'meta-llama/codellama-34b-instruct',
    name: 'CodeLlama 34B',
    description: 'Excellent at following JSON formatting',
    isFree: true
  },
  {
    id: 'anthropic/claude-2',
    name: 'Claude 2',
    description: 'High accuracy, better cultural context',
    isFree: false
  }
];

export const API_CONFIG = {
  OPENROUTER_API_KEY: import.meta.env.VITE_OPENROUTER_API_KEY,
  API_URL: 'https://openrouter.ai/api/v1/chat/completions',
  HEADERS: {
    'HTTP-Referer': 'https://stackblitz.com',
    'X-Title': 'Arabic Name Generator'
  }
};
