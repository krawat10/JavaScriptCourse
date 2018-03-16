var path = window.location.href;
console.log(path); //http://localhost/JavaScript/RegExp/

var pathElements = path.split('/');
console.log(pathElements); //["http:", "", "localhost", "JavaScript", "RegExp", ""]

var title = "Some title - example 32";
title = title.split(" - ");
console.log(title); //["Some title", "example 32"]

title = "Some title-   example 32";
title = title.split(/ *- */); //Splitowanie '- ', ' - ', '   -', '  -    '
console.log(title); //["Some title", "example 32"]