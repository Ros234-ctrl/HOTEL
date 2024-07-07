const welcomeText = document.getElementById('welcome');

// Initial Animation
welcomeText.style.transition = 'opacity 1s ease-in-out';
welcomeText.style.opacity = '1';

// Animating Text
let isFading = false;
setInterval(() => {
  if (!isFading) {
    welcomeText.style.opacity = '0';
  } else {
    welcomeText.style.opacity = '1';
  }
  isFading = !isFading;
}, 2000); // Change the duration as needed
