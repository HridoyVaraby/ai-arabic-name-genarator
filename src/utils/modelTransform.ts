import { OpenRouterModel } from '../types/model';

export const serializeModel = (model: any): OpenRouterModel => ({
  id: String(model.id || ''),
  name: String(model.name || ''),
  description: String(model.description || ''),
  context_length: Number(model.context_length) || 0,
  provider: String(model.provider || ''),
  pricing: {
    prompt: String(model.pricing?.prompt || '0'),
    completion: String(model.pricing?.completion || '0')
  },
  top_provider: model.top_provider ? {
    max_completion_tokens: Number(model.top_provider.max_completion_tokens) || 0
  } : undefined
});

export const sortModels = (models: OpenRouterModel[]): OpenRouterModel[] => {
  return [...models].sort((a, b) => {
    // First sort by provider
    const providerCompare = a.provider.localeCompare(b.provider);
    if (providerCompare !== 0) return providerCompare;
    // Then by name within the same provider
    return a.name.localeCompare(b.name);
  });
};
