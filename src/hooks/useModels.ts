import { useState, useEffect, useCallback } from 'react';
import { OpenRouterModel } from '../types/model';
import { fetchOpenRouterModels } from '../services/modelService';
import { FALLBACK_MODELS } from '../config/models';
import {
  saveModelsToStorage,
  loadModelsFromStorage,
  saveSelectedModel,
  loadSelectedModel
} from '../utils/modelStorage';

export const useModels = () => {
  const [state, setState] = useState({
    models: FALLBACK_MODELS,
    isLoading: true,
    error: null as string | null,
    selectedModel: loadSelectedModel() || FALLBACK_MODELS[0]
  });

  const setModels = useCallback((models: OpenRouterModel[]) => {
    setState(prev => ({ ...prev, models: models.length > 0 ? models : FALLBACK_MODELS }));
  }, []);

  const setError = useCallback((error: string | null) => {
    setState(prev => ({ ...prev, error }));
  }, []);

  const setIsLoading = useCallback((isLoading: boolean) => {
    setState(prev => ({ ...prev, isLoading }));
  }, []);

  const setSelectedModel = useCallback((model: OpenRouterModel) => {
    setState(prev => ({ ...prev, selectedModel: model }));
    saveSelectedModel(model);
  }, []);

  useEffect(() => {
    let mounted = true;

    const initializeModels = async () => {
      if (!mounted) return;
      
      try {
        setIsLoading(true);
        setError(null);

        // Load cached models
        const cachedModels = loadModelsFromStorage();
        if (cachedModels?.length && mounted) {
          setModels(cachedModels);
          if (!state.selectedModel && cachedModels.length > 0) {
            setSelectedModel(cachedModels[0]);
          }
        }

        // Fetch fresh models
        const freshModels = await fetchOpenRouterModels();
        if (!mounted) return;

        if (freshModels.length > 0) {
          setModels(freshModels);
          saveModelsToStorage(freshModels);

          if (!state.selectedModel) {
            setSelectedModel(freshModels[0]);
          }
        }
      } catch (err) {
        if (!mounted) return;
        console.error('Failed to fetch models:', err);
        setError('Using default models due to connection issues.');
        
        // Ensure we have at least fallback models
        if (state.models.length === 0) {
          setModels(FALLBACK_MODELS);
          if (!state.selectedModel) {
            setSelectedModel(FALLBACK_MODELS[0]);
          }
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    initializeModels();

    return () => {
      mounted = false;
    };
  }, [setModels, setError, setIsLoading, setSelectedModel, state.selectedModel]);

  return {
    models: state.models,
    isLoading: state.isLoading,
    error: state.error,
    selectedModel: state.selectedModel,
    setSelectedModel
  };
};
