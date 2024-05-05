/* eslint-disable no-undef */
import React from 'react';

const MirrorToggle = ({ isMirrored, onToggleMirror }) => {
   // Function to send a message to the content script
   const toggleMirror = () => {
    // Query the active tab to ensure we are sending the message to the correct place
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'toggleMirror'});
    });
  };

  return (
    <button onClick={toggleMirror}>Toggle Mirror</button>
  );
};

export default MirrorToggle;
