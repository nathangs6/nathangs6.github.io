function getVar(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) {
			return pair[1];
		}
	}
	return false;
}

function loadPage() {
	var data = getVar("title");
	data = data.replace('_',' ');
	document.getElementById("title").innerHTML = data;
	document.title = data;
}