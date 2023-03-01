function loadPageNotFound() {
	var data = getVar("title");
	document.getElementById("day-link").href = "page_not_found.html?title=" + data + "&theme=day";
	document.getElementById("night-link").href = "page_not_found.html?title=" + data + "&theme=night";
	document.getElementById("terminal-link").href = "page_not_found.html?title=" + data + "&theme=terminal";

	data = data.replaceAll('_',' ');
	var vars = document.getElementsByClassName("to-replace")
	for (var i=0;i<vars.length;i++) {
		vars[i].innerHTML = data;
	}
	// document.getElementById("title").innerHTML = data;
	document.title = data;
}