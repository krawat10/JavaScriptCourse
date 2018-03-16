var files = [
    "picture-thumb-150x150.jpg",
    "beach-thumb-150x150.jpg",
    "monako-thumb-150x150.jpg",
    "sportcar-thumb-300x300.jpg",
    "brazil-big-2000x2000.jpg",
];

var regex = /150x150/;

//{RegExp}.test({string}) zwraca true lub false jeśli string ma określony "match".
var thumbs = files.filter(function(file) {
    console.log(regex.test(file)); // true/false
    return regex.test(file);
});

console.log(thumbs); //["picture-thumb-150x150.jpg", "beach-thumb-150x150.jpg", "monako-thumb-150x150.jpg"]

