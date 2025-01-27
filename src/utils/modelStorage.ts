import { OpenRouterModel } from '../types/model';

const MODELS_STORAGE_KEY = 'openrouter_models';
const SELECTED_MODEL_KEY = 'selected_model';

const safeStringify = (data: any): string => {
  try {
    return JSON.stringify(data, (key, value) => {
      if (typeof value === 'symbol') {
        return undefined;
      }
      return value;
    });
  } catch (e) {
    console.warn('Failed to stringify data:', e);
    return '';
  }
};

const safeParse = <T>(data: string | null): T | null => {
  if (!data) return null;
  try {
    return JSON.parse(data) as T;
  } catch (e) {
    console.warn('Failed to parse data:', e);
    return null;
  }
};

export const saveModelsToStorage = (models: OpenRouterModel[]): void => {
  try {
    const serializedModels = safeStringify(models);
    if (serializedModels) {
      localStorage.setItem(MODELS_STORAGE_KEY, serializedModels);
    }
  } catch (e) {
    console.warn('Failed to cache models:', e);
  }
};

export const loadModelsFromStorage = (): OpenRouterModel[] | null => {
  try {
    const stored = localStorage.getItem(MODELS_STORAGE_KEY);
    return safeParse<OpenRouterModel[]>(stored);
  } catch (e) {
    console.warn('Failed to load cached models:', e);
    return null;
  }
};

export const saveSelectedModel = (model: OpenRouterModel): void => {
  try {
    const serializedModel = safeStringify(model);
    if (serializedModel) {
      localStorage.setItem(SELECTED_MODEL_KEY, serializedModel);
    }
  } catch (e) {
    console.warn('Failed to save selected model:', e);
  }
};

export const loadSelectedModel = (): OpenRouterModel | null => {
  try {
    const stored = localStorage.getItem(SELECTED_MODEL_KEY);
    return safeParse<OpenRouterModel>(stored);
  } catch (e) {
    console.warn('Failed to load selected model:', e);
    return null;
  }
};
