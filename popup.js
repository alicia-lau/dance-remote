/* 
MVP TO DO:
- Add Speed Functionality
- Add Loop Functionality
- Add storage call to set up API based on previous inputs
*/

/*
STRETCH TO DO:
  - Add Speed Icon Color Change
  - Add Loop Icon Color Change
  - Add Tooltips
*/



// Mirror Button Functionality
document.getElementById('mirrorButton').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'mirror' }, (response) => {
    if (chrome.runtime.lastError) {
      console.error('Send message error:', chrome.runtime.lastError);
    } else {
      console.log('Message sent successfully:', response);
    }
  });
  // Change Icon Color
  const red = getComputedStyle(document.querySelector(":root")).getPropertyValue("--red");
  const gray = getComputedStyle(document.querySelector(":root")).getPropertyValue("--gray");
  if (document.getElementById("mirror-icon-container").style.backgroundColor === red || document.getElementById("mirror-icon-container").style.backgroundColor === "rgb(255, 71, 87)") {
    document.getElementById("mirror-icon-container").style.backgroundColor = gray;
  } else {
    document.getElementById("mirror-icon-container").style.backgroundColor = red;
  }
});
