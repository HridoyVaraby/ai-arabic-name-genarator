import axios from 'axios';
import { OpenRouterModel } from '../types/model';
import { API_CONFIG } from '../config/api';
import { FALLBACK_MODELS } from '../config/models';
import { serializeModel, sortModels } from '../utils/modelTransform';

export const fetchOpenRouterModels = async (): Promise<OpenRouterModel[]> => {
  try {
    const response = await axios.get('https://openrouter.ai/api/v1/models', {
      headers: {
        'Authorization': `Bearer ${API_CONFIG.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': API_CONFIG.HEADERS['HTTP-Referer'],
        'X-Title': API_CONFIG.HEADERS['X-Title']
      }
    });

    if (!response.data?.data || !Array.isArray(response.data.data)) {
      console.warn('Invalid API response format, using fallback models');
      return FALLBACK_MODELS;
    }

    const models = response.data.data
      .filter((model: any) => 
        model && 
        typeof model === 'object' && 
        model.id && 
        !model.id.includes('deprecated') &&
        model.context_length > 0 &&
        model.name.toLowerCase().includes('free')
      )
      .map(serializeModel);

    if (models.length === 0) {
      console.warn('No free models found, using fallback models');
      return FALLBACK_MODELS;
    }

    return sortModels(models);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('API Error:', error.response?.data || error.message);
    } else {
      console.error('Failed to fetch models:', error);
    }
    return FALLBACK_MODELS;
  }
};