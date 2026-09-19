import { useState } from 'react';
import Header from './components/Header/Header';
import StickyNavigation from './components/StickyNavigation/StickyNavigation';
import PropertyHeader from './components/PropertyHeader/PropertyHeader';
import HeroGallery from './components/HeroGallery/HeroGallery';
import PropertyContent from './components/PropertyContent/PropertyContent';
import SleepingArrangements from './components/SleepingArrangements/SleepingArrangements';
import Amenities from './components/Amenities/Amenities';
import Calendar from './components/Calendar/Calendar';
import Reviews from './components/Reviews/Reviews';
import LocationMap from './components/LocationMap/LocationMap';
import HostSection from './components/HostSection/HostSection';
import ThingsToKnow from './components/ThingsToKnow/ThingsToKnow';
import NearbyListings from './components/NearbyListings/NearbyListings';
import BookingCard from './components/BookingCard/BookingCard';
import AmenitiesModal from './components/AmenitiesModal/AmenitiesModal';
import PhotoTour from './components/PhotoTour/PhotoTour';
import Lightbox from './components/Lightbox/Lightbox';
import { useScrollSpy } from './hooks/useScrollSpy';
import './App.css';

export default function App() {
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isAmenitiesModalOpen, setIsAmenitiesModalOpen] = useState(false);

  // Track active section for sticky navigation
  const activeSection = useScrollSpy(['photos', 'amenities', 'reviews', 'location']);

  const handleOpenPhotoTour = () => {
    setIsPhotoTourOpen(true);
  };

  const handleClosePhotoTour = () => {
    setIsPhotoTourOpen(false);
  };

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  const handleNavigateLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handleOpenAmenities = () => {
    setIsAmenitiesModalOpen(true);
  };

  const handleCloseAmenities = () => {
    setIsAmenitiesModalOpen(false);
  };

  return (
    <div className="app-container">
      {/* Top Airbnb Global Header */}
      <Header />

      {/* Dynamic Sticky Navigation appearing on scroll */}
      <StickyNavigation activeSection={activeSection} />

      {/* Main Listing Content Container */}
      <main className="listing-main">
        <div className="listing-content-wrapper">
          {/* Property Title & Share / Save */}
          <PropertyHeader />

          {/* 5-Image Asymmetric Hero Gallery */}
          <HeroGallery
            onShowAllPhotos={handleOpenPhotoTour}
            onImageClick={handleOpenLightbox}
          />

          {/* Two-Column Grid: left content + sticky booking widget.
              Only sections that should appear beside the sidebar go here.
              Reviews and below are OUTSIDE this flex container so the
              sticky sidebar stops naturally after Calendar. */}
          <div className="property-columns">
            <div className="property-primary-column">
              <PropertyContent />
              <SleepingArrangements />
              <Amenities onShowAll={handleOpenAmenities} />
              <Calendar />
            </div>

            <div className="property-sidebar-column">
              <BookingCard />
            </div>
          </div>

          {/* Full-width sections — sidebar is NOT sticky here */}
          <Reviews />
          <LocationMap />
          <HostSection />
          <ThingsToKnow />
          <NearbyListings />
        </div>
      </main>


      {/* Overlays / Modals */}
      <AmenitiesModal
        isOpen={isAmenitiesModalOpen}
        onClose={handleCloseAmenities}
      />

      <PhotoTour
        isOpen={isPhotoTourOpen}
        onClose={handleClosePhotoTour}
        isViewerOpen={isLightboxOpen}
        onImageClick={(index) => {
          handleOpenLightbox(index);
        }}
      />

      <Lightbox
        isOpen={isLightboxOpen}
        currentIndex={lightboxIndex}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigateLightbox}
        onOpenPhotoTour={handleOpenPhotoTour}
      />
    </div>
  );
}
