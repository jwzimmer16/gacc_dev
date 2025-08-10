document.addEventListener('DOMContentLoaded', function() {
  var videoBtn = document.querySelector('.video-btn');
  var popup = document.getElementById('video-popup');
  var closeBtn = document.querySelector('.video-popup-close');
  var iframe = popup ? popup.querySelector('iframe') : null;
  var originalSrc = iframe ? iframe.src : '';

  if (videoBtn && popup && closeBtn && iframe) {
    videoBtn.addEventListener('click', function(e) {
      e.preventDefault();
      popup.style.display = 'flex';
      iframe.src = originalSrc; // Reset src in case it was cleared
    });
    closeBtn.addEventListener('click', function() {
      popup.style.display = 'none';
      iframe.src = ''; // Stop video and sound
    });
  }
});