function sayHello(text) {
    console.log(text + " " + this.firstName + " " + this.lastName);
}

var person = {
    firstName: "Jan",
    lastName: "Kowalski",
}

//Przepisanie do obiektu person funkcji sayHello, jednak bez natychmiastowego wykonywania.
//"hello" jest teraz funkcją i gdy to wykonamy "hello()", wykona się funkcja sayHello na obiekcie
//person
var hello = sayHello.bind(person);

hello(); //"undefined Jan Kowalski" - nie przekazaliśmy argumentu "text"
hello("Witaj"); //"Witaj Jan Kowalski" - tutaj argument "text" został zdefiniowany bezpośrednio na funkcji "hello"

var hello = sayHello.bind(person, "Witaj"); //Tutaj też można definiować argument "text"
hello();//"Witaj Jan Kowalski" - "text" było zdefiniowane wcześniej

//Implementacja własnego ".bind"
function MyBind(fn, obj) {

    //"arguments" to specjalna zmienna w JS która przechowuje wszystkie argumenty
    //nawet te które nie są zdefiniowane w "(fn, obj)"
    var args = arguments;   

    //arguments jest obiektem tablicopodobnym i nie ma funkcji "slice", to pożyczamy funkcje slice z Array
    //i jako "this" ustawiamy "arguments". Tutaj ucinamy 2 pierwsze argumenty "fn, obj".
    var otherArgs = Array.prototype.slice.call(arguments, 2);

    return function() { //zwraca funkcje
        
        //Wywoałnie funkcji "fn(otherArgs)" na obiekcie "obj"
        fn.apply(obj, otherArgs);
    };
}

//To samo co hello()
var hello2 = MyBind(sayHello, person, "Witaj");

hello2(); //"undefined Jan Kowalski"