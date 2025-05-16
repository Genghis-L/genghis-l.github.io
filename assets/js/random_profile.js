// Random profile image selection
document.addEventListener("DOMContentLoaded", function () {
  console.log("Random profile script loaded");
  // Get all available profile images
  const profileImages = [
    "profile/prof_pic_1.jpg",
    "profile/prof_pic_2.jpg", // Make sure these files exist in assets/img/profile/
  ];
  
  console.log("Available profile images:", profileImages);

  // Select a random image
  const randomImage = profileImages[Math.floor(Math.random() * profileImages.length)];
  console.log("Selected random image:", randomImage);

  // Find the profile image element and update its src
  const profileImageElement = document.querySelector(".profile img");
  console.log("Profile image element found:", profileImageElement ? "yes" : "no");
  
  if (profileImageElement) {
    // Get the current src
    const currentSrc = profileImageElement.getAttribute("src");
    console.log("Current src:", currentSrc);
    
    // Get the base path (everything before the filename)
    const basePath = currentSrc.substring(0, currentSrc.lastIndexOf("/") + 1);
    console.log("Base path:", basePath);
    
    // Construct the new src with the base path and the random image filename
    const newSrc = basePath + randomImage;
    console.log("New src:", newSrc);
    
    profileImageElement.setAttribute("src", newSrc);
    console.log("Image src updated");
  } else {
    console.log("Profile image element not found");
  }
});
