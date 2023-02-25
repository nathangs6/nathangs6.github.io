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