PHASE 3 — LIGHTBOX CHECK, FIX & COMPLETE
==========================================

Phase 1 and Phase 2 are COMPLETE.

IMPORTANT:
A Lightbox/fullscreen image viewer has ALREADY been implemented in the
project.

DO NOT rebuild it from scratch.

Your job is to inspect the existing Lightbox implementation, determine
what is already working, determine what is missing compared with the
requirements below, and then implement/fix ONLY what is missing.

--------------------------------------------------
STEP 1 — INSPECT FIRST
--------------------------------------------------

Inspect the existing:

- Lightbox.jsx
- Lightbox.css
- PhotoTour.jsx
- PhotoTour.css
- App.jsx
- gallery/image data
- scroll-lock hook
- existing navigation/state logic

Before making changes, give yourself a clear understanding of what is
already implemented.

DO NOT delete working functionality.

DO NOT create duplicate Lightbox components.

--------------------------------------------------
LIGHTBOX REQUIREMENTS
--------------------------------------------------

When a user clicks a photo inside the Photo Tour:

→ Open a fullscreen Lightbox.

The Lightbox should contain:

- Black/dark fullscreen background
- Large centered image
- Previous photo button
- Next photo button
- Photo counter such as "1 / 10"
- Close button
- Share button
- Save button
- Image caption
- Proper spacing and positioning

The image should remain properly contained inside the viewport without
being stretched or distorted.

--------------------------------------------------
PHOTO NAVIGATION
--------------------------------------------------

Previous and Next buttons must work.

Example:

1 / 10
↓ Next
2 / 10
↓ Next
3 / 10

Previous should work in the opposite direction.

Handle first/last image correctly.

Do not allow the index to become invalid.

If the intended behavior is circular navigation, preserve the existing
project behavior; otherwise use sensible boundary handling.

--------------------------------------------------
KEYBOARD CONTROLS
--------------------------------------------------

Check and implement:

- Escape → close Lightbox
- ArrowLeft → previous photo
- ArrowRight → next photo

Keyboard events must only affect the Lightbox while it is open.

IMPORTANT:

Pressing Escape while Lightbox is open must close ONLY the Lightbox.

It must NOT accidentally close the Photo Tour underneath it.

If the Photo Tour remains open after closing Lightbox, that is correct.

--------------------------------------------------
SCROLL LOCK
--------------------------------------------------

When Lightbox is open:

- Background page must not scroll.
- Photo Tour/listing underneath must remain locked.

When Lightbox closes:

- Restore scrolling correctly.
- Do not unexpectedly jump to the top of the page.
- Do not interfere with the Photo Tour's own scroll lock.

Inspect the existing `useBodyScrollLock` implementation and preserve the
reference-counting behavior already fixed in Phase 2.

--------------------------------------------------
FOCUS & ACCESSIBILITY
--------------------------------------------------

Check:

- Close button is keyboard accessible.
- Previous/Next buttons are keyboard accessible.
- Share button is keyboard accessible.
- Save button is keyboard accessible.
- Buttons have meaningful aria-labels.
- Focus-visible states exist.
- Focus is moved into the Lightbox when it opens.
- Focus does not become trapped outside the Lightbox.

When the Lightbox closes, restore focus to the photo that opened it if
practical.

Do not introduce unnecessary accessibility UI.

--------------------------------------------------
SHARE
--------------------------------------------------

Check the existing Share functionality.

It should:

- Copy the appropriate page/link to clipboard.
- Provide visible feedback such as "Link copied!"
- Return to its normal state afterward.

If already working, DO NOT change it.

--------------------------------------------------
SAVE
--------------------------------------------------

Check the existing Save functionality.

It should:

- Toggle saved/unsaved state.
- Show filled heart when saved.
- Show outline heart when unsaved.
- Work with keyboard interaction.

If already working, DO NOT change it.

--------------------------------------------------
VISUAL DESIGN
--------------------------------------------------

