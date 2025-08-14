# @your-scope/my-ui-library

Typed React + Tailwind UI components that work in React and Next.js.

## Install
```bash
npm i @your-scope/my-ui-library
# peer deps
npm i -D tailwindcss postcss autoprefixer
```

## Tailwind setup
Add the library to your Tailwind `content` so utilities purge correctly:
```ts
// tailwind.config.ts
export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@your-scope/my-ui-library/dist/**/*.{js,css}"
  ],
  theme: { extend: {} },
  plugins: [],
};
```

Include styles once in your app entry (optional, only if you want the base file):
```ts
import "@your-scope/my-ui-library/styles.css";
```

## Usage
```tsx
import { Button, Card, Badge, H2, P, Modal, Form, Field } from "@your-scope/my-ui-library";

export default function Example() {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-6 space-y-6">
      <H2>Welcome</H2>
      <P>Build fast with pre-styled components.</P>

      <div className="flex items-center gap-3">
        <Badge>New</Badge>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
      </div>

      <Card>
        <div className="p-6">
          <Form onSubmit={(e) => e.preventDefault()}>
            <Field label="Email" type="email" placeholder="you@example.com" />
            <Field label="Password" type="password" />
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </Card>

      <Modal open={open} onOpenChange={setOpen}>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Hello!</h3>
          <p className="text-gray-600">A lightweight, accessible modal.</p>
          <div className="mt-4 flex justify-end">
            <Button variant="secondary" onClick={() => setOpen(false)}>Close</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
```

## Build & Publish
```bash
npm run build
npm publish --access public
```
