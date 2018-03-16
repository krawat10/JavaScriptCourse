// Cookies - pliki tekstowe po stronie klienta które są wysyłane z każdym żądaniem HTTP
// Serwer-nagłówek:
// Set-cookie: value;[;max-age=sekundy][;domain=domena][;path=scieżka][;secure][;HttpOnly]
// value - firstName=Jan;age=12 (jakieś wartości)
// max-age - 430000 (czas przydatności ciastka, do kiedy wysyłać)
// domain - .eduweb.pl (jak .eduweb.pl to może pasować blog.eduweb.pl, portal.eduweb.pl etc. )
// path - /strefa-klienta (/ dla całej domeny przy których scieżkach ciasteczko jest dobre)
//
// Limit - 4KB!
// Dostęp:
// document.cookie (firstName=Jan;age=12)
// Ciasteczka można przypisywać z poziomu JS tylko wtedy gdy spełniają kryteria bezpieczeństwa
// Gdy serwer ustawi cookies, w każdym zapytaniu (nawet o plik js) bedzie dołączony nagłówek 'Cookie'.
// Działa to przy zakresia ciasteczka '/'.

console.log(document.cookie);   //"session=331a2164f460e3e1d41bf75969e64ce5"


//Cookie powinno wyglądać następująco (wartości muszą być endkodowane):
//session=3b1a33f81b8614762227f9614f0ca3c4; expires=Mon, 05-Mar-2018 01:12:26 GMT; Max-Age=5184000; path=/
function setCookie(name, value, days, path, domain, secure) {
    if (!navigator.cookieEnabled) return;

    var e = encodeURIComponent; //Ciasteczka trzeba enkodować

    var cookie = e(name) + '=' + e(value); //klucz-wartość enkodowane

    //Ważność ciasteczka (kiedy wygasa)
    if (typeof (days) === "number") {
        var date = new Date();

        //Utworzenie daty (dzisiejsza + 'days' w milisekundach)
        date.setTime(date.getTime() + days * 1000 * 60 * 60 * 24);

        cookie += '; expires=' + date.toGMTString(); //'toGMTString' - format dla ciasteczek 
    }

    //Zakres działania ciasteczka ('/' - cała strona)
    if (path) {
        cookie += '; path=' + path;
    }

    //Domena gdzie będzie serwowane ciasteczko (np. eduweb.pl).
    if (domain) {
        cookie += '; domain=' + domain;
    }

    //Jeśli ciasteczko ma secure, będzie ono dostępne tylko przy protokole 'https'.
    if (secure) {
        cookie += "; secure;";
    }

    document.cookie = cookie;
}

//Odczytywanie cookie. Nie da rady odczytać ich w inny sposób (documen.cookie.name).
//Jest to string typu "key=value; key1=val2;key3=val3;"
function getCookie(name) {
    if (!document.cookie) return null;

    //Tablica stringów: ["key=value", "key1=val2"]
    var arr = document.cookie.split(/; */); //Wyrażenie reguralne na ';' lub '; '.
    
    var cookies = {};

    arr.forEach((cookie) =>{
        //rozdzielenie "key=value" na ["key", "value"]
        cookie = cookie.split('=');
        //Dodanie wartości klucz-wartość. Wartości są enkodowane i trzeba je odkodować.
        cookies[cookie[0]] = decodeURIComponent(cookie[1]);
    })

    return cookies[name] || null;
}

setCookie("firstName", "Edward");
getCookie("firstName"); //"Edward"