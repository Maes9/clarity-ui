# clarity-ui

B2B SaaS design system skill for Claude Code. Generates production-grade dashboard interfaces with Stripe/Linear quality. Self-expanding — the component library grows with your project.

## Three-layer architecture

1. **SKILL.md** = Rulebook — design philosophy, rules, component specs, self-expansion instructions
2. **registry.json** = Dictionary — what components exist and where to find them
3. **.tsx files** = Implementation reference — pinned code the AI reads when building

**Stack:** Next.js 15 + React 19 + Tailwind CSS v4
**Install:** Copy `skills/clarity-ui/` to your project's `.claude/skills/clarity-ui/`

## Repository structure

- `skills/clarity-ui/` — The complete skill (copy this to your project)
- `starters/default/` — Starter template for new projects
- `preview/` — Live preview app (Next.js) demonstrating the design system

## Key files

- `skills/clarity-ui/SKILL.md` — Rulebook: design rules, component specs, self-expansion instructions
- `skills/clarity-ui/registry.json` — Component registry with names, tags, and file paths
- `skills/clarity-ui/components/` — 27 `.tsx` source files (copy-paste ready)
- `skills/clarity-ui/layouts/` — 6 `.tsx` layout reference implementations
- `skills/clarity-ui/tokens/` — JSON design tokens (source of truth for all values)
- `skills/clarity-ui/patterns/` — Cross-cutting guidance (responsive, density, dark mode, a11y, composition)
- `skills/clarity-ui/palettes/` — Color palette selection guides

## Starter template

```bash
cp -r starters/default my-new-project
cd my-new-project
npm install
npm run dev
```

The starter includes the app shell (sidebar + topbar), base UI components, and all design tokens pre-configured with the clarity-indigo palette.

## Preview app

```bash
cd preview
npm install
npm run dev
```

Opens at http://localhost:3000. Pages: Dashboard, Users, Settings, Billing, Login.

## Development

- Do not modify files in `skills/` without updating `SKILL.md` and `registry.json`
- Token JSON files in `skills/clarity-ui/tokens/` are the source of truth for all design values
- Component `.tsx` files in `skills/clarity-ui/components/` must be self-contained and copy-paste ready
- The preview app is a standalone demonstration — it does not import from the skills folder
- The starter template is self-contained — copy it entirely to start a new project
