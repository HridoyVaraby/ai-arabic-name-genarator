export interface OpenRouterModel {
  id: string;
  name: string;
  description?: string;
  context_length: number;
  provider: string;
  pricing: {
    prompt: string;
    completion: string;
  };
  top_provider?: {
    max_completion_tokens?: number;
  };
}

export interface ModelState {
  models: OpenRouterModel[];
  isLoading: boolean;
  error: string | null;
  selectedModel: OpenRouterModel | null;
}
