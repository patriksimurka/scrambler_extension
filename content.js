
function replaceAllWords() {
    for (var i = 0; i < document.childNodes.length; i++) {
        checkNode(document.childNodes[i]);
    }
    function checkNode(node) {
        var nodeName = node.nodeName.toLowerCase();
        if(nodeName === 'script' || nodeName === 'style') {return;}
        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var newText = [];
            for(word of text.split(' ')){
            	var flag = true;
            	for(char of word){
            		if (['.',',','"','(',')','#','\'','’'].includes(char)){
            			flag = false;
            		}
            	}
            	if (flag){
            		newText.push(word.replace(/\b\w+/g, shuffle(word)));
            	} else {
            		newText.push(word);
            	}
            }
           	
            node.nodeValue = newText.join(' ');
        }
        if (node.childNodes.length > 0) {
            for (var j = 0; j < node.childNodes.length; j++) {
                checkNode(node.childNodes[j]);
            }
        }
    }
}

function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}

function shuffle(s) {
  var arr = s.split('');          
  var n = arr.length;             
  
  for(var i=0 ; i<n-1 ; ++i) {
    var j = getRandomInt(n);       
    
    var temp = arr[i];             
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  s = arr.join('');               
  return s;                        
}

var state = 'off'

chrome.runtime.onMessage.addListener(receiver);

function receiver(request, sender, sendResponse) {
	state = request;
	console.log(state);
}

chrome.runtime.sendMessage({
    type: "getText"
})/*.then(function(message) {
    var state = message.result;
    console.log(state);
});*/

var delayInMilliseconds = 100; 

setTimeout(function() {
  if (!( state == undefined || state === 'off')){
replaceAllWords();
}

}, delayInMilliseconds);







