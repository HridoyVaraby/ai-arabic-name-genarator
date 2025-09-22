# AI Arabic Name Generator

## Overview

The AI Arabic Name Generator is a modern web application that uses AI to generate authentic Arabic names based on the input letter and gender preference. The application leverages Groq's GPT OSS 20B model to provide fast, high-quality Arabic name generation with cultural context and meanings.

[Live Demo](https://aiarabicname.netlify.app/)

## Features

- **AI-Powered Generation**: Uses Groq's GPT OSS 20B model for authentic Arabic name generation
- **Dual Alphabet Support**: Works with both Arabic letters (ا, ب, ت, etc.) and English letters (A, B, C, etc.)
- **Gender Selection**: Choose between male, female, or neutral names
- **Cultural Context**: Each name includes meaning and cultural significance
- **Streamlined Experience**: No model selection required - optimized for the best results
- **Responsive Design**: Works seamlessly on mobile and desktop devices
- **Fast Generation**: Powered by Groq's high-speed inference

## Technologies Used

- **Frontend:** React, TypeScript, Tailwind CSS
- **AI Integration:** Groq API with GPT OSS 20B model
- **Build Tool:** Vite
- **Deployment:** Netlify
- **Language:** TypeScript for type safety

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-arabic-name-generator
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add your Groq API key:
```env
VITE_GROQ_API_KEY=your_groq_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

### Getting a Groq API Key

1. Visit [Groq Console](https://console.groq.com/)
2. Sign up for an account
3. Generate an API key
4. Add the key to your `.env` file

## Usage

1. **Select Starting Letter**: Choose any Arabic letter (ا, ب, ت, etc.) or English letter (A, B, C, etc.)
2. **Choose Gender**: Select male, female, or neutral
3. **Generate Names**: Click the generate button to get 8 authentic Arabic names
4. **View Results**: Each name includes:
   - Arabic script (العربية)
   - Transliteration (Al-Arabiya)
   - Meaning and cultural significance

## API Integration

The application uses Groq's API with the GPT OSS 20B model for optimal performance:

- **Model**: `openai/gpt-oss-20b`
- **Provider**: Groq API
- **Context Window**: 128K tokens
- **Response Format**: Structured JSON with name details

## Project Structure

```
src/
├── components/          # React components
│   ├── SearchForm.tsx  # Main search interface
│   ├── NameCard.tsx    # Individual name display
│   └── ModelSelector.tsx # (Removed - no longer used)
├── config/             # Configuration files
│   ├── api.ts         # API endpoints and model config
│   └── models.ts      # Model definitions
├── services/           # API services
│   └── nameGenerator.ts # Name generation logic
├── utils/              # Utility functions
│   ├── promptGenerator.ts # AI prompt generation
│   └── responseTransformer.ts # Response processing
└── types/              # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
