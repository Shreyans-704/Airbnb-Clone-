PHASE 4 — FINAL VISUAL & BEHAVIORAL QA
======================================

PHASE 1, PHASE 2, AND PHASE 3 ARE COMPLETE.

The application currently has:

- Main Airbnb listing page
- Hero gallery
- Booking card
- Sticky navigation
- Amenities modal
- Photo Tour
- Fullscreen Lightbox
- Reviews
- Location
- Host section
- Things to Know
- Nearby stays
- Footer
- Accessibility and keyboard interactions

DO NOT ADD NEW FEATURES.

The goal of this phase is to perform a FINAL visual and behavioural
quality pass against the provided reference screenshots.

--------------------------------------------------
IMPORTANT REFERENCE RULE
--------------------------------------------------

DO NOT access, scrape, clone, or extract anything from the reference
website.

Use ONLY:

- the provided reference screenshots
- the existing application
- the requirements already provided

Do not use website-to-code tools or source extraction.

--------------------------------------------------
TARGET VIEWPORT
--------------------------------------------------

Primary target:

1890 × 870

Desktop only is the primary evaluation target.

--------------------------------------------------
STEP 1 — INSPECT THE COMPLETE APPLICATION
--------------------------------------------------

Run the application.

Open:

http://localhost:5173/

Inspect the complete page from top to bottom.

Do not assume previous QA is sufficient.

--------------------------------------------------
STEP 2 — COMPARE AGAINST REFERENCE SCREENSHOTS
--------------------------------------------------

Use the original reference screenshots supplied for this task.

Compare the implementation section by section.

Check:

1. Header
2. Search bar
3. Property title
4. Share / Save buttons
5. Hero photo gallery
6. Coupon card
7. Property information
8. Guest Favourite section
9. Host information
10. Highlights
11. Description
12. Sleeping arrangements
13. Amenities
14. Amenities modal
15. Calendar
16. Reviews
17. Location/map
18. Host section
19. Things to Know
20. Nearby stays
21. Footer
22. Sticky navigation
23. Booking card

--------------------------------------------------
VISUAL CHECKLIST
--------------------------------------------------

For every section check:

- overall positioning
- horizontal alignment
- vertical spacing
- section height
- margins
- padding
- font size
- font weight
- line height
- icon size
- icon alignment
- button dimensions
- border radius
- border thickness
- shadows
- image dimensions
- image cropping
- image aspect ratio
- whitespace
- sticky positioning
- z-index
- overflow

Pay particular attention to large visual differences.

DO NOT waste time making invisible 1px changes if the overall result
already matches well.

--------------------------------------------------
BEHAVIOURAL CHECKLIST
--------------------------------------------------

Test:

HEADER
- Search controls
- Host button
- Profile/menu interaction if implemented

HERO
- Image interaction
- Show all photos

BOOKING
- Date selection
- Guest selection
- Reserve button
- Price calculation/display

AMENITIES
- Show all amenities
- Modal open/close
- Escape
- scrolling

PHOTO TOUR
- Open
- Back
- Scroll
- Share
- Save

LIGHTBOX
- Open photo
- Previous
- Next
- ArrowLeft
- ArrowRight
- Escape
- Close
- Share
- Save
- Focus
- Scroll locking

STICKY NAVIGATION
- Appears at correct scroll position
- Correct active section
- Correct booking summary

OTHER
- Reviews
- Location
- Host
- Nearby carousel
- Footer

--------------------------------------------------
VISUAL PRIORITY
--------------------------------------------------

Prioritize fixes in this order:

P0:
Major layout mismatch
Wrong section positioning
Broken sticky behavior
Broken modal/lightbox
Broken images
Broken navigation

P1:
Incorrect dimensions
Incorrect spacing
Incorrect typography
Incorrect image crops
Incorrect button/icon sizing

P2:
Minor visual differences
Small alignment differences
Tiny font differences

Do not over-engineer P2 issues.

--------------------------------------------------
AIRBNB FONT
--------------------------------------------------

