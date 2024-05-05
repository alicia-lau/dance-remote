/* eslint-disable no-undef */
import React from 'react';

const MirrorToggle = ({ isMirrored, onToggleMirror }) => {
  const toggleMirror = () => {
    // Query the active tab to ensure we are sending the message to the correct place
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {action: 'toggleMirror'}, (response) => {
            if (chrome.runtime.lastError) {
                console.error("Error sending message:", chrome.runtime.lastError);
            } else {
                console.log("Response:", response.status);
            }
        });
    });
};

return (
    <button onClick={toggleMirror}>Toggle Mirror</button>
);
};

export default MirrorToggle;
