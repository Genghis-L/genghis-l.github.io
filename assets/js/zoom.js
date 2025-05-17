// Initialize medium zoom.
$(document).ready(function () {
  // Detect if using Distill layout
  const isDistill = document.querySelector('.post.distill') !== null;
  
  // Simple initialization function
  function initZoom() {
    // Clean up previous instance if exists
    if (window.mediumZoomInstance) {
      window.mediumZoomInstance.detach();
    }
    
    // Create new instance
    window.mediumZoomInstance = mediumZoom('[data-zoomable]', {
      background: getComputedStyle(document.documentElement).getPropertyValue('--global-bg-color') + 'ee',
      margin: 24,
      // Increased transition duration
      transition: {
        duration: 400,
        timingFunction: 'ease'
      }
    });
  }
  
  // Use delayed loading for Distill layout
  if (isDistill) {
    // Ensure initialization after page is fully loaded
    window.addEventListener('load', function() {
      setTimeout(initZoom, 500);
    });
  } else {
    // For regular layouts, initialize immediately
    initZoom();
  }
});
