chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'toggleMirror') {
      const videos = document.querySelectorAll('video');
      videos.forEach(video => {
        if (video.style.transform === 'scaleX(-1)') {
          video.style.transform = ''; // Reset to default
        } else {
          video.style.transform = 'scaleX(-1)'; // Apply mirror effect
        }
      });
      sendResponse({status: 'Mirror toggled'});
    }
  });
  