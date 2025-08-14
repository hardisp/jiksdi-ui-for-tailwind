# 📦 @jiksdi/twn-ui

A small, production-ready **React + Tailwind CSS** UI library that works in **React** and **Next.js** apps. Ships typed components, tree-shakable builds (ESM + CJS), and zero runtime dependencies beyond React.

> Components: **Button, Card, Badge, Typography, Modal, Form, Field**

---

## Installation
```bash
npm install @jiksdi/twn-ui
# or
yarn add @jiksdi/twn-ui
```

You must also have **React 18+**, **TailwindCSS 3+**, **PostCSS**, and **Autoprefixer** installed in your project.

---

## Tailwind configuration for consumers
This package does **not** bundle Tailwind configuration. Consumers must set up Tailwind in their own project and can freely define `theme`, `plugins`, `darkMode`, etc.

Example `tailwind.config.ts`:
```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@jiksdi/twn-ui/dist/**/*.{js,css}"
  ],
  theme: {
    extend: {}
  },
  plugins: []
};

export default config;
```

---

## Usage
```tsx
import { Button, Card, Badge, H2, P, Modal, Form, Field } from "@jiksdi/twn-ui";
import "@jiksdi/twn-ui/styles.css";

export default function App() {
  return (
    <div className="p-6">
      <H2>Example UI</H2>
      <Button>Click me</Button>
    </div>
  );
}
```

---

## package.json (important fields)
```json
{
  "name": "@jiksdi/twn-ui",
  "version": "0.1.0",
  "description": "A typed React + Tailwind UI library (Button, Card, Badge, Typography, Modal, Form, Field)",
  "license": "MIT",
  "author": "Hardi <jiksdi12@gmail.com>",
  "peerDependencies": {
    "react": ">=18",
    "react-dom": ">=18",
    "tailwindcss": ">=3.0.0",
    "postcss": ">=8.0.0",
    "autoprefixer": ">=10.0.0"
  }
}
```

---

**Author:** Hardi (<jiksdi12@gmail.com>)  
**License:** MIT