Match the existing Phase 2/Phase 1 visual system.

The Lightbox should visually resemble the intended Airbnb-style
fullscreen viewer:

- black background
- white/light controls
- large centered image
- subtle circular navigation buttons
- clean typography
- correct spacing
- no unnecessary borders
- no emoji icons
- use the existing icon library

Target viewport:

1890 × 870

Prioritize desktop visual fidelity.

--------------------------------------------------
IMAGE DISPLAY
--------------------------------------------------

Images must:

- maintain aspect ratio
- use appropriate object-fit/object-contain
- remain centered
- not overflow unexpectedly
- not become distorted
- work with different image dimensions

Caption should appear below the image where appropriate.

--------------------------------------------------
PHOTO TOUR INTEGRATION
--------------------------------------------------

The flow must work:

Listing
  ↓
Show all photos
  ↓
Photo Tour
  ↓
Click photo
  ↓
Lightbox
  ↓
Previous / Next
  ↓
Close
  ↓
Return to same Photo Tour position

The Photo Tour must NOT unexpectedly close when the Lightbox closes.

--------------------------------------------------
IMPORTANT: DO NOT BREAK EXISTING FEATURES
--------------------------------------------------

Do not break:

- Main listing
- Hero gallery
- Show all photos
- Photo Tour
- Sticky navigation
- Amenities modal
- Booking card
- Calendar
- Reviews
- Location
- Host section
- Nearby stays
- Footer

Do not modify unrelated components unless required for Lightbox
integration.

--------------------------------------------------
NO BACKEND
--------------------------------------------------

Do NOT add:

- backend
- database
- authentication
- payments
- API
- external image scraping

This remains a frontend-only project.

--------------------------------------------------
ORIGINALITY
--------------------------------------------------

Do not access, scrape, clone, or extract the reference website's:

- source code
- CSS
- JavaScript
- DOM
- source maps
- proprietary implementation

Use the provided screenshots and requirements as the design specification.

--------------------------------------------------
TESTING
--------------------------------------------------

After inspection/fixes, test:

1. Open listing.
2. Open Photo Tour.
3. Click first photo.
4. Verify Lightbox opens.
5. Verify counter.
6. Click Next.
7. Click Previous.
8. Test ArrowRight.
9. Test ArrowLeft.
10. Test Escape.
11. Test Close.
12. Verify Photo Tour remains open after closing Lightbox.
13. Verify Photo Tour scroll position is preserved.
14. Test Share.
15. Test Save.
16. Test keyboard focus.
17. Verify background cannot scroll while Lightbox is open.
18. Verify scrolling works again after closing.

Also check browser console for errors.

--------------------------------------------------
VISUAL QA
--------------------------------------------------

Use viewport:

1890 × 870

Capture screenshots of:

screenshots/

phase3_lightbox_initial.png
phase3_lightbox_next.png
phase3_lightbox_previous.png
phase3_lightbox_closed.png

Create:

.ai/visual-qa/phase-3-visual-qa.md

Document:

- What was already implemented
- What was missing
- What was fixed
- Keyboard behavior
- Focus behavior
- Scroll-lock behavior
- Visual observations
- Remaining differences

--------------------------------------------------
BUILD & LINT
--------------------------------------------------

Run:

npm run lint

npm run build

Both must pass.

Fix all errors and avoidable warnings.

--------------------------------------------------
FINAL REPORT
--------------------------------------------------

At the end, provide a SHORT report:

LIGHTBOX:
- Already implemented: [yes/no]
- Working features: [...]
- Missing features found: [...]
- Features implemented/fixed: [...]
- Keyboard controls: [pass/fail]
- Focus/accessibility: [pass/fail]
- Scroll locking: [pass/fail]
- Photo Tour integration: [pass/fail]
- Build: [pass/fail]
- Lint: [pass/fail]
- Visual QA screenshots: [created/not created]

IMPORTANT:

Do not start Phase 4.

STOP after Phase 3.