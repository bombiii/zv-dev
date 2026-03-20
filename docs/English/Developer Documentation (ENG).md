# Portfolio App - Developer Documentation

## Overview

This documentation covers the `app/` folder architecture, components, and development practices for the portfolio Next.js application. The portfolio is a modern, theme-aware web application built with Next.js 16, React 19, and Tailwind CSS.

---

## Project Structure

```
app/
├── layout.tsx          # Root layout component with theme and font setup
├── page.tsx            # Home page with tech stack marquee
└── globals.css         # Global styles and animations
```

### Related Folders

```
components/
├── theme-provider.tsx  # Next-themes wrapper with hotkey support
└── ui/
    ├── aurora-background.tsx  # Animated background component
    └── button.tsx             # Reusable button component

lib/
└── utils.ts            # Utility functions (cn for className merging)

hooks/                  # Custom React hooks (reserved for future use)
```

---

## Core Files

### 1. `layout.tsx` - Root Layout

**Purpose:** Defines the global HTML structure and applies theme/font configuration to the entire application.

**Key Features:**
- Imports Geist and Geist Mono fonts from Google Fonts
- Wraps the app with `ThemeProvider` for dark/light theme support
- Sets language to Hungarian (`lang="hu"`)
- Applies Tailwind utility classes for antialiasing and font variables

**Fonts:**
- **Sans:** Geist (primary font)
- **Mono:** Geist Mono (code/technical text)

**CSS Variables:**
- `--font-sans`: Geist font stack
- `--font-mono`: Geist Mono font stack

```tsx
// Usage in components
<div className="font-sans">Normal text</div>
<div className="font-mono">Monospace text</div>
```

### 2. `page.tsx` - Home Page

**Purpose:** The main landing page displaying your tech stack as an animated marquee.

**Key Components:**
- **AuroraBackground:** Animated gradient background
- **Tech Stack Arrays:** Two rows of technology icons
  - **Row 1:** JavaScript, TypeScript, React, Next.js, Node.js, Tailwind CSS, CSS
  - **Row 2:** Python, Docker, Git, Linux, CI/CD, HTML5, Vite

**Tech Stack Display:**
Each technology includes:
- `Icon`: React Icons component (from `react-icons/si`)
- `label`: Technology name
- `color`: Tailwind color class (e.g., `text-yellow-400`)

**Sub-Components:**
- `MarqueeContent`: Renders individual tech items with icons and labels
- `MarqueeRow`: A scrolling row with animation (reverses direction for alternating rows)

**Styling:**
- Uses `animate-scroll-left` and `animate-scroll-right` classes
- Icons: 3xl size with specific colors
- Text: lg font, semibold, tracking-wide

### 3. `globals.css` - Global Styles

**Contains:**
- Tailwind CSS directives (`@tailwind`)
- Custom animations (e.g., `animate-scroll-left`, `animate-scroll-right`)
- Global color schemes and utilities
- CSS variables for theming

---

## Key Components

### ThemeProvider (`components/theme-provider.tsx`)

Manages application-wide theme switching with `next-themes`.

**Features:**
- Dark/Light mode toggle
- System preference detection
- Hotkey support for theme switching (Ctrl+Shift+L or Cmd+Shift+L)
- Persistent theme selection in localStorage

**Usage:**
```tsx
// In components
"use client"
import { useTheme } from "next-themes"

export function MyComponent() {
  const { theme, setTheme } = useTheme()
  return <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
    Toggle Theme
  </button>
}
```

### AuroraBackground (`components/ui/aurora-background.tsx`)

Animated gradient background component that creates a dynamic visual effect.

**Usage:**
```tsx
import { AuroraBackground } from "@/components/ui/aurora-background"

export default function Page() {
  return (
    <AuroraBackground>
      {/* Content */}
    </AuroraBackground>
  )
}
```

### Button (`components/ui/button.tsx`)

Reusable button component built with Radix UI and Tailwind CSS.

---

## Styling Architecture

### Approach: Tailwind CSS + shadcn/ui

**Design System:**
- Utility-first CSS with Tailwind CSS v4.2.1
- Pre-built UI components from shadcn/ui
- Class-based composition for flexibility

**Color Palette:**
- Slate (neutral): `text-slate-100`, `text-slate-200`
- Tech-specific colors: Yellow, Blue, Cyan, Green, Orange, Purple
- Theme-aware (dark/light mode)

**Typography:**
- **Fonts:** Geist (sans), Geist Mono (mono)
- **Font Utilities:** `font-sans`, `font-mono`, `font-semibold`, `tracking-wide`

**Spacing & Layout:**
- Gap utilities: `gap-3`, `gap-8`
- Padding: `pr-8`
- Width: `w-max`, `w-52`, `w-full`
- Flexbox: `flex`, `items-center`, `shrink-0`

### Custom Animations

**Scroll Animations** (defined in `globals.css`):
- `animate-scroll-left`: Continuous left scroll for marquee
- `animate-scroll-right`: Continuous right scroll for marquee rows

```css
/* Example animation definition */
@keyframes scroll-left {
  to {
    transform: translateX(-100%);
  }
}
```

---

## Development Workflow

### Installation & Setup

```bash
# Install dependencies
npm install

# Start development server with Turbopack
npm run dev
# Server runs at http://localhost:3000
```

### Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server (Turbopack enabled) |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run typecheck` | TypeScript type checking |

### Adding New Pages

