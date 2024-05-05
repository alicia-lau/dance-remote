// create background.js file
// Add the following code to the background.js file
// This code will listen for the onInstalled event and display a message in the console when the extension is installed.
chrome.runtime.onInstalled.addListener(function() {
    console.log('Extension Installed');
});
