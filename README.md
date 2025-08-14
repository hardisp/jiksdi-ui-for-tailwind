# @jiksdi/twn-ui

A premium, flexible React + Tailwind UI component library.

## Features
- Prebuilt components: Button, Card, Badge, Typography, Modal, Form, Field
- `scheme` prop for color themes, `variant` prop for layout styles
- Uses Tailwind's theme config for full design flexibility
- Built-in `ThemeProvider` for runtime theme customization (colors, radii, etc.)
- ESLint + Prettier setup for consistent code quality and style
- Works with both React and Next.js

## Installation
```bash
npm install @jiksdi/twn-ui
```

This package expects **React** and **Tailwind CSS** to be installed in your project.

## Usage
```tsx
import { Button, ThemeProvider } from '@jiksdi/twn-ui';

export default function Example() {
  return (
    <ThemeProvider value={{ colors: { primary: '#4f46e5' }, borderRadius: { xl: '1rem' } }}>
      <Button scheme="primary" variant="solid">Click Me</Button>
    </ThemeProvider>
  );
}
```

## Tailwind Configuration
Add your custom colors, borders, and radii in your project's `tailwind.config.js`. The components will automatically use these values unless overridden by `ThemeProvider`.

Example:
```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',
        danger: '#ef4444',
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
}
```

## Development
```bash
npm install
npm run lint
npm run format
```

## License
MIT © Hardi <jiksdi12@gmail.com>
