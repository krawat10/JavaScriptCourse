var xhr = new XMLHttpRequest();

console.log( xhr.readyState );

xhr.open("GET", "o-nas.html", true);

console.log( xhr.readyState );

xhr.send(null);

console.log( xhr.response );

// UNSENT = 0
// OPENED = 1
// HEADERS_RECEIVED = 2
// LOADING = 3
// DONE = 4