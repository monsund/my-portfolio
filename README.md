# 🌟 Monsoon.dev - Personal Portfolio

A modern, responsive portfolio website showcasing work experience, travel journeys, and personal projects. Built with Next.js 15, React 19, and Material-UI 7.

## 🚀 Features

- **🏠 Home Page**: Hero section with gradient animations and project highlights
- **👨‍💻 About Page**: Personal introduction, skills, and recent work highlights
- **💼 Work Experience**: Featured case studies including:
  - StockPilot — AI Trading Agent (MCP + SLM)
  - Pendo — Property Management Platform
  - Panasonic BatteryOps — Workflow Streamlining Platform
- **🌍 Travel Gallery**: Region-based photo galleries from 10+ countries
- **📱 Responsive Design**: Mobile-first approach with smooth animations

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.4 with App Router
- **Frontend**: React 19.1.0 + TypeScript 5
- **UI Library**: Material-UI 7.3.2 (@mui/material)
- **Icons**: Material-UI Icons (@mui/icons-material)
- **Styling**: Emotion (CSS-in-JS)
- **Code Quality**: ESLint 9 + Prettier
- **Deployment**: Optimized for Vercel

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/monsund/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── about/page.tsx       # About page with skills & experience
│   ├── work/page.tsx        # Work experience & case studies
│   ├── travel/page.tsx      # Travel gallery by regions
│   └── page.tsx             # Home page
├── components/              # Reusable React components
│   ├── Hero.tsx            # Hero section with animations
│   ├── Nav.tsx             # Navigation with active states
│   ├── Section.tsx         # Section wrapper component
│   ├── ExploreRows.tsx     # Project showcase cards
│   └── work/               # Work-specific components
├── lib/                    # Utilities and types
└── content/               # Content data files
```

## 🎨 Key Components

### Hero Section

- Gradient text animations
- Responsive typography
- Call-to-action buttons

### Work Experience

- **StockPilot**: AI trading agent with MCP integration
- **Pendo**: Full-stack property management platform
- **BatteryOps**: Micro-UI architecture with Module Federation

### Travel Gallery

- **Europe**: Austria, Belgium, Czech Republic, France, Germany, etc.
- **Kazakhstan**: Central Asian cultural experiences
- **India**: Himalayan and Northeast regional adventures
- **Vietnam**: Southeast Asian cultural immersion

## 📋 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format with Prettier
npm run format:check # Check Prettier formatting
npm run type-check   # TypeScript type checking
```

## 🌐 Pages & Routes

- `/` - Home page with hero and project overview
- `/about` - About page with personal intro and skills
- `/work` - Work experience and case studies
- `/travel` - Travel photo gallery by regions
- `/work/[slug]` - Individual work case study pages
- `/travel/[slug]` - Individual travel story pages

## 🎨 Design System

- **Colors**: Light blue theme with gradient accents
- **Typography**: Material-UI typography scale
- **Spacing**: Consistent 8px grid system
- **Animations**: Subtle hover effects and transitions
- **Responsive**: Mobile-first with breakpoints at sm, md, lg

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for any environment-specific configuration:

```bash
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### ESLint & Prettier

The project includes pre-configured ESLint and Prettier setups:

- ESLint 9 with Next.js configuration
- Prettier integration for consistent formatting
- VS Code settings for real-time error highlighting

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Manual Build

```bash
npm run build
npm run start
```

## 📧 Contact

- **Email**: monsoon.dibragede@gmail.com
- **LinkedIn**: [Monsoon Dibragede](https://www.linkedin.com/in/monsoon-dibragede-22077149/)
- **GitHub**: [monsund](https://github.com/monsund)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js, React, and Material-UI
