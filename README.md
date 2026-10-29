# WebDev Portfolio — React

A responsive personal portfolio built with React, Vite, CSS, and Lucide icons.

## Requirements
- Node.js 18+ (Node.js 20+ recommended)
- npm

## Run locally
1. Extract this ZIP.
2. Open a terminal in the `raaznama-portfolio` folder.
3. Install packages:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build for production
```bash
npm run build
npm run preview
```
The production site is created in the `dist` folder.

## Personalise before publishing
- In `src/App.jsx`, replace `Raaz` / `RaazNama` with your preferred display name.
- Replace `your.email@example.com` with your real email in both the contact link and the `mailto:` line in `handleSubmit`.
- Update the skills and their levels in the `skills` array to reflect your actual skills.
- Replace the example projects with your real project descriptions and links.
- Update the education / journey section with your real details.
- Replace GitHub and LinkedIn profile links with your actual profile URLs.
- If you want a real backend contact form, connect a form service or create a server endpoint; the included form opens the visitor's email app and does not send data to a server.

## Deploy
You can deploy the `dist` folder to Vercel, Netlify, or another static hosting provider. For Vercel, import the project repository and use the default Vite build command `npm run build` with output directory `dist`.
