var p = document.querySelector("p");

// var regex = new RegExp("\\w+@\\w+\\.\\w{2,4}", "ig");
var regex = /\w+@(\w+\.\w{2,4})/g;

var search = p.textContent.match(regex);
// var search = regex.exec(p.textContent);