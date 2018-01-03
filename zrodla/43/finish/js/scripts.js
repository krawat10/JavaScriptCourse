var redTheme = document.querySelector("#redTheme"),
    button = document.querySelector("#disableTheme");


button.onclick = function() {

    // redTheme.setAttribute("disabled", "disabled");
    redTheme.setAttribute("media", "none");

};