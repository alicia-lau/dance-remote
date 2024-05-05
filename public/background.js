// create background.js file
// Add the following code to the background.js file
// This code will listen for the onInstalled event and display a message in the console when the extension is installed.
chrome.runtime.onInstalled.addListener(function() {
    console.log('Extension Installed');
});
chrome.runtime.onInstalled.addListener(() => {
        console.log("Extension installed");
    });
// Step 4: Load the Extension
// To load the extension, follow these steps:
// Open the Chrome browser.
// Click the three vertical dots in the top-right corner of the browser window.
// Select More tools > Extensions.
// Enable the Developer mode toggle switch in the top-right corner of the Extensions page.
// Click the Load unpacked button in the top-left corner of the Extensions page.
// Select the directory that contains the extension files.
// Click the Select Folder button.
// The extension will be loaded and displayed in the Extensions page.
// Step 5: Test the Extension
// To test the extension, follow these steps:  