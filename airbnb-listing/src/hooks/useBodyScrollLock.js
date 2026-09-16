import { useEffect } from 'react';

let lockCount = 0;
let preservedScrollY = 0;

/**
 * Locks body scroll when active (for modals/overlays).
 * Supports nested/stacked modals with reference counting.
 * Restores original scroll position when all modals are closed.
 */
export function useBodyScrollLock(isLocked) {
  useEffect(() => {
    if (isLocked) {
      if (lockCount === 0) {
        preservedScrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${preservedScrollY}px`;
        document.body.style.width = '100%';
        document.body.classList.add('modal-open');
      }
      lockCount++;

      return () => {
        lockCount--;
        if (lockCount <= 0) {
          lockCount = 0;
          document.body.style.position = '';
          document.body.style.top = '';
          document.body.style.width = '';
          document.body.classList.remove('modal-open');
          window.scrollTo(0, preservedScrollY);
        }
      };
    }
  }, [isLocked]);
}