1. Create a new file in `app/` folder (e.g., `app/about/page.tsx`)
2. Automatically becomes a route at `/about`
3. Inherits layout from `layout.tsx`

```tsx
// app/about/page.tsx
export default function AboutPage() {
  return <div>About section</div>
}
```

### Adding New UI Components

1. Create component in `components/ui/`
2. Build with Radix UI + Tailwind CSS
3. Export and import in pages

```tsx
// components/ui/my-component.tsx
export function MyComponent() {
  return <div className="...">Custom Component</div>
}

// app/page.tsx
import { MyComponent } from "@/components/ui/my-component"
```

### Modifying Tech Stack

**To add a new technology to the marquee:**

1. Import icon from `react-icons/si`
2. Add to `row1` or `row2` array in `app/page.tsx`
3. Include: `Icon`, `label`, and `color`

```tsx
import { SiMyTech } from "react-icons/si"

const row1 = [
  // ... existing
  { Icon: SiMyTech, label: "My Tech", color: "text-color-500" },
]
```

---

## Theme System

### Configuration

**Theme Settings** (in `components/theme-provider.tsx`):
- `attribute="class"`: Uses class-based theming
- `defaultTheme="system"`: Respects system preference
- `enableSystem`: Automatically switches with OS theme

### Switching Themes

**Keyboard Shortcut:**
- **macOS:** `Cmd + Shift + L`
- **Windows/Linux:** `Ctrl + Shift + L`

**Programmatically:**
```tsx
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return <button onClick={toggleTheme}>Toggle</button>
}
```

---

## Dependencies Overview

### Core Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| next | 16.1.7 | React framework |
| react | 19.2.4 | UI library |
| react-dom | 19.2.4 | DOM rendering |
| react-icons | 5.6.0 | Icon library |
| next-themes | 0.4.6 | Theme management |

### Styling Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| tailwindcss | 4.2.1 | Utility CSS |
| radix-ui | 1.4.3 | Accessible components |
| tailwind-merge | 3.5.0 | Merge Tailwind classes |
| clsx | 2.1.1 | Conditional classes |

### Dev Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| typescript | 5.9.3 | Type safety |
| eslint | 9.39.4 | Code linting |
| prettier | 3.8.1 | Code formatting |

---

## Best Practices

### 1. Component Organization

✅ **Do:**
- Keep UI components in `components/`
- Use `"use client"` directive only when needed
- Split large components into smaller ones

❌ **Don't:**
- Place UI components directly in `app/`
- Over-engineer simple components

### 2. Styling

✅ **Do:**
- Use Tailwind utility classes
- Leverage `cn()` utility for conditional classes
- Use theme-aware colors (slate, text-opacity)

❌ **Don't:**
- Mix inline styles and Tailwind
- Create custom CSS when Tailwind covers it

### 3. Theming

✅ **Do:**
- Use `next-themes` for theme management
- Test in both dark and light modes
- Use semantic color names

❌ **Don't:**
- Hardcode colors
- Ignore system preferences

### 4. Performance

✅ **Do:**
- Use `suppressHydrationWarning` when theme-aware
- Leverage Next.js image optimization
- Keep components lean

❌ **Don't:**
- Disable Turbopack
- Create unnecessary re-renders

### 5. Type Safety

✅ **Do:**
- Use TypeScript for all files
- Define prop types for components
- Run `npm run typecheck` before commits

❌ **Don't:**
- Use `any` types
- Skip type checking

---

## Common Tasks

### Task: Add a New Technology to the Stack

1. Find the icon on [react-icons](https://react-icons.github.io/react-icons/search)
2. Add import: `import { SiTechName } from "react-icons/si"`
3. Add to appropriate row array
4. Choose a Tailwind color class

### Task: Change Theme Colors

1. Edit CSS variables in `globals.css`
2. Update Tailwind theme config if needed
3. Test in both light/dark modes

### Task: Create a New Page Section

1. Create folder: `app/section-name/`
2. Add `page.tsx`
3. Import and use components

### Task: Update Font Family

1. Modify font imports in `layout.tsx`
2. Update CSS variables
3. Update Tailwind config if needed

---

## Troubleshooting

### Theme Not Switching

**Problem:** Theme toggle doesn't work
**Solution:**
- Check `suppressHydrationWarning` is on `<html>` element
- Verify `next-themes` is installed
- Restart dev server

### Animations Not Playing

**Problem:** Marquee animations aren't visible
**Solution:**
- Check `globals.css` has animation definitions
- Verify Tailwind CSS is imported
- Check animation class names in template

### Icons Not Showing

**Problem:** React icons appear as blank
**Solution:**
- Verify icon import path is correct: `react-icons/si`
- Check icon name exists in library
- Ensure `react-icons` package is installed

### TypeScript Errors

**Problem:** Type errors in components
**Solution:**
```bash
npm run typecheck
npm run format
```

---

## Resources

- **Next.js Docs:** https://nextjs.org/docs
- **React Docs:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com
- **shadcn/ui:** https://ui.shadcn.com
- **React Icons:** https://react-icons.github.io
- **next-themes:** https://github.com/pacocoursey/next-themes

---

## Contributing Guidelines

When adding new features to the app:

1. Follow TypeScript best practices
2. Format code with Prettier
3. Lint with ESLint
4. Test theme switching
5. Verify responsive design
6. Update this documentation

---

**Last Updated:** March 2026  
**Portfolio Version:** 0.0.1  
**Next.js Version:** 16.1.7
