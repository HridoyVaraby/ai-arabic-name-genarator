import axios from 'axios';
import { Gender, ArabicName } from '../types/name';
import { API_CONFIG, DEFAULT_MODEL } from '../config/api';
import { generatePrompt } from '../utils/promptGenerator';
import { validateAndTransformResponse } from '../utils/responseTransformer';

export const generateNames = async (
  letter: string,
  gender: Gender,
  modelId: string
): Promise<ArabicName[]> => {
  try {
    // Check if this is a Groq model
    const isGroqModel = DEFAULT_MODEL.provider === 'groq';

    const apiUrl = isGroqModel ? API_CONFIG.GROQ_API_URL : API_CONFIG.OPENROUTER_API_URL;
    const apiKey = isGroqModel ? API_CONFIG.GROQ_API_KEY : API_CONFIG.OPENROUTER_API_KEY;

    const response = await axios.post(
      apiUrl,
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
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          ...(isGroqModel ? {} : API_CONFIG.HEADERS)
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
