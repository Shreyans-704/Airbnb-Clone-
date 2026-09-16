# Airbnb Listing Page Clone — Desktop

An authentic, pixel-accurate desktop recreation of the Airbnb property listing page for **Romantic Jacuzzi 1BHK Candolim | Mirashya UG10**.

## ✨ Features & Sections Implemented

- **Global Header**: Airbnb branding, interactive pill search bar (*Anywhere*, *Anytime*, *Add guests* + search button), host link, language globe, user menu.
- **Property Header**: Full property title, with responsive **Share** and **Save** action buttons.
- **Hero Gallery**: 5-image asymmetric grid (1 large left feature + 2×2 right grid), outer corner border radii, and floating **Show all photos** button.
- **Guest Favourite Badge**: Airbnb ribbon/laurel badge, 4.95 rating with 5 black stars, review count, and separator.
- **Property Overview & Host Summary**: Entire serviced apartment details, host avatar with verified checkmark, 2 years hosting tenure.
- **Highlights**: Outdoor entertainment, designed for staying cool (A/C & ceiling fan), self check-in.
- **Description & Translation Notice**: Property story, amenities description, emojis, and inline expandable button.
- **Where You'll Sleep**: Side-by-side cards for Bedroom and Living room with high-res photography and bed details.
- **What This Place Offers (Amenities)**: 2-column preview list with Lucide icons (available and crossed-out amenities) + **Show all 50 amenities** button.
- **Amenities Modal**: Centered modal with categorized list (Bathroom, Bedroom & laundry, Heating & cooling, Kitchen, Outdoor, etc.), focus trap, backdrop click, and `ESC` key support.
- **Interactive Calendar**: 2-month view (October / November 2026), interactive date selection, night counter, range highlights, and "Clear dates" action.
- **Reviews Breakdown**: Overall 4.95 score with star distribution bars (5 to 1 star), category scores (Cleanliness, Accuracy, Communication, Location, Value), review tags, and individual review cards with avatars.
- **Location Map**: Detailed vector SVG map showing Candolim coast, water bodies, road grid, area proximity circle, marker pin, zoom controls, and neighbourhood highlights.
- **Meet Your Host**: Host profile card with statistics (1,463 reviews, 4.68 rating, 2 years hosting), co-hosts roster, response rate, message button, and payment protection disclaimer.
- **Things to Know**: 3-column layout covering Cancellation policy, House rules, and Safety & property details with "Learn more" links.
- **More Stays Nearby**: 5-card horizontal carousel with pagination (1 / 2) and prev/next controls.
- **Sticky Booking Sidebar**:
  - 10% coupon promo banner with "Claim" button.
  - Price display: ₹28,499 for 5 nights.
  - Date picker (Check-in 10/18/2026, Checkout 10/23/2026).
  - Guests selector dropdown.
  - Cancellation guarantee reminder.
  - Gradient pink **Reserve** button.
  - "You won't be charged yet" subtext and "Report this listing" action.
- **Sticky Navigation Bar**:
  - Dynamically appears when scrolling past the hero gallery.
  - IntersectionObserver scroll spy highlighting active section (Photos, Amenities, Reviews, Location).
  - Right-side price summary with quick "Reserve" CTA.
- **Photo Tour Overlay**: Full-screen modal with categorized photo gallery, body scroll lock, and `ESC` support.
- **Photo Lightbox**: Fullscreen dark backdrop image viewer with previous/next keyboard arrows, counter (`X / Y`), and ESC support.
- **Footer**: Standard 3-column Airbnb footer (Support, Hosting, Airbnb) with localized currency (₹ INR) and language picker.

## 🚀 Running the Project

```bash
# Navigate to project directory
cd airbnb-listing

# Install dependencies (if not already installed)
npm install

# Start development server
npm run dev

# Run Oxlint
npm run lint

# Build for production
npm run build
```

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Pure CSS with CSS Custom Properties (Design Tokens)
- **Icons**: `lucide-react`
- **Typography**: Inter / Clean system sans-serif font stack
