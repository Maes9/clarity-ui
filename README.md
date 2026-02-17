# clarity-ui

**Stop generating AI slop. Start generating Stripe-quality dashboards.**

clarity-ui is a Claude Code skill that makes AI-generated B2B SaaS interfaces look like they were designed by a professional design team. Install it, prompt Claude, and get production-grade dashboards, data tables, settings pages, and auth flows.

## Before / After

> Same prompt. Same Claude. The only difference is clarity-ui.

*[Screenshots coming — generated with and without the skill installed]*

## What you get

- **4 color palettes** — Indigo (default), Slate, Mono, Warm — each with light + dark mode
- **6 layout patterns** — App shell, dashboard, list-detail, settings, data management, auth
- **27 components** — Data table, stat cards, filter bar, sidebar, top bar, forms, modals, toasts, charts, select, command palette, tabs, dropdown menus, progress bars, toggles, tooltips, avatars, and more
- **Self-expanding component library** — When Claude needs a component that doesn't exist, it creates it following the design rules and registers it. Your library grows with your project. No component gaps. No drift.
- **Design tokens** — Typography, spacing, shadows, borders, motion — all in JSON
- **Component registry** — `registry.json` with keyword tags for fast AI discovery
- **Starter template** — Pre-wired Next.js app shell, ready in seconds
- **3 responsive breakpoints** — Desktop, tablet, mobile — every component adapts
- **Adaptive density** — Compact for tables, default for forms, spacious for settings — automatic
- **Dark mode** — Built-in from day 1, class-based toggle

## Quick start

### 1. Install the skill

Copy the skill folder into your project:

```bash
# From the repo root
cp -r skills/clarity-ui /path/to/your/project/.claude/skills/clarity-ui
```

### 2. Start a new project (optional)

Use the starter template for a pre-wired app shell:

```bash
cp -r starters/default my-new-project
cd my-new-project
npm install
npm run dev
```

### 3. Prompt Claude Code

```
Build me a SaaS analytics dashboard with:
- Sidebar navigation with 5 sections
- 4 KPI stat cards (revenue, users, conversion rate, MRR)
- A line chart showing revenue over the last 12 months
- A data table of recent transactions with sorting and filtering
```

That's it. Claude reads the design system and generates production-grade code.

### 4. Try different prompts

| Prompt | What you get |
|--------|-------------|
| "Build an analytics dashboard" | KPI cards, charts, activity table |
| "Build a user management page" | Data table with filters, list-detail view, status badges |
| "Build a settings page" | Multi-section form, toggles, danger zone |
| "Build a billing page" | Plan cards, invoice table, usage metrics |
| "Build a login page" | Centered auth card, social login, dark mode toggle |

## How it works

clarity-ui uses a **three-layer architecture** designed for AI consumption:

1. **SKILL.md** = Rulebook — design philosophy, rules, component specs, self-expansion instructions
2. **registry.json** = Dictionary — what components exist and where to find them
3. **.tsx files** = Implementation reference — pinned code the AI reads when building

When Claude needs a component, it checks the registry first. If the component exists, it reads the .tsx file and uses it exactly. If it doesn't exist, it creates a new one following the SKILL.md rules, writes the file, and registers it. Future sessions reuse it.

**Result:** Every component in your app — whether from the curated library or generated during development — follows the same design rules. No drift across sessions.

## Architecture

```
skills/clarity-ui/
├── SKILL.md              # Rulebook: design rules, specs, self-expansion instructions
├── registry.json         # Dictionary: 27 components + 6 layouts + 5 patterns
├── components/           # 27 .tsx source files (copy-paste ready)
│   ├── data-table.tsx
│   ├── stat-card.tsx
│   ├── sidebar-nav.tsx
│   ├── tabs.tsx
│   ├── dropdown-menu.tsx
│   ├── progress-bar.tsx
│   ├── toggle.tsx
│   ├── tooltip.tsx
│   ├── avatar.tsx
│   └── ...18 more
├── layouts/              # 6 .tsx layout reference implementations
│   ├── app-shell.tsx
│   ├── dashboard.tsx
│   └── ...4 more
├── patterns/             # Responsive, density, dark mode, a11y, composition
├── tokens/               # 6 JSON design token files
└── palettes/             # 4 palette selection guides

starters/default/         # Pre-wired Next.js starter template
```

**How AI reads it:**
1. `SKILL.md` for design rules and philosophy
2. `registry.json` to find components by name or keyword tags
3. Individual `.tsx` files — only the ones needed for the current task
4. `.usage.md` companions for complex component guidance

## Live preview

The `preview/` directory contains a working Next.js app demonstrating every component:

```bash
cd preview
npm install
npm run dev
```

Visit http://localhost:3000 to see the design system in action.

## Palettes

| Palette | Vibe | Best for |
|---------|------|----------|
| **clarity-indigo** | Confident, trustworthy | Fintech, enterprise SaaS, CRM |
| **clarity-slate** | Minimal, engineering-grade | Dev tools, project management |
| **clarity-mono** | Technical, dark-first | Infrastructure, monitoring, CI/CD |
| **clarity-warm** | Approachable, collaborative | HR tech, knowledge bases, internal tools |

Tell Claude which palette to use: *"Use the clarity-slate palette"* — or let it default to indigo.

## Design principles

1. **Information density over whitespace** — 14px base font, compact tables, tight spacing
2. **Consistency over creativity** — Same sidebar, topbar, spacing, and radius on every page
3. **Borders over shadows** — 1px borders for elevation, shadows only for floating elements
4. **Neutral base, accent for action** — Color only for CTAs, status indicators, and charts
5. **6px border radius** — Professional, not playful

## Tech stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS v4 + CSS custom properties
- **Charts:** Recharts
- **Icons:** Lucide React
- **Fonts:** Inter (default), Geist Mono (code)
- **Primitives:** Radix UI (Select, Dialog, Slot, Popover, Tooltip, Switch)

## License

MIT

---

Built by [Maes9](https://github.com/Maes9)
