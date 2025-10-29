# React Vike SSR File Structure

```bash
root/
├── src/
│   ├── pages/                                      # Vike route-based file system (one folder per route)
│   │   ├── index/                                  # Homepage route `/`
│   │   │   ├── +Page.jsx                           # React page component rendered for this route
│   │   │   ├── +config.js                          # Per-page metadata config (title, description, etc.)
│   │   │   ├── +onBeforeRender.server.js           # Server-side data fetching hook
│   │   │   └── Home.scss                           # Scoped styles for homepage
│   │   │
│   │   ├── about/                                  # `/about` route
│   │   │   ├── +Page.jsx
│   │   │   ├── +config.js
│   │   │   ├── +onBeforeRender.server.js
│   │   │   ├── About.scss
│   │   │   │
│   │   │   └── nested-page/                        # `/about/nested-page` route
│   │   │       ├── +Page.jsx
│   │   │       ├── +config.js
│   │   │       ├── +onBeforeRender.server.js
│   │   │       └── NestedPage.
│   │   │
│   │   └── _error/                                 # 404 route
│   │
│   ├── renderer/                                   # Vike SSR renderer logic
│   │   ├── +config.js                              # Global Vike config (layout injection, meta merging, etc.)
│   │   ├── +onRenderClient.jsx                     # Client-side hydration entry
│   │   ├── +onRenderHtml.jsx                       # Server-side HTML rendering logic
│   │   └── PageShell.jsx                           # Layout wrapper for all pages (e.g. header, footer)
│   │
│   ├── components/                                 # Shared/reusable UI components (buttons, cards, navbars, etc.)
│   │
│   ├── assets/                                     # Static assets (logos, images, fonts)
│   │
│   ├── functions/                                  # Custom hooks, utility functions, SSR helpers
│   │
│   ├── data/                                       # Local JSON/data files
│   │
│   └── styles/
│       └── _variables.scss                         # Global Sass variables (colors, spacing, breakpoints)
│       └── main.scss                               # Global Sass styles
│
├── vite.config.js                                  # Vite config (plugins, aliases, build behavior)
│
├── package.json                                    # Project metadata, dependencies, and scripts
│
├── server.js                                       # Custom Express server (for SSR in production)
│
├── render.yaml                                     # Render.com deployment config (build/start commands, env vars)
│
├── .env                                            # Environment variables for local/dev environments
│
├── .gitignore                                      # Git exclusions (node_modules, dist, .env, etc.)
│
├── package-lock.json                               # Exact versions of installed dependencies
│
└── README.md                                       # Project documentation and setup instructions
```
