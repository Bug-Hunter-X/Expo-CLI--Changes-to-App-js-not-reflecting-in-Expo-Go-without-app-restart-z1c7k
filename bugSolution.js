The issue might stem from caching mechanisms within Expo Go or the development server.  While not a direct fix, cleaning the cache and restarting can often resolve these transient problems.

**Workaround:**

1. **Clear the cache:** This can vary depending on your operating system and Expo version but often involves deleting the `node_modules` folder and reinstalling packages using `npm install` or `yarn install`.
2. **Restart the development server:** Stop the Expo server (`Ctrl+C` or `Cmd+C`) and restart it using `expo start`.
3. **Close and reopen Expo Go:** Close the Expo Go application completely and reopen it.

**Note:** This workaround doesn't directly address the underlying cause but can resolve the issue temporarily.  If the problem persists, consider reporting it on the official Expo forums or GitHub repository.  Further investigation might reveal more specific details and lead to a more permanent solution.