# Sentinel's Journal

## 2024-05-22 - Preventing Prompt Injection in Client-Side Apps
**Vulnerability:** User input was directly interpolated into the LLM prompt string. This allowed malicious users to inject instructions (Prompt Injection) or break the JSON structure required by the app.
**Learning:** In client-side LLM apps, the "backend" is often just the API call constructed in the browser. Since we can't hide the prompt construction from the user (they can see the JS), we must at least prevent them from easily breaking the app or wasting tokens via the UI.
**Prevention:**
1. Sanitize all user inputs before interpolation.
2. Strip control characters.
3. Replace double quotes with single quotes to prevent breaking out of the prompt string context.
4. Enforce strict length limits.
