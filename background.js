window.state = 'off'

chrome.runtime.onMessage.addListener(receiver);

function receiver(request, sender, sendResponse) {
	
	if (request.type == "getText") {
		console.log(window.state);	
        chrome.tabs.query({}, function(tabs) {
    		var message = window.state;
    		for (var i=0; i<tabs.length; ++i) {
        		chrome.tabs.sendMessage(tabs[i].id, message);
   			}
		});
    }
}