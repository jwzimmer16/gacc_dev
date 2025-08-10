document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.gallery-slider');
  const basePath = slider.getAttribute('data-baseurl');
  const images = [
    'Image 1_Website.jpg',
    'Image 2_Website.jpg',
    'Image 3_Website.jpg',
    'Image 4_Website.jpg'
  ];
  let current = 0;
  const img = document.getElementById('gallery-slide');
  setInterval(function() {
    current = (current + 1) % images.length;
    img.style.opacity = 0;
    setTimeout(function() {
      img.src = basePath + images[current];
      img.style.opacity = 1;
    }, 500);
  }, 10000);
});