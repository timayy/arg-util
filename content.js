// Listen for messages
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // If the received message has the expected format...
    if (message.command === 'getDom') {
        // Call the specified callback, passing
        // the web-page's DOM content as argument

        // sendResponse(document.outerHTML);
        sendResponse("TESTTEST");
    }
});