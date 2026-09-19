# ARC CODING AGENT Website Plan

## Goal
Build a production-ready, multi-page ACA experience that feels like an anime AI agent inside an onchain command center, while clearly presenting ACA as an independent community project.

## Site structure
- **Home** — cinematic hero, animated boot terminal, HUD status, ACA story, intent-to-onchain flow, interactive six-step process, mini build simulation, Arc inspiration, roadmap, FAQ, community, and final CTA.
- **Agent** — expanded ACA character presentation and the Intent → Code → Contract → Test → Deploy → Execute system.
- **Terminal** — usable simulated command interface with the requested harmless command set and clear simulation labeling.
- **Lore** — cinematic origin narrative plus proof/source cards linking only to verified official public materials.
- **Token** — terminal-style $ACA information with contract and unavailable data shown as “COMING SOON” or “NOT ANNOUNCED.”
- **Docs** — terminal documentation layout with sidebar, breadcrumbs, Overview, Concept, Agent, Architecture, How It Works, Token, FAQ, and Disclaimer.

## Visual system
- Deep black/navy surfaces, electric blue and ice-blue accents, restrained violet, bright accessible text, strong glow used selectively.
- Space Grotesk/Rajdhani-style display typography with JetBrains Mono terminal typography.
- Layered grid, scan lines, tiny particles, HUD marks, and subtle parallax without heavy particle libraries.
- Supplied ACA banner anchors the cinematic hero; supplied transparent ACA logo appears in navigation, hero branding, terminal avatar, loading screen, and footer.
- Original uploads remain raster images in `public/assets`; favicon and Apple touch icon are derived only by resizing the original logo.

## Interaction and motion
- Framer Motion loading sequence with an explicit “ENTER SYSTEM” action; the choice is remembered for the browsing session.
- Typed hero initialization, blinking cursor, status pulses, scanning highlights, restrained section reveals, and reduced-motion fallbacks.
- Clickable process steps update a synchronized terminal readout.
- Interactive build demo progresses through intent, architecture, contract, application, and tests, then reports “BUILD READY” as a simulation.
- Desktop-only blue HUD cursor; standard cursor retained for touch and reduced-motion users.
- Sticky glass navigation and an accessible animated mobile menu.

## Content, safety, and links
- Preserve the supplied wording and the required non-affiliation disclaimer throughout relevant pages.
- BUY $ACA and VIEW CHART open `https://argus.world` safely in a new tab.
- X is driven by one configurable `X_URL`; until a real profile is supplied, the control is visibly unavailable rather than inventing a username.
- No fabricated contract, supply, tax, liquidity, holders, market cap, listings, partnerships, deployment results, or blockchain activity.
- Official proof links will be verified before inclusion; unverified claims will not be added.

## Technical implementation
- Use the project’s supported React 19 + TanStack Start stack (the functional equivalent of the requested Next.js route architecture here), TypeScript, Tailwind CSS v4, Motion, and Lucide.
- Build shared navigation/footer/layout components and focused feature components for terminal, build demo, process timeline, HUD, and loading screen.
- Add unique metadata to every content route, including the supplied titles/descriptions and absolute preview image URLs backed by the uploaded banner/logo.
- Keep semantic color, shadow, typography, and animation tokens centralized in the global design system.

## Accessibility and validation
- Semantic landmarks, one main region, keyboard navigation, labeled controls, visible focus states, sufficient contrast, useful alt text, and 44px mobile targets.
- Prevent horizontal overflow and create dedicated mobile arrangements for hero, terminal, docs, and navigation.
- Validate desktop and mobile rendering, terminal commands, menus, external links, loading flow, console errors, and metadata.
