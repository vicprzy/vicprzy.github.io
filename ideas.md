# Personal Website Design Brainstorm

## Design Approach 1: Modern Minimalist with Warm Accents
**Probability: 0.08**

**Design Movement:** Contemporary Minimalism with Humanist Touches

**Core Principles:**
- Clean, breathing layouts with generous whitespace
- Warm color palette creates approachability despite minimal aesthetic
- Content-first hierarchy—design supports rather than dominates
- Subtle micro-interactions that feel natural and responsive

**Color Philosophy:**
The warm oranges (Tangerine Dream #F79F79) and teals (Tropical Teal #38A3A5) create a welcoming, energetic feel. The palette balances warmth with sophistication through the cooler blues (Blue State #495867) and the light Alice Blue background. This combination feels modern yet personal—not cold or corporate.

**Layout Paradigm:**
Asymmetric grid with left-aligned content blocks. Research and Side-Quests pages use a two-column layout where the left column (images/flowchart) is narrower and more visual, while the right column (text) is wider and breathing. Navigation is fixed and minimal at the top. Hacking projects use a masonry-inspired post-it wall that breaks the rigid grid.

**Signature Elements:**
1. Warm gradient accents on hover states and section dividers
2. Subtle drop shadows and depth on interactive elements
3. Custom SVG dividers between sections with organic curves

**Interaction Philosophy:**
Smooth transitions on all interactive elements. Hover states use the Tangerine Dream color to highlight. Post-it wall items scale and lift slightly on hover. Modal pop-outs use a fade-in with scale animation.

**Animation:**
- Hover effects: 200ms ease-out transitions on color and transform
- Page transitions: Fade-in with 300ms duration
- Post-it click: Scale from 1 to 1.05 with shadow depth increase
- Mouse tracking: Smooth, subtle parallax effect on hero section
- Modal open: Fade background, scale content from center with spring easing

**Typography System:**
- Display: "Playfair Display" (serif, bold) for page titles and section headers—brings elegance and personality
- Body: "Lato" (sans-serif, regular/light) for descriptions and content—highly readable and modern
- Accent: "Montserrat" (sans-serif, semi-bold) for navigation and labels—geometric and contemporary

---

## Design Approach 2: Academic Research Aesthetic with Bold Branding
**Probability: 0.09**

**Design Movement:** Contemporary Academic Design with Playful Energy

**Core Principles:**
- Typography-driven hierarchy inspired by research papers and academic journals
- Bold use of the custom color palette to establish strong visual identity
- Structured grid system with clear information hierarchy
- Playful elements (post-it wall, arrow buttons) contrast with formal sections

**Color Philosophy:**
The Dark Garnet (#69140E) and Blue State (#495867) establish authority and credibility, while Tangerine Dream (#F79F79) and Tropical Teal (#38A3A5) inject energy and personality. This creates a "serious but approachable" tone—academic rigor with human warmth.

**Layout Paradigm:**
Research and Side-Quests pages follow a strict two-column layout resembling academic papers. Hacking page breaks this formality with a playful post-it wall. Navigation uses a bold bar with custom branding. Each section has a full-width header with the project title and metadata.

**Signature Elements:**
1. Bold color blocks and section dividers
2. Numbered or labeled project sections
3. Custom badge system for project tags and keywords
4. Research paper-style citations and links

**Interaction Philosophy:**
Interactive elements feel purposeful and responsive. Post-it items have a tactile feel—they "stick" to the wall and respond to clicks with satisfying animations. Buttons use the Tangerine Dream color for clear call-to-action.

**Animation:**
- Section headers: Slide in from left with 400ms duration
- Post-it wall: Items stagger-animate on page load (50ms delay between each)
- Hover effects: Color shift to Tangerine Dream with 150ms transition
- Modal: Slide up from bottom with bounce easing
- Arrow button: Rotate 90 degrees on click, then expand section

**Typography System:**
- Display: "IBM Plex Serif" (serif, bold) for headers—academic and authoritative
- Body: "IBM Plex Sans" (sans-serif, regular) for content—professional and readable
- Accent: "Roboto Mono" (monospace) for tags and metadata—technical and precise

---

## Design Approach 3: Creative Portfolio with Artistic Flair
**Probability: 0.07**

**Design Movement:** Contemporary Art Direction with Playful Experimentation

**Core Principles:**
- Asymmetric, unconventional layouts that break traditional grid systems
- Rich use of color and texture to create visual interest
- Each page has a distinct personality while maintaining cohesion
- Emphasis on visual storytelling and artistic expression

**Color Philosophy:**
The palette is used boldly and expressively. Tangerine Dream and Tropical Teal are primary accent colors that appear in unexpected places. Dark Garnet creates dramatic contrast. Alice Blue serves as a calm breathing space. This approach treats color as a design element, not just a utility.

**Layout Paradigm:**
Research page uses a diagonal or staggered layout where images and text overlap. Side-Quests page features a timeline-like structure with alternating left-right content. Hacking page is a true artistic grid with varying post-it sizes. Navigation is integrated into the design, not separate.

**Signature Elements:**
1. Overlapping images and text with semi-transparent backgrounds
2. Diagonal or curved section dividers
3. Custom illustrations and artistic flourishes
4. Variable-sized project cards and sections

**Interaction Philosophy:**
Interactions feel playful and surprising. Hover states reveal hidden information. Post-it items have varied rotations and depths. Clicking opens immersive modal experiences with rich animations.

**Animation:**
- Page load: Staggered entrance of elements with varying durations
- Hover effects: Rotation, scale, and color shifts combined
- Post-it wall: Items have slight random rotations, scale on hover
- Modal: Zoom in from the clicked element with parallax background
- Scroll effects: Parallax images, text reveal animations

**Typography System:**
- Display: "Fredoka" (sans-serif, bold) for headers—friendly and contemporary
- Body: "Outfit" (sans-serif, regular) for content—geometric and modern
- Accent: "Courier Prime" (monospace) for technical details—retro and playful

---

## Selected Design Approach: Modern Minimalist with Warm Accents

I am proceeding with **Design Approach 1: Modern Minimalist with Warm Accents** because it best balances your portfolio's need to showcase diverse work (research, projects, hobbies) with a cohesive, professional aesthetic. The warm color palette creates a personal, approachable feel while maintaining sophistication. The asymmetric layouts will make each section type distinct and memorable, and the subtle interactions will feel polished without being distracting.

**Key Design Decisions for Implementation:**
- Fixed minimal navigation bar with your name/logo on the left, tab links on the right
- Research and Side-Quests pages: Two-column layout (25% left for images, 75% right for content)
- Hacking page: Masonry post-it wall with modal pop-outs
- Press page: Centered video with description below
- Home page: Hero section with bio, links, CV button, photo, and mouse-tracking parallax effect
- Typography: Playfair Display for titles, Lato for body, Montserrat for navigation
- Color usage: Alice Blue (#EDF6F9) as primary background, Tangerine Dream (#F79F79) for hover/accent states, Tropical Teal (#38A3A5) for secondary accents, Blue State (#495867) for text, Dark Garnet (#69140E) for emphasis
- Animations: Smooth 200-300ms transitions, fade-in page loads, scale/lift on hover, spring easing for modals
