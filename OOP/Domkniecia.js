var firstName = "Jan";

//Funkcja anonimowa. Zakres funkcji nie wychodzi na zewnątrz
(function() {
    var firstName = "Anna";

    function sayHello() {
        console.log(firstName);
    }

    sayHello(); //"Anna" - wew. zmienna działa

    //Przykład domknięcia. Wynikiem funkcji będzie "Anna". 
    //Funkcje mają dostęp do funkcji tam gdzie zostały zdefiniowane, a 
    //nie tam gdzie są wykonywane. Jeśli usuniemy wew. zmienna firstName
    //to funkcja skorzysta z zewnętrznej zmiennej(jedynej dostępnej)
    window.Hello = sayHello;    
})();

function fireXTimes(fn, x) {
    var counter = 0; //wartość domknięta

    //Zwracamy funkcje która po wywołaniu robi callback oraz 
    //aktualizuje counter
    return function () {
        
        if(++counter > x)
            throw new Error("Przekroczono limit wywołań");
        else
            fn(counter);    //callback
    }
}

//Do zmiennej fire3times zostanie zwórcona funkcja (na górze)
//która posiada zdefiniowaną wew. zmienna counter(coś jak propercja)
var fire3times = fireXTimes((x)=>console.log("Wywołanie nr." + x), 3);

fire3times();    //Wywołanie nr.1
fire3times();    //Wywołanie nr.2
fire3times();    //Wywołanie nr.3
fire3times();    //ERROR!
