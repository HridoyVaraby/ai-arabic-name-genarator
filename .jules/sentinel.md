# Sentinel Journal

## 2024-05-22 - Prompt Injection Vulnerability
**Vulnerability:** Unsanitized user input in `generateMeaningPrompt` allows prompt injection.
**Learning:** LLM prompts constructing JSON context from user input must sanitize that input to prevent context breakout or instruction override.
**Prevention:** Implement strict input sanitization (trim, length limit, character whitelist/blacklist) before inserting user input into prompt templates.
