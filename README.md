# MaxLev — Portfolio

A bilingual, responsive portfolio for presenting engineering projects and technical explorations.

**Live site:** https://maxlevdev.github.io/maxlevdev/

## Direction

The portfolio presents a student developer interested in aerospace engineering and systems software. It focuses on the process behind each project: the engineering question, current implementation focus, and development stage.

## Featured work

- **ZenithEM** — C++ emulator and CPU execution-model exploration. In development.
- **AeroSim** — Browser-based aerospace simulation workspace. In development.
- **Event-driven TCP Server** — Linux networking experiment using epoll, non-blocking I/O, and per-client send queues.
- **C-MAPSS Prognostics** — Data-analysis exploration using NASA C-MAPSS turbofan simulation datasets FD001–FD004.

Project stages are intentionally explicit. A project marked as in development should not be interpreted as a completed or production-ready system. Public source and demo links will be added when the corresponding work is ready to share.

## Tech

- Semantic HTML
- Modern CSS (responsive layout, custom visual system, reduced-motion support)
- Vanilla JavaScript (Korean / English language toggle and scroll reveals)
- SVG artwork
- No framework, package manager, build step, or external runtime dependency

## Repository structure

    .
    ├── index.html
    ├── styles.css
    ├── script.js
    ├── favicon.svg
    ├── LICENSE
    └── README.md

## Local preview

Because this is a static site, it can be previewed with any static HTTP server. For example:

    python -m http.server 8000

Then open http://localhost:8000.

## GitHub Pages

The site is published from the repository root on the main branch. Relative asset paths (./styles.css, ./script.js, and ./favicon.svg) keep it compatible with the project-site base path:

https://maxlevdev.github.io/maxlevdev/

Push changes to main to trigger the GitHub Pages deployment.

---

Built and maintained by MaxLev.
