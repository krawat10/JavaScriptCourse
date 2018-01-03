var xhr = new XMLHttpRequest();

// xhr.readyState - Stan obiektu XMLHttpRequest (0-4)
// UNSENT = 0 - obiekt nie jest otwarty
// OPENED = 1
// HEADERS_RECIEVED = 2
// LOADING = 3
// DONE = 4

console.log(xhr.readyState);    //0

//Budowanie żadania AJAX
//typ, url(relatywny/cały), asynchroniczny(true, false), [użytkownik], [hasło] 
xhr.open('GET', "onas.html", true);

console.log(xhr.readyState);    //1

//Obsługa zdarzeń XMLHttpRequest
xhr.onreadystatechange = function(event) {
    //this == xhr
    console.log("Zmiana stanu na " + this.readyState);

    //Gdy nastąpi DONE i zwróci 200(OK). Wtedy mamy dostęp do response.
    if(this.readyState === 4 && this.status === 200){
        console.log("Success!");
        console.log(this.response); //Zwórcony kod html.
        //document.write(this.response);    //Przeładowanie strony na przeglądarce (niezalecane)
    }
}

//Wywyłanie żadania. W argumencie możemy podać różne dodatkowe dane, ale mamy GET (mamy w querysting)
xhr.send(null); //XHR finished loading: GET "http://dev-test/AJAX/onas.html".

console.log(xhr.response)   //Nic się nie wyświetli bo żądanie asynchroniczne!

console.log(xhr.readyState);    //4


function logType(e) {
    console.log(e.type);
}

xhr.onloadstart = logType;      //Event gdy zaczynamy wczytywanie
xhr.onprogress = logType;   //Event gdy jest wczytywane
xhr.onabort = logType;  //Event gdy porzucimy wczytywanie (xhr.abort())
xhr.onerror = logType;  //Event gdy jest błąd
xhr.onload = logType;   //Event gdy wczytamy wszystko (tylko gdy zwrócone zostaną dane)
xhr.ontimeout = logType;    //Event gdy przekroczymy czas oczekiwania (xhr.timeout = 1; (1 ms))
xhr.onloadend = logType;    //Event gdy wczytamy wszystko (zawsze)