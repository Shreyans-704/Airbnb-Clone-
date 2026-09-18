# Phase 1 — VISUAL QA — STOP FEATURE DEVELOPMENT

Do not implement any new features.

Do not modify Photo Tour or Lightbox yet.

Do not attempt to access or render the reference URL.

The reference website cannot be reliably accessed by automated browser tools.

The ONLY visual source of truth is the uploaded reference screenshots.

Your Phase 1 implementation is now present locally.

Now perform a dedicated visual QA pass against the uploaded screenshots.

==================================================
STEP 1 — RUN THE APPLICATION
==================================================

Run the production/dev application.

Use the same approximate desktop viewport as the reference screenshots:

1890 × 870

Do not evaluate the page at a random viewport.

==================================================
STEP 2 — CAPTURE OUR IMPLEMENTATION
==================================================

Capture screenshots corresponding to the supplied reference screenshots.

The supplied reference screenshots represent different vertical scroll positions of the SAME page.

Therefore capture our implementation at equivalent scroll positions:

1. Header + property title + hero gallery
2. Property overview / Guest Favourite / Host / Highlights
3. Description / sleeping arrangements
4. Amenities
5. Calendar
6. Reviews
7. Location
8. Host section
9. Things to Know
10. More stays nearby / footer

==================================================
STEP 3 — VISUAL COMPARISON
==================================================

Compare each implementation screenshot against the corresponding uploaded reference screenshot.

Do NOT simply say "looks good".

Identify concrete differences.

For every discrepancy record:

- reference appearance
- current appearance
- exact affected component
- likely cause
- proposed correction

Evaluate:

LAYOUT
- page width
- content max-width
- left/right margins
- column widths
- column gap
- section positions
- vertical spacing

TYPOGRAPHY
- font family
- font size
- weight
- line height
- letter spacing
- heading hierarchy

GALLERY
- overall dimensions
- image sizes
- image crops
- object positioning
- gaps
- corner radii
- Show all photos button

BOOKING CARD
- width
- position
- sticky behavior
- padding
- borders
- shadows
- typography
- button dimensions

SECTIONS
- section spacing
- dividers
- card dimensions
- icons
- alignment

CALENDAR
- dimensions
- date positioning
- selected range
- typography
- spacing
- controls

REVIEWS
- grid structure
- rating bars
- review cards
- avatars
- spacing

MAP
- dimensions
- visual composition
- controls
- marker position

FOOTER
- spacing
- columns
- typography

==================================================
STEP 4 — PRIORITIZE
==================================================

Classify discrepancies:

P0 = major visual mismatch
P1 = obvious mismatch
P2 = noticeable but minor mismatch
P3 = negligible

Fix P0 and P1 first.

Do not waste time polishing P3 issues while major layout differences remain.

==================================================
STEP 5 — IMPLEMENT FIXES
==================================================

After completing the comparison, fix the identified P0/P1/P2 discrepancies.

Do not rewrite working components unnecessarily.

Prefer targeted CSS/component changes.

Do not introduce unnecessary dependencies.

==================================================
STEP 6 — RE-CAPTURE
==================================================

After fixes, capture the same screenshots again.

Perform another comparison.

Continue iterating until the major discrepancies are resolved.

==================================================
IMPORTANT
==================================================

Do NOT claim "pixel perfect" merely because:

- npm run build succeeds
- npm run lint succeeds
- the page opens in Brave
- the components exist

Those verify functionality/build health, not visual fidelity.

The goal of this phase is screenshot-based visual parity.

==================================================
DELIVERABLE
==================================================

Create:

.ai/visual-qa/phase-1-visual-qa.md

Document:

1. Screenshot/viewport used
2. Each reference screenshot analyzed
3. Major discrepancies found
4. Changes made
5. Remaining known discrepancies
6. Final verification status

Also preserve the screenshots used for comparison if practical.

Do not move to another feature phase until this visual QA pass is complete.