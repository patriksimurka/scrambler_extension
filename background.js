

chrome.runtime.onMessage.addListener(receiver);

function receiver(request, sender, sendResponse) {

	
	if (request.type == "getText") {
		chrome.runtime.sendMessage({
        type: "getText"
    }).then(function(message) {
        var state = message.result;
        chrome.runtime.sendMessage(state);
    });

    }
};

