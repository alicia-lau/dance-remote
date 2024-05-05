/* eslint-disable no-undef */
// check that contentScript is being run
console.log('contentScript.js is running at:', document.readyState);
console.log("Content script ready to receive messages");

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "toggleMirror") {
      const videos = document.querySelectorAll('video');
      videos.forEach(video => {
          if (video.style.transform === 'scaleX(-1)') {
              video.style.transform = ''; // Reset to default
          } else {
              video.style.transform = 'scaleX(-1)'; // Mirror the video
          }
      });
      sendResponse({status: 'Mirror toggled'});
  }
});