//JS Module
//Przy enkapsulacji pól można użyć domknięć 
var person = (function () {
    //Te pola są dostępne tylko dla zwracanej funkcji 
    //ponieważ występuje te domknięcie 
    //Poniższe pola dostępne są tylko w obrębie obecnych domknięć{},
    //Zewnętrzne elementy nie mają do tego dostępu
    var _firstName = "Jan";
    var _lastName = "Kowalski";
    var _age = 32;

    //Ta zwracana funkcja dalej ma dostęp do powyższych zmiennych.
    //Nie dodajemy .this bo powyższe zmienne nie są
    //dla poniższej funkcji traktowane jak pola
    return {
        getName: function () {
            return _lastName + " " + _firstName
        },

        getAge: function () {
            return _age
        },

        setName: function (firstName, lastName) {
            _firstName = firstName;
            _lastName = lastName;
        },

        setAge: function (age) {
            _age = age;
        }
    };
})();

//Podejście bardziej obiektowe
function Person(firstName, lastName) {
    var _firstName = firstName; //Nie dodajemy this, tylko traktujemy jak zmienne
    var _lastName = lastName;

    this.getName = function () {
        return firstName + " " + lastName;
    }
}

//ERROR! Jeżeli definiujemy nowe funkcje przez prototyp
//to nie możemy tutaj odnieść się do prywatnych pól (var _firstName),
//bo zmienna korzysta ze zmiennych w obrębie których została zdefiniowana
//firstName nie jest globalną zmienną wiec poniższa metoda nie zadziała.
//(działa tylko na this.{zmienna})
Person.prototype.getFirstName = function () {
    return firstName;
}

var person2 = new Person("Jan", "Kowalski");