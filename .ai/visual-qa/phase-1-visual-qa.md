# Phase 1 — Visual QA Pass Report

## 1. Environment & Viewport Specification

- **Rendering Engine**: Chromium / Brave Browser (Brave 1.x desktop)
- **Viewport Dimensions**: **1890 × 870 px** (matching the exact viewport aspect and scale of the supplied reference screenshots)
- **Device Scale Factor**: 1.0 (Desktop)
- **Automation Harness**: `puppeteer-core` connected to local Brave instance, capturing programmatic screenshots at exact scroll offsets and modal states.

---

## 2. Screenshot-by-Screenshot Comparative Analysis

### 2.1 Position 0: Top of Page (Header & Hero Gallery)
- **Reference Screenshot**: `media_1789552899251.png`
- **Local Capture**: `screenshots/pos0_top.png`
- **Observed Elements**:
  - Global Header with Airbnb coral logo, centered search pill, and right-hand account/host buttons.
  - Property Header: Title "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10", Share & Save buttons.
  - 5-image asymmetric hero gallery (1 large left image, 2×2 right image grid).
  - Floating "Show all photos" button with 9-dot grid icon.
  - Top of left column overview and right column coupon banner / booking card.
- **Discrepancies Identified**:
  1. **Search Pill**: Reference includes a small cottage/cabin icon on the far left before "Anywhere"; local implementation only had plain text.
  2. **Gallery Height**: Hero gallery height was set to 400px; reference screenshot shows a slightly taller aspect ratio (~450px) relative to the 1890px viewport width.
  3. **Coupon Tag**: Used an emoji 🏷️ rather than a vector green tag icon.
  4. **Guest Favourite Badge**: Used emoji trophies 🏆 rather than SVG laurel wreath branches flanking "Guest favourite".
- **Fixes Applied**:
  - Added home icon graphic to the search segment in `Header.jsx`.
  - Increased `--gallery-height` from `400px` to `450px` in `src/index.css`.
  - Replaced emoji with clean vector green price tag SVG in `BookingCard.jsx`.
  - Created authentic SVG `LaurelLeft` and `LaurelRight` components in `GuestFavourite.jsx`.

---

### 2.2 Position 1: Overview, Host & Highlights
- **Reference Screenshot**: `media_1789551759577.png` / `media_1789552899191.png`
- **Local Capture**: `screenshots/pos1_overview.png`
- **Observed Elements**:
  - Property title: "Entire serviced apartment in Candolim, India", guest & bed counts.
  - Guest favourite badge with laurel leaves, description, rating 4.95 (5 black stars), and 19 reviews.
  - Host summary: Avatar with verified checkmark, "Hosted by Mirashya Homes", "2 years hosting".
  - Highlights list: Outdoor entertainment, Designed for staying cool, Self check-in.
  - Right sidebar: Coupon banner (10% off + Claim button) and top half of sticky Booking Card.
- **Discrepancies Identified**:
  1. **Host Avatar Color**: Avatar had a pink-red gradient (`#E61E4D`) with a white "M"; reference displays Mirashya's dark forest green circular avatar (`#14493a`) with "MIRASHYA" brand lettering.
  2. **Reviews Label in Badge**: "Reviews" was not underlined; reference has `text-decoration: underline`.
- **Fixes Applied**:
  - Updated `PropertyContent.css` to use `#14493a` background and uppercase letter-spacing for the host avatar.
  - Updated `PropertyContent.jsx` to render "MIRASHYA" inside the avatar circle.
  - Ensured `.gf-reviews-label` has `text-decoration: underline` and correct font weight.

---

### 2.3 Position 2: In-Page Sticky Navigation & Property Story
- **Reference Screenshot**: `media_1789551759454.png` / `media_1789552899148.png`
- **Local Capture**: `screenshots/pos2_stickynav.png`
- **Observed Elements**:
  - Sticky navigation bar at the top with "Photos", "Amenities", "Reviews", "Location" on the left, and Price / Reviews / Reserve button on the right.
  - Below sticky nav: Guest favourite badge, Host summary, Highlights, and Description section with "Show original" translation notice.
  - Right side: Full sticky Booking Card.
- **Discrepancies Identified**:
  1. **Header Conflict (Critical)**: `Header.css` had `.header { position: sticky; top: 0; }`. As a result, the main header remained fixed to the viewport when scrolling, preventing the in-page `StickyNavigation` from taking over the top bar.
  2. **Sticky Navigation Trigger**: Activation threshold was set to `window.scrollY > 550px`, which was too late compared to the reference where it activates immediately as the hero gallery leaves the viewport (~420px).
- **Fixes Applied**:
  - Changed `.header` in `Header.css` to `position: relative;` so it naturally scrolls off screen.
  - Adjusted scroll threshold in `StickyNavigation.jsx` to `420px`.
  - Set `z-index: 90;` on `.sticky-nav` to ensure clean overlay precedence.

---

### 2.4 Position 3: Where You'll Sleep & Amenities Preview
- **Reference Screenshot**: `media_1789551759518.png` / `media_1789552899176.png`
- **Local Capture**: `screenshots/pos3_sleeping_amenities.png`
- **Observed Elements**:
  - Sticky nav at top with "Amenities" active tab indicator.
  - "Where you'll sleep": 2 cards for Bedroom and Living room with photography and bed details.
  - "What this place offers": 2-column preview grid of 10 amenities with icons (including struck-through alarms).
  - Right sidebar: Sticky Booking Card pinned alongside the content.
