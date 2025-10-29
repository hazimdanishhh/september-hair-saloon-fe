# September Hair Saloon Website

![Node.js CI](https://img.shields.io/badge/Node-v16+-green)
![Vite](https://img.shields.io/badge/Built%20with-Vite-blueviolet)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

A modern, SEO-optimized marketing website for **September Hair Saloon**, built with React, Vite, Framer-motion, Sass, and **Vike SSR**. This project uses server-side rendering (SSR) via a custom Node.js + Express server and is will be staged on **Render.com**.

---

## 📁 Table of Contents

- [September Hair Saloon Website](#september-hair-saloon-website)
  - [📁 Table of Contents](#-table-of-contents)
  - [1. Overview](#1-overview)
  - [2. Features](#2-features)
  - [3. Tech Stack](#3-tech-stack)
  - [4. Folder Structure](#4-folder-structure)
  - [5. Getting Started](#5-getting-started)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
  - [6. Development](#6-development)
    - [6.1 🗂️ Page Structure \& Routing](#61-️-page-structure--routing)
    - [6.2 🌐 Global Layout](#62--global-layout)
    - [6.3 🧠 Metadata \& SEO](#63--metadata--seo)
    - [6.4 📦 Environment Variables](#64--environment-variables)
    - [6.5 🎨 Styling](#65--styling)
    - [6.6 ⚙️ State \& Logic (Optional Notes)](#66-️-state--logic-optional-notes)
  - [7. Production Build](#7-production-build)
  - [8. Deployment](#8-deployment)
    - [✅ Render Configuration](#-render-configuration)
    - [🚀 To Deploy](#-to-deploy)
  - [9. Metadata \& SEO](#9-metadata--seo)
    - [🧠 How Metadata Works](#-how-metadata-works)
      - [`+onBeforeRender.server.js`](#onbeforerenderserverjs)
      - [`+onRenderHtml.jsx`](#onrenderhtmljsx)
  - [10. License](#10-license)

---

## 1. Overview

This project is **September Hair Saloon**'s marketing website. Built with modern web technologies and designed to be responsive, engaging, and SEO-ready.

---

## 2. Features

- ✅ **Server-Side Rendering** via Vike (Vite + React SSR)
- ⚡ **Fast initial load** and high Lighthouse performance
- 🔍 **Per-page SEO metadata** with dynamic `<title>` and `<meta>` tags
- 🎨 **Framer Motion animations** for modern, fluid interactions
- 📱 **Mobile-first responsive design**
- 🧩 **Modular component structure** for easy scalability

---

## 3. Tech Stack

| Layer      | Technology                 |
| ---------- | -------------------------- |
| Frontend   | React, SCSS, Framer Motion |
| SSR Engine | Vike (vite-plugin-ssr)     |
| Routing    | React Router DOM           |
| Server     | Node.js + Express          |
| Build Tool | Vite                       |
| Deployment | Node Web Server            |

---

## 4. Folder Structure

For clarity and consistency across our codebase, we follow a **modular structure optimized for server-side rendering (SSR) with Vike and React.**

To avoid cluttering the README, the full breakdown of the project structure, file responsibilities, and SSR integration details is documented separately:

📁 [See detailed file structure and SSR setup](./React_Vike_SSR_File_Structure.md)

**This structure ensures:**

- Seamless integration between client and server code.
- Per-page config, routing, and metadata management.
- Scalable organization for components, styles, and server logic.

---

## 5. Getting Started

### Prerequisites

- Node.js v16 or newer
- npm

### Setup

```bash
# Clone the repo
git clone https://github.com/hazimdanishhh/september-hair-saloon-fe.git
cd september-hair-saloon-fe

# Install dependencies
npm install

# Start development server
npm run dev

# Change the VITE_SITE_BASE_URL= in the .env file to match the appropriate base URL (for SEO and Meta)
# - ensure no "/" trailing slash at the end
```

Open `http://localhost:3000` to view it in the browser.

---

## 6. Development

This project uses **Vite**, **Vike (vite-plugin-ssr)**, and **React**. Below is a guide to understand the structure, flow, and conventions used.

### 6.1 🗂️ Page Structure & Routing

- All routes are defined in `src/pages/` using **Vike’s file-based routing** (like Next.js).
- Each route lives in its own folder with the following files:

```bash
src/pages/route-name/
├── +Page.jsx                   # Main page component
├── +config.js                  # Vike route config (meta.title, route, etc.)
├── +onBeforeRender.server.js   # Fetch data and define pageContext
├── page.scss                   # (Optional) Page-specific styles
├── components/                 # (Optional) Page-specific components
```

- The root route (`/`) is in `src/pages/index/`

### 6.2 🌐 Global Layout

- The global app shell (layout, providers, etc.) is defined in: `src/renderer/PageShell.jsx`
- This wraps every page and includes layout components like navbar and footer.

### 6.3 🧠 Metadata & SEO

- Page-level meta (title, description, Open Graph tags) is handled in: +onBeforeRender.server.js
- Do **not** manually edit `<head>` in `+Page.jsx` — it's handled server-side.
- Go to [9. Metadata \& SEO](#9-metadata--seo) for the full context.

### 6.4 📦 Environment Variables

Environment variables control base URLs used for metadata, SEO, and deployment behavior. (No trailing slash "/" at the end)

```bash
#.env file
VITE_SITE_BASE_URL=https://hyrax-oil.onrender.com   #example
```

- Used in SSR to generate canonical URLs, Open Graph meta tags, and absolute asset paths in each page’s metadata.
- In development (npm run dev), fallback is always `http://localhost:3000`.
- For staging and production, you must set the correct base URL in .env:
- Make sure to change this URL based on the environment (e.g. staging vs production domains).

This value is used in server-side logic such as +onBeforeRender.server.js and +onRenderHtml.jsx to build SEO metadata like:

```js
// +onBeforeRender.server.js
const url = process.env.VITE_SITE_BASE_URL || "http://localhost:3000";
```

```js
// +onRenderHtml.jsx
const url = documentProps?.url || "http://localhost:3000";
```

### 6.5 🎨 Styling

- Use **SCSS** for all styling. The structure is:

  - `src/styles/` for **global** SCSS files.
  - Each page can have its own `pageName.scss` file scoped to that route.
  - Components can have their own `ComponentName.scss`.

- Global SCSS variables are auto-injected from: src/styles/\_variables.scss
- This is configured via `vite.config.js` under `css.preprocessorOptions.scss.additionalData`.

### 6.6 ⚙️ State & Logic (Optional Notes)

- Global providers (e.g. `ThemeProvider`, `HydrationFix`, etc.) are added in `PageShell.jsx`.
- Reusable logic (e.g. hooks, functions) lives in: src/functions/

---

## 7. Production Build

To prepare the app for production:

```bash
rm -rf dist       #Cleans up the dist/ folder
npm run build
npm start
```

This will generate:

- dist/client/: static assets (HTML, JS, CSS)
- dist/server/entry.mjs: SSR logic used by server.js

Open `http://localhost:3000` to view it in the browser.

---

## 8. Deployment

We use **[Render.com](https://render.com)** (Node Web Service) for staging deployments of this SSR-enabled Vike + React application.

### ✅ Render Configuration

```render.yaml
services:
  - type: web
    name: september-hair-saloon-fe
    env: node
    buildCommand: npm install && npm run build
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: PORT
        value: 3000
```

This file allows Render to auto-detect and set up your service when the repo is connected.

### 🚀 To Deploy

✅ Don’t forget to update .env with the correct VITE_SITE_BASE_URL when deploying to staging or production. (no trailing slash "/" at the end)

1. Push changes to GitHub
2. Connect Render to the repository

   - Go to `https://render.com` and sign in.
   - Click “New +” → “Web Service”.
   - Under `Connect a Repository`, select `GitHub`.
   - Authorize Render if you haven’t already.
   - Choose your repository (e.g., hyrax-oil).
   - Render will auto-detect the render.yaml configuration.

3. Fill in Remaining Details (if render.yaml is missing)

If you're not using render.yaml, you must fill out manually:

| Field                     | Input                                                                               |
| ------------------------- | ----------------------------------------------------------------------------------- |
| **Name**                  | hyrax-oil                                                                           |
| **Environment**           | Node                                                                                |
| **Build Command**         | npm install && npm run build                                                        |
| **Start Command**         | npm start                                                                           |
| **Publish Directory**     | leave blank                                                                         |
| **Environment Variables** | NODE_ENV=production                                                                 |
|                           | VITE_SITE_BASE_URL=`https://september-hair-saloon-fe.onrender.com`                  |
|                           | PORT=3000 (Render automatically sets this too, but it's good practice to define it) |

4. **Deploy**

   - Click “Create Web Service”
   - Render will:
     1. Clone the repo
     2. Run the build
     3. Start the Node server from server.js
   - Once complete, your SSR app will be live on a Render-generated subdomain like `https://september-hair-saloon-fe.onrender.com`

5. **Auto Deployments**

Render automatically redeploys whenever you push to the connected GitHub branch (e.g., main or staging).

---

## 9. Metadata & SEO

This project uses **Vike (vite-plugin-ssr)** to inject dynamic, SEO-friendly metadata during server-side rendering (SSR). Here's how it works:

### 🧠 How Metadata Works

Metadata is injected into the HTML `<head>` during SSR using two key files:

#### `+onBeforeRender.server.js`

Each page can define its own metadata by returning `documentProps` in the `pageContext`.

```js
// Example: src/pages/index/+onBeforeRender.server.js
export function onBeforeRender() {
  return {
    pageContext: {
      documentProps: {
        title: "September Hair Saloon",
        description: "",
        // You can also add: ogTitle, ogImage, etc.
      },
    },
  };
}
```

#### `+onRenderHtml.jsx`

This is where the SSR HTML output is generated. It reads pageContext.documentProps and injects the metadata into the `<head>` of the HTML.

You can also define global metadata, such as favicons, Open Graph defaults, or fonts here.

```jsx
// Example: src/renderer/+onRenderHtml.jsx

...
<head>
  <meta name="description" content={documentProps.description} />
  <meta
    property="og:title"
    content={documentProps.ogTitle || documentProps.title}
  />
  <link rel="icon" href="/favicon.ico" />
  ...
</head>
```

---

## 10. License

This project is licensed under the MIT License.
