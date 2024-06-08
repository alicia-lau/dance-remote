chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'mirror') {
    console.log('Received mirror action in background');
    // Perform any background tasks here

    // Get the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        const activeTab = tabs[0];
        console.log('Active Tab:', activeTab);

        // Execute a content script in the active tab
        chrome.scripting.executeScript(
          {
            target: { tabId: activeTab.id },
            files: ['contentScript.js']
          },
          () => {
            if (chrome.runtime.lastError) {
              console.error('Execute script error:', chrome.runtime.lastError);
              sendResponse({ status: 'error', message: chrome.runtime.lastError.message });
            } else {
              console.log('Content script executed successfully');
              sendResponse({ status: 'success', message: 'Content script executed' });
            }
          }
        );
      } else {
        console.error('No active tab found');
        sendResponse({ status: 'error', message: 'No active tab found' });
      }
    });

    // Return true to keep the message channel open for sendResponse
    return true;
  } else {
    sendResponse({ status: 'error', message: 'Unknown action' });
    return false;
  }
});
