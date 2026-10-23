# Mustafa Bakrolwala — Terminal-Style Backend Portfolio

React + Vite + Tailwind CSS + Framer Motion. Pure black "developer console" theme with terminal-green accents.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

Press **Ctrl/Cmd + K** on the page to open the command palette.

## Customize

All content lives in `src/data/portfolio.js`. The resume download is served from `public/resume.pdf`.
Sections are registered in `src/data/sections.js` (drives the navbar and command palette).

## Structure

```
src/
  App.jsx                    boot loader + page layout
  index.css                  Tailwind + CRT scanlines + utility classes
  data/portfolio.js          all editable content
  data/sections.js           section ids, labels, icons
  hooks/useTypewriter.js     typing effect
  components/
    BootLoader.jsx           fake Linux boot sequence
    MatrixRain.jsx           falling-code canvas background
    CommandPalette.jsx       Ctrl+K quick navigation
    Navbar.jsx               prompt-style logo, scroll progress, active pill
    Hero.jsx                 typed roles + live "API response" panel
    About.jsx                summary terminal + animated metrics
    Skills.jsx               interactive file-explorer skill browser
    Architecture.jsx         animated request/job flow diagram
    Experience.jsx           log-style experience terminal
    Projects.jsx             spotlight cards with animated benchmark bars
    Education.jsx            animated CGPA ring
    Contact.jsx              shell-style contact + form
    Footer.jsx
    Reveal.jsx / SectionHeading.jsx / TerminalWindow.jsx / Highlight.jsx / Counter.jsx
```
# mustafa-portfolio
