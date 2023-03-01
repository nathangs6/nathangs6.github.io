function collapse(divID, buttonID, hideText, showText) {
    var divObject = document.getElementById(divID);
    var buttonObject = document.getElementById(buttonID);
    if (divObject.style.display === "block") {
        divObject.style.display = "none";
        buttonObject.value = showText;
    } else {
        divObject.style.display = "block";
        buttonObject.value = hideText;
    }
}

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

function addVarToLink(link, varName, varValue) {
    if (link.includes("?")) {
        return link + "&" + varName + "=" + varValue;
    } else {
        return link + "?" + varName + "=" + varValue;
    }
}

function loadTheme() {
    var theme = getVar("theme");
    var cssInputLoc = document.getElementById("theme");
    if (theme === "day") {
        cssInputLoc.href="css/day.css";
    } else if (theme === "night") {
        cssInputLoc.href="css/night.css";
    } else if (theme === "terminal") {
        cssInputLoc.href="css/terminal.css";
    } else {
        cssInputLoc.href="css/day.css";
        location.replace(addVarToLink(location.href, "theme", "day"))
    }
}

function updateInternalLinks() {
    var theme = getVar("theme");
    var internalLinks = document.getElementsByClassName("internal-link");
    for (var i=0;i<internalLinks.length;i++) {
        internalLinks[i].href = addVarToLink(internalLinks[i].href, "theme", theme);
    }
}