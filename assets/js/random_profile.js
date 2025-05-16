// Random profile image selection
document.addEventListener("DOMContentLoaded", function () {
  // Get all available profile images
  const profileImages = [
    "profile/prof_pic_1.jpg",
    "profile/prof_pic_2.jpg", // Make sure these files exist in assets/img/profile/
  ];

  // Select a random image
  const randomImage = profileImages[Math.floor(Math.random() * profileImages.length)];

  // Find the profile image element and update its src
  const profileImageElement = document.querySelector(".profile img");
  if (profileImageElement) {
    // Get the current src
    const currentSrc = profileImageElement.getAttribute("src");
    // Get the base path (everything before the filename)
    const basePath = currentSrc.substring(0, currentSrc.lastIndexOf("/") + 1);
    // Construct the new src with the base path and the random image filename
    const newSrc = basePath + randomImage;
    profileImageElement.setAttribute("src", newSrc);
  }
});
