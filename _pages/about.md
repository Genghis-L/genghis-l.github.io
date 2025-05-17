---
layout: about
title: About
permalink: /
subtitle: <a href="https://shanghai.nyu.edu/">NYU Shanghai</a>. Senior Undergraduate. Honors Mathematics & Data Science(AI).

profile:
  align: right
  image: profile/prof_pic_1.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>Email: kl4747@nyu.edu</p>
    <p>Shanghai, New York</p>

news: true # includes a list of news items
selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page
---

{% include social_inline.liquid %}

My name is Kehan(Genghis) Luo (骆可瀚), and I am currently a senior undergraduate at <a href="https://shanghai.nyu.edu/">NYU Shanghai</a>, pursuing a double major in Honors Mathematics and Data Science(AI track). I am deeply passionate about the future of machine learning and have conducted research in areas such as diffusion models, high-dimensional sampling, and learning theory, exploring both theoretical and practical approaches. Additionally, I am highly interested in applying machine learning techniques to various fields including medical treatment, finance, etc.

<script>
// Inline random profile script
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    console.log("Inline profile randomizer running");
    const images = ["prof_pic_1.jpg", "prof_pic_2.jpg"];
    const randomImg = images[Math.floor(Math.random() * images.length)];
    
    const profileImg = document.querySelector(".profile img");
    if (profileImg) {
      console.log("Found profile image:", profileImg);
      // Force a specific image for testing
      const basePath = "/assets/img/profile/";
      const newSrc = basePath + randomImg + "?t=" + new Date().getTime();
      console.log("Setting new src:", newSrc);
      profileImg.src = newSrc;
    } else {
      console.log("Profile image not found");
    }
  }, 500); // Delay to ensure DOM is fully loaded
});
</script>
