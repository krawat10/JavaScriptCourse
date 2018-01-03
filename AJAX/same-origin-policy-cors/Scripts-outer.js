//Same-origin-policy
var iframe = document.querySelector('#innerSite');

//Dostęp do globalnych wartości iframe'u. Stąd możemy wywoływać różne wew. skrypty.
var iframeWindow = iframe.contentWindow;
iframe.contentWindow.changeH1();    
//Uncaught DOMException: Blocked a frame with origin "http://dev-test" from accessing a cross-origin frame.
//Nie zawsze działa (gdy nie zgadzają się hosty porty itp.). Rozwiązać to można zmieniając domain 
//po stronie wewnetrzenj(inner) (patrz Scripts-inner.js) i zewnętrznej(outer)
//Wywołanie funkcji w ramce z inną stroną. Odwołujemy się do skryptów zewnętrznej strony z poziomu naszej.
document.domain = document.domain;
//Z tego powodu w iframe z facebook'a nie możemy modifikować wew. funkcji (automatyczne dawanie like'a)


//CORS
//Jeśli checmy pobrać pewne dane z serwera z innego hosta ('dev-test' -> 'file.dev-test/getJSON.json')
// to po stronie serwera w nagłówku musi być zaznaczone:
//Access-Control-Allow-Origin: * - pozwala na zapytania ze wszytkich innych stron (*)
//Natomiast po stronie klienta do nagłówka musimy dodać:
//Origin: http://dev-test





