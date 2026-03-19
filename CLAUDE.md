# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Guia de Analisis** — a rigorous, self-study guide for real analysis and mathematical analysis written in Spanish, published as a VitePress static site served via Docker/Nginx.

All work is inside `real-analysis-guide/`. The detailed project specification, editorial rules, topic completion criteria, and work sequence live in `real-analysis-guide/AGENT.md` — read it before starting any content work.

## Commands

Run from `real-analysis-guide/`:

```bash
npm run docs:dev          # Dev server with HMR
npm run docs:build        # Build static site to docs/.vitepress/dist
npm run docs:preview      # Preview built site
npm run docs:check-math   # Validate LaTeX delimiters (must pass before committing)
```

Docker:
```bash
docker compose up --build          # Build and serve on port 31416
docker build -t guia-analisis-real .
docker run --rm -p 31416:80 guia-analisis-real
```

## Architecture

- **VitePress 1.6.3** + **markdown-it-mathjax3**: renders markdown + LaTeX
- **Dockerfile**: multi-stage — Node 20-alpine builds, Nginx 1.27-alpine serves
- Navigation/sidebar configured in `docs/.vitepress/config.mts`
- Content in `docs/analisis-real/` (Real Analysis) and `docs/analisis-matematico/` (Mathematical Analysis, in progress)

## Critical content rules

- **LaTeX must use `$...$` (inline) and `$$...$$` (block)** — never backticks. `npm run docs:check-math` enforces this.
- Two topic templates exist: **operational** (12 sections, 15 exercises + solutions) and **theoretical** (10 sections, example-heavy, no exercises). See `AGENT.md` for the full templates.
- A topic is only "closed" when: no placeholder text remains, all formulas render, `check-math` passes, proofs are logically correct, and (for operational topics) 15 exercises with solutions are present.
- Adding a new topic requires updating the sidebar in `docs/.vitepress/config.mts`.
- Do not start `Analisis Matematico` topics before finishing `Analisis Real`; do not leave topics half-written.
- Do not remove correct, validated content except to fix errors or unify methodology.

## Current status

**Analisis Real** is complete. **Analisis Matematico** is in progress.

Next topic to write: `docs/analisis-matematico/bolas-abiertas-metricos.md` (operational template — 15 exercises with complete solutions).

After that, the remaining sequence for Analisis Matematico: convergencia en metricos → Cauchy en metricos → completitud → topologia de espacios metricos → Baire → separabilidad/Lindelof → continuidad/homeomorfismos/isometrias → Bolzano-Weierstrass/Heine-Borel.

## Docker: replace running container

```bash
docker rm -f guia-analisis-real || true
docker run -d --name guia-analisis-real -p 31416:80 guia-analisis-real
```
