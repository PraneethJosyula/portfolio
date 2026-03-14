# Tailwind & shadcn Reference

## shadcn CSS Variables (HSL Channels)

shadcn uses channels-only format. Define as `H S% L%` (no `hsl()` wrapper):

| Variable | Purpose |
|----------|---------|
| `--background` | Page/body background |
| `--foreground` | Default text |
| `--card` / `--card-foreground` | Card surfaces |
| `--primary` / `--primary-foreground` | Buttons, links |
| `--secondary` / `--secondary-foreground` | Secondary actions |
| `--muted` / `--muted-foreground` | Subtle backgrounds, placeholder text |
| `--accent` / `--accent-foreground` | Hover states, highlights |
| `--destructive` / `--destructive-foreground` | Delete, error actions |
| `--border` | Border color |
| `--input` | Input border |
| `--ring` | Focus ring |
| `--radius` | Default border radius (e.g. `0.5rem`) |

Usage with opacity: `hsl(var(--primary) / 0.5)`

## Tailwind Extensions for shadcn

Add to `tailwind.config.js`:

```js
theme: {
  extend: {
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)',
    },
    colors: {
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
      // ... etc
    },
  },
},
```

## Distinctive Color Palettes (HSL)

**Warm editorial**: `--primary: 25 95% 53%` (amber)  
**Deep teal**: `--primary: 175 70% 35%`  
**Burnt orange**: `--primary: 15 85% 50%`  
**Forest**: `--primary: 145 50% 35%`  
**Warm gray neutrals**: `--background: 40 15% 97%`, `--foreground: 25 15% 12%`

## Font Pairing Examples

| Display | Body |
|--------|------|
| Syne | Source Sans 3 |
| Clash Display | DM Sans |
| Fraunces | Nunito Sans |
| Cabinet Grotesk | Literata |
