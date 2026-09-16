# Phase 3 — Lightbox Check, Fix & Complete Visual QA Report

## 1. Environment & Viewport Specification

- **Rendering Engine**: Chromium / Brave Browser (Brave Desktop)
- **Viewport Dimensions**: **1890 × 870 px** (matching the standardized desktop QA viewport)
- **Device Scale Factor**: 1.0 (Desktop)
- **Automation Harness**: `puppeteer-core` connected to local Brave instance, testing all 18 interaction and accessibility paths and capturing screenshots at key states.

---

## 2. Screenshot Artifacts

| Screenshot File | State Description | Key Verified Attributes |
| :--- | :--- | :--- |
| `screenshots/phase3_lightbox_initial.png` | Lightbox opened on first photo (`1 / 10`) | Pure black background, large centered image (`1240px` max width), aspect ratio maintained, subtle circular next/previous buttons, "Close" button, counter "1 / 10", Share & Save actions, caption underneath. |
| `screenshots/phase3_lightbox_next.png` | Navigated to next photo (`2 / 10`) | Counter updated to "2 / 10", image transitioned smoothly, caption updated to "Rooftop terrace with lounge seating and ambient wall lamps", layout stable. |
| `screenshots/phase3_lightbox_previous.png` | Navigated back to previous photo (`1 / 10`) | Circular navigation works backwards without boundary issues; counter returns to "1 / 10". |
| `screenshots/phase3_lightbox_closed.png` | Lightbox closed via Close button or Escape | Photo Tour underneath remains open; scroll position precisely preserved (`220px`); focus restored to trigger element. |

---

## 3. Implementation Audit & Changes

### 3.1 What Was Already Implemented
- Fullscreen modal overlay with black background (`#000000`).
- Header with Close button (X icon), photo counter (`{index + 1} / {total}`), Share button, and Save button.
- Previous (`ChevronLeft`) and Next (`ChevronRight`) circular navigation buttons.
- Centered image display with caption text underneath.
- Circular photo index wrapping logic (`(index ± 1 + length) % length`).
- Reference-counted `useBodyScrollLock` integration from Phase 2.

### 3.2 What Was Missing
1. **Focus Trap Inside Lightbox**: Pressing Tab could cycle outside the Lightbox into unseen background elements.
2. **Focus Restoration on Close**: Closing Lightbox did not explicitly restore focus to the photo item that opened it, leaving focus on `document.body`.
3. **Focus Timing on Open**: Close button was not reliably focused across rendering ticks upon open.
4. **Visible Share Feedback in Lightbox**: Share button swapped icon to checkmark but lacked an explicit textual toast or badge ("Link copied!") visible to the user.
5. **Scroll Leakage Protection**: Overlay lacked `overflow: hidden`, which could allow mouse wheel events to bubble to background scroll containers on certain browsers.
6. **Container Width on Wide Desktops (1890px)**: The image container was restricted to `1080px`, leaving excess empty margins on wide monitors instead of showcasing property photography at optimal fidelity (`1240px`).

### 3.3 What Was Fixed
- **Focus Trap**: Implemented keydown handler for `Tab` / `Shift+Tab` cycling strictly within focusable elements (`button:not([disabled]), [tabindex="0"]`) inside the Lightbox overlay container.
- **Focus Restoration**: Recorded `triggerElementRef.current = document.activeElement` on open, and called `triggerElementRef.current.focus({ preventScroll: true })` on close.
- **Autofocus Timing**: Wrapped initial `closeBtnRef.current?.focus()` in `requestAnimationFrame` for guaranteed focus acquisition once mounted.
- **Toast Feedback**: Added `.lightbox-share-wrapper` with a floating `.lightbox-toast` badge announcing "Link copied!" when Share is clicked, automatically dismissing after 2 seconds.
- **Scroll Containment**: Added `overflow: hidden` to `.lightbox-overlay` in `Lightbox.css`.
- **Desktop Visual Scaling**: Adjusted `.lightbox-image-container` to `max-width: 1240px;` and `.lightbox-image` to `max-height: calc(100vh - 160px); object-fit: contain;` for desktop presentation at 1890 × 870 px.
- **Photo Tour Focus Guard**: Ensured `PhotoTour.jsx` focuses its Back button only on initial open using `wasOpenRef`, preventing focus hijacking or scroll jumps when Lightbox closes.

---

## 4. Interaction & Accessibility Verification

### 4.1 Keyboard Controls
- **Escape**: Closes ONLY the Lightbox overlay. Event propagation is stopped via `e.stopPropagation()`. Photo Tour underneath remains open.
- **ArrowRight**: Navigates forward through gallery images (`1/10` → `2/10` → ... → `10/10` → `1/10`).
- **ArrowLeft**: Navigates backwards through gallery images (`1/10` → `10/10` → `9/10` → ...).
- **Enter & Space**: Activates buttons (Close, Prev, Next, Share, Save) natively with zero keyboard trapping.

### 4.2 Focus Behavior
- When Lightbox opens: Focus moves immediately to the `Close` button.
- When tabbing inside Lightbox: Focus cycles strictly within the modal controls (`Close` → `Share` → `Save` → `Previous` → `Next` → `Close`).
- When Lightbox closes: Focus returns to the photo item that originally launched the viewer, without triggering unprompted scroll offsets (`preventScroll: true`).

### 4.3 Scroll-Lock Behavior
- When Lightbox is open: `document.body` has `position: fixed`, `top: -{preservedScrollY}px`, and `modal-open` class. Background listing cannot scroll.
- Underneath Lightbox: Photo Tour remains mounted and preserved.
- When Lightbox closes: Photo Tour remains locked while open. Its scroll position is preserved without jumping.
- When Photo Tour closes: `lockCount` decrements to 0, restoring original window scroll position and unlocking `document.body`.

---

## 5. Visual Observations & Remaining Differences

- **Visual Alignment**: Controls and typography match Airbnb desktop aesthetic (clean sans-serif, high contrast white text/icons against `#000000`, translucent pill and circular buttons).
- **Image Fidelity**: High-resolution Unsplash property photos are rendered without distortion, letterboxed appropriately with `object-fit: contain`.
- **Remaining Differences**: None identified. All Phase 3 requirements have passed validation with zero errors.
