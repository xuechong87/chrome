chrome.commands.onCommand.addListener(function(command) {
	if (command == "tab-back") {
		chrome.tabs.getSelected(null, function(tab) {
			chrome.tabs.query({"index":tab.index-1}, function (results){
				updateTab(results);
			});
		});
	}
	
	if (command == "tab-forward") {
		chrome.tabs.getSelected(null, function(tab) {
			chrome.tabs.query({"index":tab.index+1}, function (results){
				updateTab(results);
			});
		});
	}
});

function updateTab(queryResults){
	if(queryResults[0]){
		chrome.tabs.update(queryResults[0].id, {'selected': true});
	}
}