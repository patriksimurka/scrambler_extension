document.addEventListener('DOMContentLoaded', function() {
	let bgpage = chrome.extension.getBackgroundPage();

	var message = bgpage.state;

	console.log(message);
	
	if(message === null) {
		message = 'off';
	};

	if (message === 'on') {
		document.getElementById('check').checked = true;
	}

	var check_box = document.getElementById('check');
	check_box.addEventListener('change', function() {

		document.getElementById('refresh').addEventListener('click', function() {
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        		chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
    		});
		});

		document.getElementById('refresh').style.display = 'block';

		if (check_box.checked) {
			
			var message = 'on';
			//chrome.runtime.sendMessage(message);
			chrome.storage.local.set({'state': message});
			bgpage.state = message;
  			
		} else {
		
			var message = 'off';
			//chrome.runtime.sendMessage(message);	
			chrome.storage.local.set({'state': message});
			bgpage.state = message;
		
		}

	});
	
});



