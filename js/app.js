document.addEventListener("DOMContentLoaded", function () {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const closeButton = document.querySelector(".close-button");
  const overlay = document.querySelector(".hamburger-overlay");

  // Open Overlay
  hamburgerButton.addEventListener("click", () => {
    gsap.to(overlay, {
      duration: 0.5,
      height: "82vh",
      ease: "bounce.out",
      opacity: 1,
      onStart: () => {
        overlay.style.visibility = "visible";
      },
    });
  });

  // Close Overlay
  const closeOverlay = () => {
    gsap.to(overlay, {
      duration: 0.5,
      height: "0px",
      ease: "power2.out",
      opacity: 0,
      onComplete: () => {
        overlay.style.visibility = "hidden";
      },
    });
  };

  closeButton.addEventListener("click", closeOverlay);

  // Close overlay when clicking outside
  document.addEventListener("click", (e) => {
    if (
      overlay.offsetHeight > 0 &&
      !overlay.contains(e.target) &&
      !hamburgerButton.contains(e.target)
    ) {
      closeOverlay();
    }
  });
});
