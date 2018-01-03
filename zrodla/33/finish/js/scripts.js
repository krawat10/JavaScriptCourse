var loc = window.location.href,
    title = document.querySelector("h1").textContent;

var pathElements = loc.split("/");
// pathElements.pop()

var titleParts = title.split(/ *- */);