# Official DART Website

## Table of Contents

- [Overview](#overview)
- [Website Structure](#website-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started (For Developers)](#getting-started-for-developers)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Build for Production](#build-for-production)
- [Deployment](#deployment)
- [Updating Content (For Club Members)](#updating-content-for-club-members)
- [Important Notes for Non-Technical Updates](#important-notes-for-non-technical-updates)
- [Common Updates](#common-updates)
- [Adding a New Team Member](#adding-a-new-team-member)
- [Updating Robot Information](#updating-robot-information)
- [Adding a Sponsor](#adding-a-sponsor)
- [Updating About Content](#updating-about-content)
- [Changing Theme Colors](#changing-theme-colors)
- [Adding New Pages](#adding-new-pages)
- [Media and Assets](#media-and-assets)
- [Contact Information Updates](#contact-information-updates)
- [Social Media Links](#social-media-links)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

## Overview

This is the official website for **DART Robotics** (Destructive Arena Robotics Team), Virginia Tech's premier combat robotics team. Founded in 2022, DART specializes in designing, building, and competing with destructive robots.

The website serves as the primary online presence for the team, showcasing our robots, team members, sponsors, and providing information for prospective members and supporters.

## Website Structure

The website is built as a single-page application (SPA) using React and consists of the following main sections:

### Home Page (Landing)
- **Hero Section**: Features a banner image with the DART logo, tagline "Innovating through destruction – Virginia Tech's Combat Robotics Team", and overlay text.
- **About Preview**: Brief introduction to the team with a call-to-action to the full About page.
- **Robots Showcase**: Preview of our current robots with links to the full Robots page.
- **Founders Section**: Introduces the founding members (Trevor Ierardi and Nick Cowen) with their roles and photos.
- **Media Gallery**: Carousel featuring videos and images of robot battles and team activities.
- **Sponsors Section**: Display of current sponsors with links to the full Sponsors page.
- **Join Section**: Call-to-action for prospective members with contact email.

### About Page
Provides detailed information about:
- Team history and founding (2022)
- Mission: "Innovate through destruction"
- Focus areas: Mechanical, electrical, software engineering
- Culture: Learning-first environment, open to all experience levels
- Activities: Competitions, mentorship, hands-on learning
- Featured image of a team event

### Robots Page
Showcases the team's robot portfolio, including:
- **Storm Surge**: High-speed spinner bot for aggressive combat
- **Pinhead Larry**: Robust flipper robot for precision control
- **Eggbeater**: Compact vertical spinner for maneuverability
- **Be Careful**: Overhead saw bot with vertical cutting blade
- **Refuse**: Low-profile circular launcher
- **Goaline**: Triangular wedge spinner
- **Pickle Jar**: Compact drum-style spinner
- **CyclicalSubversion**: Ramp for controlled lifting and disruption

Each robot entry includes an image, type classification, and brief description.

### Team Page
Organized into several sections:
- **Team Leadership**: Current team leads and their roles
- **Engineering Team Leads**: Specialists for specific robot projects
- **Operations Team**: Programming, systems, community management, outreach
- **Web Development Team**: Maintainers of this website
- **Special Thanks**: Contributors and past helpers
- **Alumni**: Graduated members by year

Each team member card includes photo, name, role, and social links (LinkedIn, email where available).

### Sponsors Page
- **Hero Section**: Thank you message and sponsorship call-to-action
- **Sponsor Grid**: Current sponsors with logos and links to their websites
- **Contact Information**: Email template for sponsorship inquiries
- Current sponsors include Calders Coffee Cafe and Undergraduate Student Senate of Virginia Tech

## Features

- **Responsive Design**: Optimized for desktop and mobile viewing
- **Dark/Light Theme Toggle**: Accessible theme switching with custom color schemes
- **Smooth Scrolling and Animations**: Intersection Observer-based animations for engaging user experience
- **Social Media Integration**: Links to Instagram, Discord, LinkedIn, YouTube, and GobblerConnect
- **Contact Integration**: Direct email links for inquiries and sponsorships
- **SEO Optimization**: Generated sitemap for search engine indexing

## Technologies Used

- **Frontend Framework**: React 19
- **Routing**: React Router DOM v7
- **Build Tool**: Create React App
- **Styling**: Custom CSS with CSS Variables for theming
- **Deployment**: GitHub Pages
- **Version Control**: Git
- **Package Management**: npm

## Getting Started (For Developers)

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dart-vt/Official-DART-Website.git
   cd Official-DART-Website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   The website will be available at `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `build/` directory.

### Deployment

The website is configured for automatic deployment to GitHub Pages:

```bash
npm run deploy
```

This builds the project and pushes the `build/` folder to the `gh-pages` branch.

## Updating Content (For Club Members)

### Important Notes for Non-Technical Updates

- **Always work on a new branch**: Create a feature branch for changes to avoid disrupting the live site
- **Test locally**: Run `npm start` and check your changes before committing
- **Commit messages**: Use clear, descriptive commit messages
- **Images**: Ensure images are optimized (under 500KB) and in appropriate formats (JPG/PNG for photos, SVG for logos)
- **Backup**: Keep backups of important files before making changes

### Common Updates

#### Adding a New Team Member

1. Add their photo to `public/images/` (format: `First Last.png` or `.jpg`)
2. Edit `src/pages/Team.js`:
   - Add to the appropriate array (`teamLeadership`, `engineeringLeads`, `operationsLeads`, `webTeam`, etc.)
   - Include: `name`, `role`, `image` (path), `linkedin` (optional), `email` (optional)

#### Updating Robot Information

1. Add robot image to `public/images/` if needed
2. Edit `src/pages/Robots.js`:
   - Add new object to `robotList` array with `name`, `type`, `image`, `description`

#### Adding a Sponsor

1. Add sponsor logo to `public/images/` (preferably SVG or high-quality PNG)
2. Edit `src/pages/Sponsors.js`:
   - Add to `SPONSORS` array with `name`, `url`, `logo`, `tier`

#### Updating About Content

Edit `src/pages/About.js` to modify the text content and images.

#### Changing Theme Colors

Edit `src/pages/themes.json` to update color schemes for light and dark themes.

#### Adding New Pages

1. Create new component in `src/pages/`
2. Add route in `src/pages/Home.js` Routes component
3. Update `navigation.json` if it should appear in the main nav
4. Update `generate-sitemap.js` to include the new page

### Media and Assets

- **Images**: Store in `public/images/` for static assets, `src/assets/` for imported assets
- **Videos**: Place in `public/videos/` and reference via `process.env.PUBLIC_URL`
- **Icons**: Use SVG format in `public/icons/`

### Contact Information Updates

Update email addresses in:
- `src/pages/Home.js` (Footer component)
- `src/pages/Sponsors.js` (sponsorship email)
- `src/pages/Land.js` (join section email)

### Social Media Links

Update social links in the Footer component in `src/pages/Home.js`.

## File Structure

```
Official-DART-Website/
├── public/                 # Static assets
│   ├── images/            # Photos and graphics
│   ├── icons/             # SVG icons
│   ├── videos/            # Video files
│   └── index.html         # HTML template
├── src/
│   ├── assets/            # Imported media
│   ├── pages/             # React components
│   │   ├── Home.js        # Main app component
│   │   ├── Land.js        # Landing page
│   │   ├── About.js       # About page
│   │   ├── Team.js        # Team page
│   │   ├── Robots.js      # Robots page
│   │   ├── Sponsors.js    # Sponsors page
│   │   ├── *.css          # Component styles
│   │   ├── navigation.json # Navigation config
│   │   └── themes.json    # Theme colors
│   ├── utils/
│   │   └── useTheme.js    # Theme hook
│   └── index.js           # App entry point
├── docs/                  # Build output for GitHub Pages
├── package.json           # Dependencies and scripts
└── generate-sitemap.js    # Sitemap generator
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Make your changes
4. Test locally (`npm start`)
5. Commit your changes (`git commit -m 'Add new feature'`)
6. Push to the branch (`git push origin feature/new-feature`)
7. Open a Pull Request

## Support

For questions or issues:
- **Technical Issues**: Contact the Web Development Team
- **Content Updates**: Reach out to Operations Team
- **General Inquiries**: Email nickolasc24@vt.edu

## License

This project is maintained by DART Robotics and is available for use by the team and its members.
