// check that contentScript is being run
console.log("Content script running");

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("Message received:", request);
    if (request.action === 'toggleMirror') {
      const videos = document.querySelectorAll('video');
      if (videos.length > 0) {
        videos.forEach(video => {
            // Perform operations on each video
          if (video.style.transform === 'scaleX(-1)') {
            video.style.transform = ''; // Reset to default
          } else {
            video.style.transform = 'scaleX(-1)'; // Apply mirror effect
          }
          sendResponse({status: 'Mirror toggled'});
        });
      } else {
          console.log("No video elements found on the page.");
      }
    }
  });
  