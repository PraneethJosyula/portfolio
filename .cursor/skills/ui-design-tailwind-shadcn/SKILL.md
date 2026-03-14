---
name: ui-design-tailwind-shadcn
description: Guides UI design and frontend styling with Tailwind CSS and shadcn/ui to create distinctive interfaces that avoid the generic AI-generated look. Use when building UIs, styling components, choosing typography, defining color palettes, or when the user mentions AI slop, generic design, or wants a unique aesthetic.
---

# Distinctive UI Design with Tailwind & shadcn

## Core Principle

AI-generated UIs share predictable patterns: Inter font, purple gradients, uniform rounded corners, symmetrical layouts. **Break these patterns intentionally** to create memorable interfaces.

---

## Anti-Patterns to Avoid

| Pattern | Why it reads as AI | Alternative |
|---------|-------------------|-------------|
| Inter, Roboto, System UI | Default in every AI output | Choose 1–2 distinctive fonts |
| Purple/blue gradients | Overused in AI demos | Pick an unexpected accent |
| `rounded-lg` everywhere | Uniform, forgettable | Vary: sharp corners, mixed radii |
| Centered hero + 3-column features | Template layout | Asymmetry, grid breaks, varied section widths |
| Generous uniform padding | No rhythm | Establish scale (4, 8, 12, 16, 24, 32, 48) |
| Subtle gray shadows | Flat, safe | Strategic depth or none |
| Default shadcn theme | Looks like every shadcn site | Customize CSS variables |

---

## Typography

**Avoid**: Inter, Roboto, Geist (unless intentional)

**Consider**:
- **Headings**: Fonts with character — Satoshi, Clash Display, Syne, Cabinet Grotesk, Fraunces
- **Body**: Readable but distinct — Source Sans 3, DM Sans, Nunito Sans, Literata
- **Monospace**: JetBrains Mono, Fira Code, IBM Plex Mono

```css
/* In globals.css or tailwind config */
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700&family=Source+Sans+3:wght@400;500;600&display=swap');
```

```js
// tailwind.config.js
fontFamily: {
  sans: ['Source Sans 3', 'sans-serif'],
  display: ['Syne', 'sans-serif'],
}
```

Use `font-display` for headings, `font-sans` for body. Vary weights (400, 500, 600, 700) to create hierarchy.

---

## Color & Theming

**Avoid**: Purple (#8B5CF6), blue-gray (#64748B), lavender gradients

**Do**:
1. Pick one accent color and derive shades (e.g., warm amber, deep teal, burnt orange)
2. Use neutral grays with a tint (warm gray for light mode, cool for dark)
3. Limit palette: 1 accent + 2–3 neutrals + semantic (success, error)

Customize shadcn in `globals.css`:

```css
@layer base {
  :root {
    --background: 40 20% 98%;        /* Warm off-white */
    --foreground: 20 14% 10%;
    --primary: 25 95% 53%;           /* Amber accent */
    --primary-foreground: 0 0% 100%;
    --muted: 40 10% 92%;
    --muted-foreground: 20 10% 40%;
    --radius: 0.5rem;                /* Slightly sharper */
  }
  .dark {
    --background: 220 20% 8%;
    --foreground: 40 10% 95%;
    --primary: 25 95% 55%;
  }
}
```

---

## Layout & Spacing

- **Break symmetry**: Offset grids, asymmetric hero layouts, varied column counts
- **Section width**: Not everything full-width — use `max-w-4xl mx-auto` for content, full-bleed for impact sections
- **Spacing scale**: Stick to 4px base (4, 8, 12, 16, 24, 32, 48, 64, 96)
- **Avoid**: `p-8` or `gap-8` everywhere — create rhythm with intentional variation

---

## Border Radius

Vary by element type:
- Cards: `rounded-xl` or `rounded-2xl`
- Buttons: `rounded-md` (sharper) or `rounded-full` (pill)
- Inputs: `rounded-lg`
- Images: `rounded-lg` or `rounded-none` for editorial feel

**Avoid**: Same radius on every element.

---

## shadcn Customization

1. **Override `--radius`** in CSS variables (default 0.5rem is fine; avoid 0.75rem everywhere)
2. **Customize component variants** — edit the generated component files
3. **Add custom utilities** — e.g. `bg-gradient-to-br from-amber-100 to-orange-50` for hero sections
4. **Don't use every component** — pick 5–8 and style them consistently

---

## Quick Checklist

Before shipping, verify:
- [ ] Font is not Inter or Roboto
- [ ] Primary color is not purple or default blue
- [ ] Border radius varies by element type
- [ ] Layout has at least one asymmetric or unexpected section
- [ ] shadcn theme variables are customized
- [ ] Spacing follows a consistent scale

---

## Additional Resources

- For Tailwind config and shadcn variable reference, see [reference.md](reference.md)
