# Expo CLI: App.js Changes Not Reflecting Without Restart

This repository demonstrates a bug where changes made to `App.js` in an Expo project are not reflected in the Expo Go app without completely closing and reopening the app, or restarting the Expo development server. 

## Bug Description

After making edits to `App.js`, the app running in Expo Go does not update to reflect the changes until the Expo Go app is completely closed and reopened or the development server is restarted.

## How to Reproduce

1. Clone this repository.
2. Navigate to the project directory in your terminal.
3. Run `expo start`.
4. Open the app in Expo Go.
5. Make changes to `App.js` (e.g., modify the text in a Text component).
6. Observe that the changes are not reflected in Expo Go without restarting the app or the development server.

## Solution

The provided solution offers a potential workaround, though the root cause may lie within Expo itself.