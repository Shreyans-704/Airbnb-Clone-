PHASE 2 — PHOTO TOUR IMPLEMENTATION
====================================

PROJECT:
Airbnb desktop listing clone

CURRENT STATUS:
Phase 1 is COMPLETE and has passed manual visual inspection.

The listing page is currently working correctly at:
http://localhost:5173/

DO NOT BREAK PHASE 1.

The current project structure is:

airbnb-clone/
└── airbnb-listing/
    ├── package.json
    ├── src/
    ├── screenshots/
    └── ...

IMPORTANT:
The reference website URL must NOT be accessed or scraped.

The reference website may block automated access and we must not use
website-to-code cloning, source extraction, scraping, DevTools extraction,
source maps, copied CSS, copied JavaScript, or any other lift-and-shift
technique.

Use the provided reference screenshots and the visual/behavioral
requirements below as the specification.

--------------------------------------------------
GOAL
--------------------------------------------------

Implement/refine PHASE 2 only:

PHOTO TOUR

When the user clicks:

"Show all photos"

on the main hero gallery, the application should transition from the
listing page into a dedicated Airbnb-style Photo Tour view.

This should feel like a natural continuation of the listing page and
should closely reproduce the desktop Airbnb photo-tour experience.

DO NOT implement Phase 3 Lightbox behavior yet.

--------------------------------------------------
FIRST: INSPECT EXISTING IMPLEMENTATION
--------------------------------------------------

Before changing anything:

1. Inspect the existing:
   - PhotoTour.jsx
   - PhotoTour.css
   - HeroGallery.jsx
   - HeroGallery.css
   - App.jsx
   - routing/navigation setup
   - image/data definitions
   - existing Lightbox.jsx

2. Determine exactly what already exists.

3. Reuse good existing code where appropriate.

4. Refactor rather than creating duplicate components.

5. DO NOT delete working Phase 1 functionality.

6. DO NOT implement the Lightbox in this phase even if a Lightbox
   component already exists.

If Lightbox code is already present, leave it isolated for Phase 3.

--------------------------------------------------
PHOTO TOUR ENTRY
--------------------------------------------------

Clicking:

"Show all photos"

must open the Photo Tour.

The transition must be intentional and reliable.

The Photo Tour should have a clear way to return to the listing page.

Use React state/routing/navigation appropriately for the existing
application architecture.

Do NOT add a backend.

Do NOT add authentication.

Do NOT add a database.

--------------------------------------------------
PHOTO TOUR DESKTOP LAYOUT
--------------------------------------------------

Target viewport:

1890 × 870

Desktop only.

Build a dedicated full-page photo browsing experience.

The layout should contain:

1. TOP BAR
2. BACK/CLOSE NAVIGATION
3. PHOTO GRID
4. IMAGE COUNTER / CONTEXT
5. PROPER SPACING
6. SCROLLABLE PHOTO TOUR CONTENT

--------------------------------------------------
TOP BAR
--------------------------------------------------

Create a clean Airbnb-style top bar.

It should visually belong to the same application as the listing page.

Include:

- Airbnb branding/logo area
- clear back/close control
- appropriate spacing
- clean white background
- subtle separation from content where appropriate

The return control must be keyboard accessible.

Example behavior:

← Back to listing

The exact visual treatment should be determined from the existing
application style and provided reference material.

Do not invent unnecessary UI.

--------------------------------------------------
PHOTO TOUR GRID
--------------------------------------------------

Display the property's complete photo collection in a clean responsive
grid.

The photo data must be centralized rather than hard-coded repeatedly
inside JSX.

Use the existing property image data if already available.

Each image should:

- preserve its intended aspect ratio
- use object-fit appropriately
- have consistent spacing
- have rounded corners where appropriate
- avoid distortion
- load efficiently
- have meaningful alt text

The grid should look polished and intentional rather than like a generic
CSS gallery.

Prioritize visual similarity to the Airbnb-style reference.

--------------------------------------------------
IMAGE INTERACTION
--------------------------------------------------

PHASE 2 ONLY:

Clicking an individual photo may visually indicate that the image is
interactive, but DO NOT build the full-screen Lightbox yet.

Do NOT implement:

- fullscreen image viewer
- previous/next image controls
- keyboard arrow navigation
- image zoom
- dark fullscreen overlay
- image slideshow

Those belong to PHASE 3.

If the existing application currently opens a Lightbox when clicking an
image, temporarily isolate/disable that behavior for this phase without
breaking the existing component.

--------------------------------------------------
PHOTO COUNT
--------------------------------------------------

Provide appropriate photo-tour context such as:

"Photos"

and/or

"1 of X"

ONLY where it makes sense based on the provided design/reference.

Do not clutter the interface.

--------------------------------------------------
SCROLLING
--------------------------------------------------

The Photo Tour must support normal vertical scrolling.

The top navigation should remain usable while scrolling if that matches
the intended design.

Do not introduce horizontal page overflow.

Verify:

- no accidental horizontal scrollbar
- no clipped images
- no content hidden behind fixed elements
- smooth vertical scrolling
- correct behavior at 1890 × 870

