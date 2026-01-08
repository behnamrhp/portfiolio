# Persian Engineer Portfolio

A personal portfolio website with a Persian ancient book theme, built with Next.js, TypeScript, and Tailwind CSS.

## 🎨 Features

- **Ancient Book Design**: Persian manuscript-themed interface with page-turning animations
- **Responsive**: Adapts to all screen sizes (single page on mobile, double page on desktop)
- **Interactive**: Draggable skill logos, smooth page transitions, multiple navigation methods
- **SSG**: Statically generated for optimal performance
- **Accessible**: Keyboard navigation and screen reader support

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfiolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Download fonts:
   - Download [Cormorant](https://fonts.google.com/specimen/Cormorant) variable font
   - Download [EB Garamond](https://fonts.google.com/specimen/EB+Garamond) variable font
   - Place the `.ttf` files in `assets/fonts/`
   - Rename them to match:
     - `Cormorant-VariableFont_wght.ttf`
     - `EBGaramond-VariableFont_wght.ttf`

4. Set up environment variables:
```bash
cp .env.example .env
```
   - Add your dev.to API key to `.env`

5. Run the development server:
```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
portfiolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with font loading
│   ├── page.tsx           # Home page (cover)
│   └── globals.css        # Global styles
├── views/                 # UI components (Atomic Design)
│   ├── atoms/            # Basic components
│   ├── molecules/        # Compound components
│   ├── organisms/        # Complex components
│   ├── templates/        # Page templates
│   └── pages/            # Full page components
├── viewmodels/           # Custom hooks (UI logic)
├── models/               # Data fetching & business logic
├── input/                # Content & configuration
│   ├── dict.ts          # All copy/content
│   ├── constants.ts     # Constants (CV link, etc.)
│   ├── skills.ts        # Skills data
│   ├── projects.ts      # Projects data
│   └── types.ts         # TypeScript types
├── assets/              # Static assets
│   ├── fonts/          # Local fonts
│   └── images/         # Images and logos
└── docs/               # Documentation
    ├── prd.md          # Product requirements
    └── tasks/          # Task breakdown & planning
```

## 🎨 Architecture

- **Pattern**: MVVM (Model-View-ViewModel)
- **Component Structure**: Atomic Design
- **Styling**: Tailwind CSS with custom Persian palette
- **Type Safety**: Full TypeScript coverage

## 🎨 Color Palette

- **Aged Paper**: `#EFE3C6` - Main backgrounds
- **Night Ink**: `#1F1B17` - Text and details
- **Lapis Blue**: `#1F4E79` - Links and accents

## 📝 Content Management

All content is centralized in the `input/` directory:

- **Text content**: Edit `input/dict.ts`
- **Skills**: Update `input/skills.ts`
- **Projects**: Update `input/projects.ts`
- **Constants**: Update `input/constants.ts` (CV link, etc.)

## 🚀 Deployment

This project is configured for GitHub Pages deployment:

1. Update `next.config.js` if needed (base path)
2. Push to main branch
3. GitHub Actions will automatically build and deploy

Or build manually:
```bash
npm run build
```

The static files will be in the `out/` directory.

## 📖 Documentation

- **PRD**: See `docs/prd.md` for detailed requirements
- **Tasks**: See `docs/tasks/` for development phases and tasks
- **Quick Reference**: See `docs/tasks/quick-reference.md` for tech specs

## 🛠️ Development Tasks

See `docs/tasks/project-phases.md` for the complete task breakdown across 9 phases.

## 📄 License

This is a personal portfolio project.

## 👤 Author

Behnam Rahimpour - A Persian Engineer