The project currently uses an approximation of Airbnb's proprietary
typography.

Do not attempt to obtain or copy proprietary Airbnb fonts.

Use the existing font solution unless a clearly better legal/local
alternative is already available.

--------------------------------------------------
MAP
--------------------------------------------------

The project uses a custom SVG/vector map rather than a live Google Maps
integration.

Do not add Google Maps API or unnecessary external services.

Only refine the map if there is an obvious visual/layout issue.

--------------------------------------------------
IMAGES
--------------------------------------------------

Do not scrape images from the reference website.

Use the existing project image assets/data.

If image cropping differs from the reference, adjust object-fit,
object-position, dimensions, or container sizing where appropriate.

--------------------------------------------------
RESPONSIVENESS
--------------------------------------------------

Primary target remains:

1890 × 870

Also make sure changes do not catastrophically break:

- tablet
- mobile

Do not redesign mobile.

--------------------------------------------------
ACCESSIBILITY
--------------------------------------------------

Verify:

- keyboard navigation
- focus-visible states
- buttons have labels
- images have alt text
- Escape behavior
- focus restoration
- modal/lightbox focus handling
- no accidental keyboard traps
- no horizontal overflow

--------------------------------------------------
ANIMATIONS & TRANSITIONS
--------------------------------------------------

The evaluator explicitly checks behavioural parity including:

- animations
- transitions
- interactions

Inspect existing animations/transitions.

Where the reference behaviour clearly suggests an animation or transition
and the implementation is currently abrupt, add a subtle appropriate
transition.

Do NOT add flashy or unnecessary animations.

Prioritize:

- modal opening/closing
- lightbox opening/closing
- button hover states
- Save state
- Share feedback
- carousel interaction
- sticky navigation transition

Keep animations fast and natural.

--------------------------------------------------
SCREENSHOT QA
--------------------------------------------------

Capture fresh screenshots at 1890 × 870 for the important states.

Save them in:

screenshots/final/

Capture at minimum:

01_top.png
02_overview.png
03_sticky_navigation.png
04_sleeping_amenities.png
05_reviews.png
06_location.png
07_host.png
08_things_nearby.png
09_amenities_modal.png
10_photo_tour.png
11_lightbox.png
12_footer.png

Do not delete the previous QA screenshots.

--------------------------------------------------
FINAL QA REPORT
--------------------------------------------------

Create:

.ai/visual-qa/phase-4-final-qa.md

Include:

### Visual QA
- What matches well
- Major differences found
- Minor differences found
- Fixes made

### Behavioural QA
- What was tested
- What passed
- What was fixed

### Accessibility
- Keyboard
- Focus
- Modal/lightbox
- Screen-reader relevant labels

### Performance / Code Quality
- Console errors
- Build status
- Lint status

### Known Limitations
Clearly document things such as:

- proprietary Airbnb font approximation
- custom SVG map instead of live map
- any other unavoidable differences

--------------------------------------------------
BUILD
--------------------------------------------------

Run:

npm run lint

npm run build

Both must pass.

Fix errors and avoidable warnings.

--------------------------------------------------
CRITICAL RULE
--------------------------------------------------

DO NOT rebuild the application.

DO NOT rewrite working components unnecessarily.

DO NOT introduce a backend.

DO NOT introduce authentication.

DO NOT introduce a database.

DO NOT introduce payments.

DO NOT scrape the reference website.

DO NOT add unrelated features.

Only make changes that improve visual fidelity, behavioural parity,
accessibility, or stability.

--------------------------------------------------
FINAL REPORT
--------------------------------------------------

At the end provide:

PHASE 4 FINAL QA

- Visual QA: PASS/FAIL
- Behavioural QA: PASS/FAIL
- Accessibility QA: PASS/FAIL
- Build: PASS/FAIL
- Lint: PASS/FAIL

Major fixes:
- ...

Minor fixes:
- ...

Known limitations:
- ...

Screenshots created:
- ...

STOP AFTER PHASE 4.

DO NOT START ARCHITECTURE DIAGRAM WORK.