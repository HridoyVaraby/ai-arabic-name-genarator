import React from 'react';
import { ChevronDown, AlertCircle, Loader2 } from 'lucide-react';
import { OpenRouterModel } from '../types/model';
import { useModels } from '../hooks/useModels';

interface ModelSelectorProps {
  onModelChange: (modelId: string) => void;
}

export const ModelSelector: React.FC<ModelSelectorProps> = ({ onModelChange }) => {
  const { models, isLoading, error, selectedModel, setSelectedModel } = useModels();
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredModels = React.useMemo(() => {
    return models.filter(model => 
      model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      model.provider.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [models, searchTerm]);

  const handleModelSelect = (model: OpenRouterModel) => {
    setSelectedModel(model);
    onModelChange(model.id);
    setIsOpen(false);
  };

  React.useEffect(() => {
    if (selectedModel) {
      onModelChange(selectedModel.id);
    }
  }, [selectedModel, onModelChange]);

  if (isLoading) {
    return (
      <div className="flex items-center space-x-2 text-gray-500">
        <Loader2 className="w-4 h-4 animate-spin" />
        <span>Loading available models...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center space-x-2 text-amber-600">
        <AlertCircle className="w-4 h-4" />
        <span>{error}</span>
      </div>
    );
  }

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Select Language Model
      </label>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      >
        <div className="flex flex-col items-start">
          <span className="font-medium">{selectedModel?.name || 'Select a model'}</span>
          <span className="text-sm text-gray-500">
            {selectedModel?.provider} - {selectedModel?.context_length} tokens
          </span>
        </div>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
          <div className="p-2 border-b">
            <input
              type="text"
              placeholder="Search models..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <div className="max-h-60 overflow-auto">
            {filteredModels.map((model) => (
              <div
                key={model.id}
                className={`
                  px-4 py-2 hover:bg-gray-50 cursor-pointer
                  ${selectedModel?.id === model.id ? 'bg-emerald-50' : ''}
                `}
                onClick={() => handleModelSelect(model)}
              >
                <div className="flex flex-col">
                  <span className="font-medium">{model.name}</span>
                  <span className="text-sm text-gray-500">
                    {model.provider} - {model.context_length.toLocaleString()} tokens
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
