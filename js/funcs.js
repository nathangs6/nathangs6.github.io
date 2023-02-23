function collapse(divID, buttonID) {
    var divObject = document.getElementById(divID);
    var buttonObject = document.getElementById(buttonID);
    if (divObject.style.display === "block") {
        divObject.style.display = "none";
        buttonObject.value = "show";
    } else {
        divObject.style.display = "block";
        buttonObject.value = "hide";
    }
}