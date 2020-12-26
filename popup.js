


document.addEventListener('DOMContentLoaded', function() {

	var message = localStorage.getItem("state");
	console.log(message);
	if(message === null) {
		message = 'off';
	};


	if (message === 'on') {
		document.getElementById('check').checked = true;
	}	
	var check_box = document.getElementById('check');
	check_box.addEventListener('change', function() {
		if (check_box.checked) {
			chrome.storage.local.set({'on': true}, function() {
  				console.log('Value is set to ' + 'true');
  				var message = 'on';
  				//chrome.runtime.sendMessage(message);
  				localStorage.setItem("state", message);	
  			
  			});
		} else {
		chrome.storage.local.set({'on': true} ,function() {
  				console.log('Value is set to ' + 'false');
  				var message = 'off';
  				//chrome.runtime.sendMessage(message);	
  				localStorage.setItem("state", message);
 	 		});
		
		}

	});
});

chrome.runtime.onMessage.addListener(receiver);

function receiver(request, sender, sendResponse) {

	
	if (request.type == "getText") {
		console.log(message);
        sendResponse({result: message});
    };
};

localStorage.setItem("state", localStorage.getItem('state'));