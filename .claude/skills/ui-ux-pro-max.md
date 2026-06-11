# UI/UX Pro Max

AI-powered design intelligence with 67 UI styles, 161 color palettes, 57 font pairings, 25 chart types, 99 UX guidelines, and 15+ tech stacks.

## When to Apply

Use this skill when the task involves **UI structure, visual design decisions, interaction patterns, or UX quality control**.

### Must Use

- Designing new pages (Landing Page, Dashboard, Admin, SaaS, Mobile App)
- Creating or refactoring UI components (buttons, modals, forms, tables, charts)
- Selecting color schemes, font systems, spacing, or layout systems
- Reviewing UI code for UX, accessibility, or visual consistency
- Implementing navigation, animations, or responsive behavior
- Making product-level design decisions (style, hierarchy, brand expression)

### Skip

- Pure backend logic
- API or database design only
- Infrastructure or DevOps
- Non-visual scripts or automation

**Rule**: If the task changes how something **looks, behaves, moves, or is interacted with**, use this skill.

## Prerequisites

Check if Python is installed:

```bash
python3 --version || python --version
```

If Python is not installed, install it:

**macOS:** `brew install python3`
**Ubuntu/Debian:** `sudo apt update && sudo apt install python3`
**Windows:** `winget install Python.Python.3.12`

---

## How to Use This Skill

| Scenario | Start From |
|----------|------------|
| New project / page | Step 1 → Step 2 (design system) |
| New component | Step 3 (domain search: style, ux) |
| Choose style / color / font | Step 2 (design system) |
| Review existing UI | Quick Reference checklist |
| Fix a UI bug | Quick Reference → relevant section |

### Step 1: Analyze User Requirements

Extract key information:
- **Product type**: Entertainment, Tool, Productivity, or hybrid
- **Target audience**: Consumer vs professional, age group, context
- **Style keywords**: playful, vibrant, minimal, dark mode, immersive
- **Tech stack**: React, Vue, Flutter, React Native, etc.

### Step 2: Generate Design System (REQUIRED)

**Always start with `--design-system`** for comprehensive recommendations:

```bash
python3 skills/ui-ux-pro-max/scripts/search.py "<product_type> <industry> <keywords>" --design-system [-p "Project Name"]
```

This generates: pattern, style, colors, typography, effects, and anti-patterns.

**Example:**
```bash
python3 skills/ui-ux-pro-max/scripts/search.py "beauty spa wellness service" --design-system -p "Serenity Spa"
```

**Persist design system across sessions:**
```bash
python3 skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "Project Name"
```

Creates `design-system/MASTER.md` — Global Source of Truth with all design rules.

**With page-specific override:**
```bash
python3 skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "Project Name" --page "dashboard"
```

### Step 3: Supplement with Detailed Searches (as needed)

```bash
python3 skills/ui-ux-pro-max/scripts/search.py "<keyword>" --domain <domain> [-n <max_results>]
```

| Need | Domain | Example |
|------|--------|---------|
| Product type patterns | `product` | `--domain product "entertainment social"` |
| Style options | `style` | `--domain style "glassmorphism dark"` |
| Color palettes | `color` | `--domain color "entertainment vibrant"` |
| Font pairings | `typography` | `--domain typography "playful modern"` |
| Chart recommendations | `chart` | `--domain chart "real-time dashboard"` |
| UX best practices | `ux` | `--domain ux "animation accessibility"` |
| Landing structure | `landing` | `--domain landing "hero social-proof"` |
| React/Next.js perf | `react` | `--domain react "rerender memo list"` |
| App interface a11y | `web` | `--domain web "accessibilityLabel touch"` |

### Step 4: Stack Guidelines

```bash
python3 skills/ui-ux-pro-max/scripts/search.py "<keyword>" --stack <stack>
```

Available stacks: `react`, `nextjs`, `vue`, `svelte`, `astro`, `swiftui`, `react-native`, `flutter`, `nuxtjs`, `nuxt-ui`, `html-tailwind`, `shadcn`, `jetpack-compose`, `threejs`, `angular`, `laravel`

---

## Priority Rules

| Priority | Category | Impact | Domain |
|----------|----------|--------|--------|
| 1 | Accessibility | CRITICAL | `ux` |
| 2 | Touch & Interaction | CRITICAL | `ux` |
| 3 | Performance | HIGH | `ux` |
| 4 | Style Selection | HIGH | `style`, `product` |
| 5 | Layout & Responsive | HIGH | `ux` |
| 6 | Typography & Color | MEDIUM | `typography`, `color` |
| 7 | Animation | MEDIUM | `ux` |
| 8 | Forms & Feedback | MEDIUM | `ux` |
| 9 | Navigation Patterns | HIGH | `ux` |
| 10 | Charts & Data | LOW | `chart` |

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

### Visual Quality
- [ ] No emojis used as icons (use SVG: Heroicons, Lucide, Simple Icons)
- [ ] All icons from a consistent icon set
- [ ] cursor-pointer on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Semantic color tokens used (no ad-hoc hardcoded hex)

### Interaction
- [ ] All tappable elements provide clear pressed feedback
- [ ] Touch targets meet minimum size (≥44x44pt iOS, ≥48x48dp Android)
- [ ] Micro-interaction timing 150-300ms with native-feeling easing
- [ ] Disabled states visually clear and non-interactive
- [ ] Screen reader focus order matches visual order

### Light/Dark Mode
- [ ] Primary text contrast ≥4.5:1 in both themes
- [ ] Secondary text contrast ≥3:1 in both themes
- [ ] Both themes tested before delivery

### Layout
- [ ] Safe areas respected for headers, tab bars, bottom CTA bars
- [ ] Scroll content not hidden behind fixed/sticky bars
- [ ] Verified on 375px, 768px, 1024px, 1440px
- [ ] 4/8dp spacing rhythm maintained throughout

### Accessibility
- [ ] All meaningful images/icons have accessibility labels
- [ ] Form fields have labels, hints, and clear error messages
- [ ] Color is not the only indicator
- [ ] Reduced motion and dynamic text size supported

---

## Common Anti-Patterns (NEVER DO)

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide)
- ❌ **Missing cursor:pointer** — All clickable elements must have it
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y
- ❌ **Placeholder-only labels** — Always use visible labels on inputs
- ❌ **No loading feedback** — Always show loading states for async ops
