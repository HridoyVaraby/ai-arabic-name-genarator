import axios from 'axios';
import { Gender, ArabicName } from '../types/name';
import { API_CONFIG } from '../config/api';
import { generatePrompt, generateMeaningPrompt } from '../utils/promptGenerator';
import { validateAndTransformResponse } from '../utils/responseTransformer';
import { MeaningSearchResults } from '../types';

export const generateNames = async (
  letter: string,
  gender: Gender,
  modelId: string
): Promise<ArabicName[]> => {
  try {
    const response = await axios.post(
      API_CONFIG.GROQ_API_URL,
      {
        model: modelId,
        messages: [
          {
            role: 'system',
            content: 'You are an expert in Arabic names and culture. Respond only with valid JSON arrays containing name objects.'
          },
          {
            role: 'user',
            content: generatePrompt(letter, gender)
          }
        ],
        temperature: 0.7,
        max_tokens: 2000,
        response_format: { type: "json_object" }
      },
      {
        headers: {
          'Authorization': `Bearer ${API_CONFIG.GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.data?.choices?.[0]?.message?.content) {
      throw new Error('Invalid API response structure');
    }

    const content = response.data.choices[0].message.content;
    return validateAndTransformResponse(content);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.error?.message || error.message;
      console.error('API request failed:', errorMessage);
      throw new Error(`Name generation failed: ${errorMessage}`);
    }
    
    throw error instanceof Error ? error : new Error('Name generation failed');
  }
};

export const generateNamesByMeaning = async (
  meaning: string,
  modelId: string
): Promise<MeaningSearchResults> => {
  try {
    const response = await axios.post(
      API_CONFIG.GROQ_API_URL,
      {
        model: modelId,
        messages: [
          {
            role: 'system',
            content: 'You are an expert in Arabic names and culture. Respond only with valid JSON.'
          },
          {
            role: 'user',
            content: generateMeaningPrompt(meaning)
          }
        ],
        temperature: 0.7,
        max_tokens: 2000,
        response_format: { type: "json_object" }
      },
      {
        headers: {
          'Authorization': `Bearer ${API_CONFIG.GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.data?.choices?.[0]?.message?.content) {
      throw new Error('Invalid API response structure');
    }

    const content = response.data.choices[0].message.content;
    return JSON.parse(content);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.error?.message || error.message;
      console.error('API request failed:', errorMessage);
      throw new Error(`Name generation failed: ${errorMessage}`);
    }

    throw error instanceof Error ? error : new Error('Name generation failed');
  }
};
