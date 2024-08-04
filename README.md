This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## install  mui
npm install @mui/material @emotion/react @emotion/styled

https://mui.com/material-ui/getting-started/installation/

## install roboto font (mui)
npm install @fontsource/roboto

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


## To Install firebase
```bash
npm install firebase
```

https://firebase.google.com/docs/web/setup?hl=en&authuser=0&_gl=1*iumunu*_ga*Mjg4ODIzMTMxLjE3MjIyODI0OTY.*_ga_CW55HF8NVT*MTcyMjM2ODk0Ni4yLjEuMTcyMjM2OTEzMy4yMi4wLjA.


npm install firebase

import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);

# Install firestore (database)



# Add components on the app
* Box, Typography, 
[Modal](https://mui.com/material-ui/react-modal/)

# Hiding API keys
https://www.youtube.com/watch?v=17UVejOw3zA


## Deploy to Vercel

First run the build command to deploy:
```bash
npm run build
```

Add, commit, and push to your github repo

Go to vercel website and add your project


[Source: Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.


