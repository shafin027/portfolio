# Portfolio File Structure & Upload Guide

## Project Root
`/Users/shafin.mahamud/Documents/Claude/Portfolio/portfolio-main/portfolio-main/`

## Core Directories
```
portfolio-main/portfolio-main/
├── public/                      # Static assets (served at root URL)
│   ├── uploads/                 # User uploaded files
│   │   ├── projects/            # Project images (e.g., cattle-disease.png)
│   │   └── documents/          # PDFs, docs, etc.
│   └── Shafin_Mahamud_CV.md    # Your CV file
├── src/
│   ├── components/               # Reusable UI components
│   │   ├── Badge.tsx           # Tech stack badges
│   │   ├── Button.tsx           # Generic buttons
│   │   ├── ContactButton.tsx    # Hero section contact button
│   │   ├── FadeIn.tsx          # Scroll fade-in animation
│   │   ├── LiveProjectButton.tsx # Project demo button
│   │   ├── Magnet.tsx          # Magnetic portrait effect
│   │   ├── Navbar.tsx          # Top banner/navigation bar
│   │   └── ProjectCard.tsx     # Project card (unused alternate)
│   ├── sections/                # Page sections
│   │   ├── AboutSection.tsx    # About me section
│   │   ├── ContactSection.tsx  # Contact form/info
│   │   ├── EducationSection.tsx # Education history
│   │   ├── ExperienceSection.tsx # Work experience
│   │   ├── FooterSection.tsx   # Footer
│   │   ├── HeroSection.tsx     # Home page hero banner
│   │   ├── LeadershipSection.tsx # Leadership experience
│   │   ├── MarqueeSection.tsx  # Scrolling marquee
│   │   ├── ProjectsSection.tsx # Featured projects (updated)
│   │   └── SkillsSection.tsx   # Technical skills
│   ├── App.tsx                  # Main app component (fixed syntax)
│   ├── index.css                # Global styles
│   └── main.tsx                 # Entry point
├── package.json                  # Dependencies
└── vite.config.ts               # Vite configuration
```

## Upload Directory Details
| Directory | Purpose | Access Route |
|-----------|---------|--------------|
| `public/uploads/projects/` | Project screenshots/images | `http://localhost:5173/uploads/projects/filename.png` (dev) <br> `https://yourdomain.com/uploads/projects/filename.png` (prod) |
| `public/uploads/documents/` | PDFs, reports, docs | `http://localhost:5173/uploads/documents/filename.pdf` (dev) <br> `https://yourdomain.com/uploads/documents/filename.pdf` (prod) |

## How to Add Project Files
1. Place your project image in `public/uploads/projects/` (e.g., `cattle-disease.png`)
2. Update the `image` field in `src/sections/ProjectsSection.tsx` for the corresponding project:
   ```tsx
   image: '/uploads/projects/cattle-disease.png',
   ```
3. If you have a live demo URL, update the `liveUrl` field:
   ```tsx
   liveUrl: 'https://your-live-demo.com',
   ```
   - If `liveUrl` is empty, the "Live Project" button will link to the GitHub URL (`href` field)

## Removed Items
- ✅ Service section (`ServicesSection.tsx`) fully removed
- ✅ Hero section has no navigation links (all in Navbar/Banner)
- ✅ "Live Project" buttons now link to `liveUrl` (or GitHub URL if not provided)

## Run the App
```bash
cd /Users/shafin.mahamud/Documents/Claude/Portfolio/portfolio-main/portfolio-main
npm run dev
```
Access at: `http://localhost:5173`
