var files = [
    "picture-thumb-150x150.jpg",
    "beach-thumb-150x150.jpg",
    "monako-thumb-150x150.jpg",
    "sportcar-thumb-300x300.jpg"
];

var regex = /-thumb-\d{1,4}x\d{1,4}/;

files.forEach(function(file, i) {

    var index = file.search(regex);

    if(index > -1) {
        files[i] = file.substring(0, index);
    }

});

function stringContains(string, pattern) {

    var regex = new RegExp(pattern),
        index = string.search(regex);

    return index > -1;

}