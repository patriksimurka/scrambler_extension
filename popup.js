document.addEventListener('DOMContentLoaded', function() {
	try{
	document.getElementById('check').checked = chrome.storage.local.get(['on']);
	console.log(chrome.storage.local.get(['on']));
	} catch (e){
	console.log('upsik')
	}

	var check_box = document.getElementById('check');
	check_box.addEventListener('change', function() {
		if (check_box.checked) {
			chrome.storage.local.set({'on': true}, function() {
  				console.log('Value is set to ' + 'true');
  			});
		} else {
		chrome.storage.local.set({'on': true} ,function() {
  				console.log('Value is set to ' + 'false');
 	 		});
		}
	});
});