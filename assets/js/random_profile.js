// Random profile image selection
document.addEventListener("DOMContentLoaded", function () {
  console.log("Random profile script loaded and executing");

  // Only store the filenames here
  const profileImages = ["prof_pic_1.jpg", "prof_pic_2.jpg"];

  console.log("Available profile images:", profileImages);

  // Select a random image
  const randomIndex = Math.floor(Math.random() * profileImages.length);
  const randomImage = profileImages[randomIndex];
  console.log("Selected random image:", randomImage, "at index:", randomIndex);

  // Try multiple selectors for reliability
  const profileImageElement = document.getElementById("profile-image") || document.querySelector(".profile img");

  console.log("Profile image element found:", profileImageElement ? "yes" : "no");

  if (profileImageElement) {
    try {
      // Get the current src
      const currentSrc = profileImageElement.getAttribute("src");
      console.log("Current src:", currentSrc);

      if (!currentSrc) {
        console.error("Current src is empty");
        return;
      }

      // Get site base URL for absolute path construction
      const siteBaseUrl = window.location.origin;
      console.log("Site base URL:", siteBaseUrl);

      // Create a new absolute path with the random image
      let newSrc;

      // For direct replacement approach
      if (currentSrc.includes("prof_pic_")) {
        // Just replace the filename part while keeping the path and cache busting
        newSrc = currentSrc.replace(/prof_pic_[0-9]+\.(jpg|png)/i, randomImage);
        console.log("Using replacement approach, new src:", newSrc);
      } else {
        // Fallback to the full path construction
        const basePath = currentSrc.substring(0, currentSrc.lastIndexOf("/") + 1);
        newSrc = basePath + randomImage;
        console.log("Using base path approach, new src:", newSrc);
      }

      // Force cache busting by adding a timestamp
      newSrc = newSrc.includes("?") ? newSrc + "&t=" + new Date().getTime() : newSrc + "?t=" + new Date().getTime();

      console.log("Final src with cache busting:", newSrc);

      // For debugging - check if image exists before setting
      const testImg = new Image();
      testImg.onload = function () {
        console.log("✅ Image exists and loaded successfully:", newSrc);
        // Update the src
        profileImageElement.setAttribute("src", newSrc);
        console.log("Image src updated successfully to:", newSrc);
      };
      testImg.onerror = function () {
        console.error("❌ Image failed to load:", newSrc);
        console.log("Check if image file exists at this path");
      };
      testImg.src = newSrc;
    } catch (error) {
      console.error("Error updating image:", error);
    }
  } else {
    console.log("Profile image element not found");
    // Try alternate selector methods for debugging
    console.log("All img tags found:", document.querySelectorAll("img").length);
    const allImages = document.querySelectorAll("img");
    for (let i = 0; i < allImages.length; i++) {
      console.log("Image", i, "src:", allImages[i].src);
    }
    console.log("All profile containers:", document.querySelectorAll(".profile").length);
  }
});
