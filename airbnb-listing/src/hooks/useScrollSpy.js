import { useEffect, useState } from 'react';

/**
 * Observes section elements and returns the ID of the section 
 * currently most visible in the viewport.
 */
export function useScrollSpy(sectionIds, offset = 80) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const observers = [];
    const visibleSections = new Map();

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleSections.set(id, entry.intersectionRatio);
            } else {
              visibleSections.delete(id);
            }
          });

          // Find the section with highest visibility
          let maxRatio = 0;
          let maxId = null;
          visibleSections.forEach((ratio, sectionId) => {
            if (ratio > maxRatio) {
              maxRatio = ratio;
              maxId = sectionId;
            }
          });

          if (maxId) {
            setActiveSection(maxId);
          }
        },
        {
          rootMargin: `-${offset}px 0px -40% 0px`,
          threshold: [0, 0.25, 0.5, 0.75, 1],
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds, offset]);

  return activeSection;
}