- **Discrepancies Identified**:
  1. **Booking Card Sticky Failure (Critical)**: In initial capture, `.property-columns` had `align-items: flex-start`, which caused `.property-sidebar-column` to collapse to the height of `.booking-card` alone, preventing it from remaining sticky alongside lower sections.
- **Fixes Applied**:
  - Updated `App.css` to set `.property-columns { align-items: stretch; }`.
  - Set `.booking-card { position: sticky; top: 100px; }` in `BookingCard.css`.
  - Verified that the booking card remains continuously visible and pinned in the right column alongside "Where you'll sleep" and "What this place offers".

---

### 2.5 Position 4: Things to Know & More Stays Nearby
- **Reference Screenshot**: `media_1789551759546.png`
- **Local Capture**: `screenshots/pos4_things_nearby.png`
- **Observed Elements**:
  - Sticky nav at top with "Location" tab active.
  - "Things to know" 3-column layout: Cancellation policy, House rules, Safety & property with icons and "Learn more" links.
  - "More stays nearby": 5 cards in a horizontal row with 1 / 2 pagination controls.
- **Discrepancies Identified**:
  1. **Nearby Cards Price & Rating Alignment**: In `NearbyListings.css`, `.nearby-meta` had `justify-content: space-between`, which pushed the star rating to the far right edge of each card. In reference screenshot 2, the price and star rating are grouped closely together on the left (e.g., "₹23,600 ★ 4.91").
- **Fixes Applied**:
  - Changed `.nearby-meta` in `NearbyListings.css` to `justify-content: flex-start; gap: 8px;`.
  - Verified card metadata alignment against reference screenshot 2.

---

### 2.6 Position 5: Amenities Full Categorized Modal
- **Reference Screenshot**: `media_1789552899130.png`
- **Local Capture**: `screenshots/pos5_amenities_modal.png`
- **Observed Elements**:
  - Semi-transparent dark overlay over the listing page.
  - Centered white modal with rounded corners.
  - Close button (`X`) top-left.
  - "What this place offers" title.
  - Categorized amenity groups ("Bathroom", "Bedroom and laundry", etc.) with icons, names, and thin dividing rules.
  - In background: "What this place offers" preview, "5 nights in Candolim" calendar, and booking card.
- **Discrepancies Identified**:
  1. **Modal Close Button**: On initial focus, a default browser focus outline appeared around the button as a circular ring; reference shows a clean, borderless `X` icon.
  2. **Header Divider**: Header had `border-bottom: 1px solid var(--border-light);` which separated the close button from the title; reference is a seamless continuous white panel.
  3. **Modal Width**: Initial width was 568px; reference shows a wider layout (~650px).
- **Fixes Applied**:
  - Removed `border-bottom` from `.amenities-modal-header` in `AmenitiesModal.css`.
  - Set `outline: none;` on `.amenities-modal-close` for clean default state, reserving `:focus-visible` for keyboard navigation.
  - Increased `max-width` to `650px` with `16px` border-radius.

---

## 3. Summary of Fixes Applied

| Component | File Changed | Description of Fix |
|---|---|---|
| Header | `Header.css` | Changed `.header` from `sticky` to `relative` so in-page sticky nav can take over |
| Header | `Header.jsx` | Added cottage icon inside search pill before "Anywhere" |
| Sticky Navigation | `StickyNavigation.jsx` | Changed scroll activation threshold from 550px to 420px |
| Hero Gallery | `index.css` | Increased `--gallery-height` from 400px to 450px |
| Guest Favourite | `GuestFavourite.jsx` | Replaced emoji trophies with custom SVG laurel wreath branches |
| Property Content | `PropertyContent.css` | Updated host avatar to dark forest green (`#14493a`) |
| Property Content | `PropertyContent.jsx` | Replaced "M" with "MIRASHYA" brand lettering inside avatar |
| Booking Card | `BookingCard.jsx` | Replaced emoji 🏷️ with SVG green price tag icon |
| Layout / Sidebar | `App.css` | Changed `.property-columns` to `align-items: stretch` so booking sidebar stays sticky |
| Booking Card | `BookingCard.css` | Updated sticky `top` offset to 100px for proper alignment below sticky nav |
| Nearby Listings | `NearbyListings.css` | Changed `.nearby-meta` to `justify-content: flex-start; gap: 8px;` |
| Amenities Modal | `AmenitiesModal.css` | Removed header bottom border, increased width to 650px, cleaned close icon |

---

## 4. Remaining Known Discrepancies

1. **Font Family**: Airbnb uses proprietary "Cereal". The implementation uses Google's `Inter` as the closest open-source geometric sans-serif match. Letter spacing and glyph widths may have minor micro-variations.
2. **Dynamic Calendar Dates**: The calendar selected dates reflect the October 2026 trip demonstrated in the reference screenshots.
3. **Map Tiles / Vector**: The location map utilizes a clean vector SVG map approximation for North Goa (Candolim/Calangute coast) rather than proprietary Google Maps API tiles to ensure standalone, zero-API-key local operation.
