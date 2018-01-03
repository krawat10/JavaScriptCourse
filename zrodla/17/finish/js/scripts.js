var xhr = new XMLHttpRequest();

xhr.open("GET", "o-nas.html", true);

xhr.onreadystatechange = function(e) {

    if(this.readyState === 4 && this.status === 200) {
        console.log(this.response);
    }

};

function logType(e) {
    console.log(e.type);
}

// xhr.timeout = 1;

xhr.onloadstart = logType;
xhr.onprogress = logType;
xhr.onabort = logType;
xhr.onerror = logType;
xhr.onload = logType;
xhr.ontimeout = logType;
xhr.onloadend = logType;

xhr.send(null);

// xhr.abort();


// UNSENT = 0
// OPENED = 1
// HEADERS_RECEIVED = 2
// LOADING = 3
// DONE = 4