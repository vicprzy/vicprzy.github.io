# Personal Portfolio Website - Template Guide

## Overview

This is a fully functional, modern personal portfolio website built with React, TypeScript, and Tailwind CSS. It features 5 distinct pages with unique interactive layouts, a cohesive color scheme, and smooth animations.

## Design Philosophy: Modern Minimalist with Warm Accents

The website uses a carefully curated color palette and typography system to create a professional yet approachable aesthetic:

### Color Palette
- **Tangerine Dream** (#F79F79) - Warm accent for hover states and highlights
- **Tropical Teal** (#38A3A5) - Primary action color and secondary accents
- **Blue State** (#495867) - Primary text color for readability
- **Alice Blue** (#EDF6F9) - Soft background color
- **Dark Garnet** (#69140E) - Emphasis and destructive actions
- **White** (#FFFFFF) - Card and container backgrounds
- **Black** (#000000) - Strong contrast when needed

### Typography System
- **Display Font**: Playfair Display (serif) - Used for all headings (h1-h6)
- **Body Font**: Lato (sans-serif) - Used for all body text and descriptions
- **Navigation Font**: Montserrat (sans-serif, semi-bold) - Used for navigation and labels

## Page Structure

### 1. Home Page (`/`)
**Purpose**: Introduction and main entry point

**Features**:
- Hero section with bio and introduction
- Quick links to social profiles (GitHub, LinkedIn, Twitter)
- CV download button (opens PDF in new tab)
- Photo placeholder with mouse-tracking parallax effect
- Three info cards highlighting Research, Projects, and Hobbies

**Customization**:
- Edit bio text in the hero section
- Replace social media links with your actual profiles
- Update the CV PDF path (currently `/cv.pdf`)
- Replace photo placeholder with your actual image

### 2. Research Page (`/research`)
**Purpose**: Showcase research projects with academic presentation

**Layout**:
- Full-width section headers with project titles and years
- Two-column layout: 25% left (images), 75% right (descriptions)
- Images arranged in a flowchart-style vertical layout
- Project descriptions with keywords and links

**Features**:
- 4 research projects (template data included)
- Keyword badges for quick topic identification
- Links to papers, GitHub repositories, and related resources
- Subtle flowchart connectors between projects

**Customization**:
- Edit project data in the `projects` array
- Add/remove projects by modifying the array length
- Update image URLs (currently using placeholder.com)
- Replace project descriptions with your actual research
- Update links to point to real resources

### 3. Hacking Page (`/hacking`)
**Purpose**: Display personal projects in an interactive post-it wall format

**Layout**:
- Masonry grid of post-it style cards
- Each card has slight rotation for visual interest
- Click any card to expand and view full details in a modal

**Features**:
- 5 personal projects (template data included)
- Post-it cards with project name, short description, and keywords
- Interactive modal with:
  - Full project description
  - Project images (gallery grid)
  - Technologies used
  - Keywords
  - External links
- Smooth animations and transitions

**Customization**:
- Edit project data in the `projects` array
- Update project names, descriptions, and images
- Add/remove technologies and keywords
- Update links to live demos and GitHub repositories
- Adjust the number of projects by modifying the array

### 4. Press Page (`/press`)
**Purpose**: Showcase media appearances and interviews

**Layout**:
- Centered layout with embedded YouTube videos
- Video title, date, and channel information
- Short description below each video
- Call-to-action for media inquiries

**Features**:
- Embedded YouTube player (responsive)
- 1 press video (template included)
- Links to watch on YouTube
- Media inquiry contact button

**Customization**:
- Replace YouTube video ID with your actual video ID
- Update video title, description, date, and channel
- Add more videos by extending the `videos` array
- Update the media inquiry email address

### 5. Side-Quests Page (`/side-quests`)
**Purpose**: Showcase hobbies and personal interests

**Layout**:
- Similar to Research page but with expandable sections
- 25% left (images), 50% middle (short description), 20% right (expand button)
- Click arrow button to expand and show full details

**Features**:
- 4 side-quests/hobbies (template data included)
- Short descriptions with keyword badges
- Expandable sections with:
  - Full description
  - Gallery of images
  - Personal reflection on the hobby
- Smooth expand/collapse animations

**Customization**:
- Edit hobby data in the `sideQuests` array
- Update titles, descriptions, and images
- Add your personal reflections
- Adjust the number of hobbies by modifying the array

## Navigation

The navigation bar is fixed at the top of every page and includes:
- Portfolio name/logo (links to home)
- Links to all 5 pages
- Active page indicator (underline with Tangerine Dream color)
- Smooth hover transitions

**Customization**:
- Edit portfolio name in `Navigation.tsx`
- Add/remove navigation links by modifying the `navLinks` array

## Styling & Customization

### Global Styles
All global styles are defined in `client/src/index.css`:
- CSS variables for colors
- Typography system
- Custom utility classes
- Responsive design tokens

### Custom Utility Classes
- `.font-display` - Apply Playfair Display font
- `.font-body` - Apply Lato font
- `.font-nav` - Apply Montserrat font
- `.gradient-accent` - Apply gradient background
- `.text-accent-warm` - Tangerine Dream text color
- `.text-accent-cool` - Tropical Teal text color
- `.smooth-transition` - 200ms ease-out transition
- `.smooth-transition-lg` - 300ms ease-out transition
- `.shadow-soft` - Subtle shadow
- `.shadow-medium` - Medium shadow
- `.hover-lift` - Lift effect on hover

### Responsive Design
The website is fully responsive with breakpoints at:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Image Handling

**Important**: The website uses placeholder images from `placeholder.com`. For production:

1. Replace all placeholder URLs with your actual images
2. Store images in `/home/ubuntu/webdev-static-assets/` (outside the project)
3. Upload images using: `manus-upload-file --webdev path/to/image.png`
4. Use the returned CDN URL in your code

Example:
```tsx
// Before (placeholder)
src="https://via.placeholder.com/200x150?text=Image"

// After (CDN)
src="https://cdn.example.com/your-image.png"
```

## CV/Resume

The CV is stored as a PDF at `/public/cv.pdf`. To update:

1. Edit the markdown source at `/public/cv.md`
2. Convert to PDF using: `manus-md-to-pdf cv.md cv.pdf`
3. The PDF will be served at `/cv.pdf` and open in a new tab when clicked

## Development

### Local Development
```bash
npm run dev
```
Starts the development server at `http://localhost:3000`

### Build
```bash
npm run build
```
Creates an optimized production build

### Type Checking
```bash
npm run check
```
Runs TypeScript type checking

## Deployment

This website is ready for GitHub Pages deployment. The static build will be generated and can be hosted on any static hosting service.

### For GitHub Pages:
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your GitHub Pages repository
3. Update the base URL in Vite config if needed

## Browser Support

The website supports all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Considerations

- Lazy-loaded images for better performance
- Optimized CSS with Tailwind purging
- Minimal JavaScript for fast page loads
- Smooth animations using CSS transforms
- Responsive images for different screen sizes

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Sufficient color contrast for readability
- Focus indicators on interactive elements

## File Structure

```
client/
├── public/
│   ├── cv.pdf          # Your CV (PDF)
│   ├── cv.md           # CV source (markdown)
│   └── favicon.ico     # Website favicon
├── src/
│   ├── components/
│   │   └── Navigation.tsx    # Shared navigation bar
│   ├── pages/
│   │   ├── Home.tsx          # Home page
│   │   ├── Research.tsx      # Research projects
│   │   ├── Hacking.tsx       # Personal projects
│   │   ├── Press.tsx         # Press/media
│   │   ├── SideQuests.tsx    # Hobbies
│   │   └── NotFound.tsx      # 404 page
│   ├── App.tsx               # Main app with routing
│   ├── main.tsx              # React entry point
│   └── index.css             # Global styles
└── index.html                # HTML template
```

## Next Steps

1. **Customize Content**: Replace all template data with your actual information
2. **Add Images**: Upload your photos and update image URLs
3. **Update Links**: Replace social media and project links with your actual URLs
4. **Refine Colors**: Adjust the color palette in `index.css` if desired
5. **Deploy**: Build and deploy to your hosting platform

## Support & Customization

This template is designed to be easily customizable. All data is stored in component files for easy editing. If you need to:

- Add more projects: Extend the data arrays in each page component
- Change colors: Update CSS variables in `index.css`
- Modify layouts: Edit the grid and flex classes in page components
- Add new pages: Create a new component in `pages/` and add a route in `App.tsx`

## License

This template is provided as-is for your personal use. Feel free to customize and deploy!

---

**Last Updated**: March 2026
**Template Version**: 1.0.0
