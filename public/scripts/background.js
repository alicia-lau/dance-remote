/* eslint-disable no-undef */
// In background.js
let isContentScriptReady = false;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "contentScriptReady") {
    console.log("Content script is ready.");
    isContentScriptReady = true;
    // Optionally, store the tab id if you need to send messages specifically to this tab later
    let tabId = sender.tab.id;
  }
});

// Remove the unused function
// function sendMessageToContentScript(tabId, message) {
//   if (isContentScriptReady) {
//     chrome.tabs.sendMessage(tabId, message, response => {
//       if (chrome.runtime.lastError) {
//         console.error('Error sending message:', chrome.runtime.lastError);
//       } else {
//         console.log('Response received:', response);
//       }
//     });
//   } else {
//     console.log("Content script is not ready.");
//   }
// }
