document.getElementById('mirrorButton').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'mirror' }, (response) => {
    if (chrome.runtime.lastError) {
      console.error('Send message error:', chrome.runtime.lastError);
    } else {
      console.log('Message sent successfully:', response);
    }
  });
});
