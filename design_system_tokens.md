# Design System Tokens

Below is the structured catalog of design system elements defined in the website's stylesheet ([index.css](file:///c:/Users/ASUS/Desktop/new%20portfolio/index.css)). You can reference these variables when specifying the customizations you want.

---

## 1. Core Accent Component HSL Anchors
These base HSL values act as core branding accent variables.

| Variable Name | HSL Value | Hex Equivalent | Description |
| :--- | :--- | :--- | :--- |
| `--orange-accent` | `255, 75%, 72%` | `#A396FA` | Soft Pastel Lavender (Accessible primary accent in dark mode) |
| `--purple-accent` | `220, 50%, 68%` | `#8299D6` | Soft Slate-Blue (Accessible secondary brand color in dark mode) |

---

## 2. Layout & Spacing Tokens
The layout spacing is set in relative `rem` units, corresponding to an upgraded baseline HTML font-size of `18px`.

| Variable Name | Size (rem) | Equivalent in Pixels | Description |
| :--- | :--- | :--- | :--- |
| `--spacing-xs` | `0.55rem` | `9.9px` | Extra small spacing |
| `--spacing-sm` | `1.1rem` | `19.8px` | Small spacing |
| `--spacing-md` | `1.65rem` | `29.7px` | Medium spacing |
| `--spacing-lg` | `2.75rem` | `49.5px` | Large spacing |
| `--spacing-xl` | `4.4rem` | `79.2px` | Extra large spacing |
| `--spacing-xxl` | `6.6rem` | `118.8px` | Double extra large spacing |

---

## 3. Borders & Radii Tokens

| Variable Name | Radius (px) | Description |
| :--- | :--- | :--- |
| `--border-radius-lg` | `24px` | Large cards, hero panels |
| `--border-radius-md` | `12px` | Buttons, intermediate components |
| `--border-radius-sm` | `6px` | Inner tags, inline elements |

---

## 4. Typography (Fonts)

| Variable Name | Font Stack | Description |
| :--- | :--- | :--- |
| `--font-serif` | `'Satoshi', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` | Editorial headings (Now using Satoshi) |
| `--font-sans` | `'Satoshi', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` | Main body copy, clean interfaces (Now using Satoshi) |
| `--font-mono` | `'Geist Mono', SFMono-Regular, Consolas, monospace` | Secondary labels, metrics, tags |

---

## 5. Animation Transitions

| Variable Name | Transition Value | Timing Function & Description |
| :--- | :--- | :--- |
| `--transition-smooth` | `0.4s cubic-bezier(0.25, 1, 0.5, 1)` | Default elegant custom bezier ease-out transition |
| `--transition-bounce` | `0.6s cubic-bezier(0.34, 1.56, 0.64, 1)` | Elastic/bouncing entry/interaction animations |
| `--transition-fast` | `0.2s ease` | Immediate response state/hover transitions |

---

## 6. Theme Tokens (Light vs. Dark Mode)

### Base Backgrounds & Surfaces
| Element Type | Light Mode Variable | Dark Mode Variable |
| :--- | :--- | :--- |
| Primary Canvas Background | `hsl(220, 20%, 97%)` | `hsl(220, 15%, 8%)` |
| Secondary Surface (Sidebar) | `hsl(220, 15%, 92%)` | `hsl(220, 12%, 12%)` |
| Tertiary Surface (Details) | `hsl(220, 12%, 88%)` | `hsl(220, 10%, 15%)` |
| Card Containers | `hsl(220, 20%, 97%)` | `hsl(220, 12%, 12%)` |
| Toggles & Control Elements | `hsl(220, 15%, 90%)` | `hsl(220, 10%, 18%)` |

### Typography Colors
| Element Type | Light Mode Variable | Dark Mode Variable |
| :--- | :--- | :--- |
| `--text-primary` | `hsl(220, 25%, 12%)` | `hsl(220, 10%, 90%)` |
| `--text-secondary` | `hsl(220, 15%, 32%)` | `hsl(220, 10%, 72%)` |
| `--text-muted` | `hsl(220, 12%, 44%)` | `hsl(220, 8%, 55%)` |

### Theme Colors (Contrast & Action Colors)
| Token Name | Light Mode Value | Dark Mode Value |
| :--- | :--- | :--- |
| `--color-accent` | `hsl(255, 60%, 45%)` | `hsl(var(--orange-accent))` |
| `--color-brand` | `hsl(220, 50%, 40%)` | `hsl(var(--purple-accent))` |
| `--color-bop` | `hsl(255, 60%, 45%)` | `hsl(var(--orange-accent))` |
| `--color-accent-light` | `hsla(255, 60%, 45%, 0.08)` | `hsla(var(--orange-accent), 0.12)` |
| `--color-success` | `hsl(142, 70%, 25%)` | `hsl(142, 60%, 55%)` |
| `--color-success-light` | `hsla(142, 70%, 25%, 0.08)` | `hsla(142, 60%, 55%, 0.12)` |

### Shadow Styling
| Token Name | Light Mode Value | Dark Mode Value |
| :--- | :--- | :--- |
| `--shadow-sm` | `0 2px 8px rgba(15, 23, 42, 0.04)` | `0 2px 8px rgba(0, 0, 0, 0.2)` |
| `--shadow-md` | `0 8px 30px rgba(15, 23, 42, 0.06)` | `0 8px 30px rgba(0, 0, 0, 0.3)` |
| `--shadow-focus` | `0 0 0 3px hsla(255, 60%, 45%, 0.3)` | `0 0 0 3px hsla(var(--orange-accent), 0.5)` |

### Focus Deck Accent Colors (Active Categories)
| Category Variable | Light Mode Value | Dark Mode Value |
| :--- | :--- | :--- |
| `--active-ai` | `255, 60%, 45%` | `var(--orange-accent)` |
| `--active-saas` | `220, 50%, 40%` | `var(--purple-accent)` |
| `--active-fintech` | `200, 60%, 45%` | `200, 70%, 70%` |
| `--active-build` | `145, 50%, 40%` | `145, 60%, 65%` |
| `--active-mba` | `340, 55%, 45%` | `340, 70%, 70%` |