--------------------------------------------------
VISUAL DESIGN
--------------------------------------------------

Match the existing Phase 1 visual system:

- typography
- font weights
- spacing
- border radii
- icon style
- colors
- buttons
- navigation
- overall Airbnb-inspired visual language

Do NOT introduce a completely different design system.

Use the same design tokens/CSS variables where they already exist.

Prefer Lucide icons or existing project icons rather than emoji.

Do not use emoji as UI icons.

--------------------------------------------------
RESPONSIVE BEHAVIOR
--------------------------------------------------

Desktop is the primary target.

However, ensure the layout doesn't catastrophically break at smaller
widths.

At minimum:

- desktop
- tablet
- mobile

The desktop 1890 × 870 layout receives the highest visual priority.

--------------------------------------------------
ACCESSIBILITY
--------------------------------------------------

Implement proper accessibility:

- semantic buttons
- keyboard-accessible back button
- visible focus states
- meaningful image alt text
- appropriate aria-labels
- logical tab order
- no keyboard traps
- sufficient contrast

Do not sacrifice visual fidelity for unnecessary accessibility UI.

--------------------------------------------------
CODE QUALITY
--------------------------------------------------

Keep the implementation maintainable.

Preferred structure:

PhotoTour
├── PhotoTourHeader
├── PhotoGrid
└── PhotoItem

Only create additional components if they provide real value.

Use:

- React
- existing project TypeScript/JavaScript conventions
- existing CSS architecture
- existing icon library
- existing image data

Do not introduce a new framework.

Do not introduce a backend.

Do not add unnecessary dependencies.

--------------------------------------------------
STATE / NAVIGATION
--------------------------------------------------

The following flow must work:

LISTING PAGE
     ↓
Click "Show all photos"
     ↓
PHOTO TOUR
     ↓
Click "Back"
     ↓
LISTING PAGE

The listing page must preserve its existing state as much as practical.

Do not cause a full application reload unnecessarily.

Do not break the existing sticky navigation, booking card, amenities
modal, calendar, reviews, or other Phase 1 functionality.

--------------------------------------------------
VISUAL QA
--------------------------------------------------

After implementation:

1. Start the Vite development server.

2. Open the application using Brave/Chromium.

3. Set viewport to exactly:

1890 × 870

4. Navigate to the listing page.

5. Capture the initial listing page.

6. Click "Show all photos".

7. Capture the Photo Tour at the initial scroll position.

8. Scroll through the Photo Tour.

9. Capture at least:
   - Photo Tour top
   - Photo Tour middle
   - Photo Tour lower section

10. Test the Back control.

11. Verify that the listing page returns correctly.

12. Check browser console for errors.

13. Check for:
   - horizontal overflow
   - broken images
   - layout shifts
   - incorrect spacing
   - clipped content
   - incorrect z-index
   - broken navigation
   - accidental Lightbox activation

--------------------------------------------------
VISUAL QA FILES
--------------------------------------------------

Save screenshots inside:

screenshots/

Use clear names such as:

phase2_photo_tour_top.png
phase2_photo_tour_middle.png
phase2_photo_tour_bottom.png
phase2_photo_tour_return.png

Create:

.ai/visual-qa/phase-2-visual-qa.md

The report should document:

- viewport
- screenshots captured
- interactions tested
- visual observations
- known differences
- any remaining limitations

--------------------------------------------------
BUILD / LINT
--------------------------------------------------

Before declaring Phase 2 complete, run:

npm run build

and:

npm run lint

Both must complete successfully.

Fix all errors.

Do not leave avoidable warnings.

--------------------------------------------------
IMPORTANT PHASE BOUNDARY
--------------------------------------------------

THIS IS PHASE 2 ONLY.

DO NOT IMPLEMENT PHASE 3.

Specifically DO NOT add:

- Lightbox
- fullscreen image viewer
- image zoom
- previous/next photo navigation
- keyboard arrow navigation
- fullscreen dark overlay
- slideshow

Even if these are easy to implement.

We will handle them separately in Phase 3.

--------------------------------------------------
ORIGINALITY REQUIREMENT
--------------------------------------------------

The implementation must be independently written.

Do not:

- scrape the reference website
- download its source code
- extract its CSS
- extract its JavaScript
- inspect source maps
- copy DOM structure from the reference
- use website-to-code generators against the reference URL
- copy proprietary Airbnb implementation

Use the screenshots and requirements as a visual/behavioral specification
and implement the interface from scratch.

--------------------------------------------------
FINAL PHASE GATE
--------------------------------------------------

At the end, report:

1. Files created/modified
2. Photo Tour functionality implemented
3. Back navigation behavior
4. Lightbox status — MUST remain unimplemented
5. Responsive behavior
6. Accessibility checks
7. Build result
8. Lint result
9. Visual QA screenshots created
10. Known visual differences

DO NOT automatically proceed to Phase 3.

STOP after Phase 2.

Wait for my approval before making any Phase 3 changes.