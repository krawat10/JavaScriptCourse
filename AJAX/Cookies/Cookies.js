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