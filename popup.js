document.addEventListener('DOMContentLoaded', function() {
	var check_box = document.getElementById('check');
	check_box.addEventListener('change', function() {
		if (check_box.checked) {
			chrome.storage.local.set({'on': true}, function() {
  				console.log('Value is set to ' + 'true');
  				var message = 'on';
  				chrome.runtime.sendMessage(message);	
  			
  			});
		} else {
		chrome.storage.local.set({'on': true} ,function() {
  				console.log('Value is set to ' + 'false');
  				var message = 'off';
  				chrome.runtime.sendMessage(message);	
  				
 	 		});
		
		}
	});
});