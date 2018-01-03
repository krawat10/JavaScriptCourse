var props = ["firstName", "lastName"];

var person = {
    _tempId: "23411",
    firstName: "Jan",
    lastName: "Kowalski",
    hobbies: ["sport", "technologia"],
    birthdate: new Date(1970, 12, 23),
    married: false,
    salary: 2000,
    sayHello: function () {
        return this.firstName + " " + this.latName;
    },
    zipCodePattern: /^\d{2}-\d{3}$/
};

//Własna metoda dla obiektów typu RegExp który parsuje wyrażenie reguralne do stringa.
RegExp.prototype.toJSON = function () {
    return this.source;
}

//Drugi argument JSON.stringify to może być funkcja która może zamieniać/modyfikować określone wartości obiektu.
//Funkcja iteruje po kolei po wszystkich właściwościach (nawet wewnętrzych elementach, tablicach)
var personJSON = JSON.stringify(person, function (key, value) {
    //Jeśli trafimy na string, zwracamy string z dużymi literami do obiektu JSON
    if (typeof value === "string")
        return value.toUpperCase();

    //Jeśli trafimy na instancje RegExp, zwróć wartość stringową 
    if(value instanceof RegExp)
        return value.toJSON();

    //Jeśli nie chcemy dodawać do obiektu określonego pola. 
    if (key === "_tempId")
        return undefined;   //pole nie zostanie dodane.
            
    //Jeśli inna wartość, pozostawiamy bez zmian.
    return value;
}, 0);

//Podczas parsowania JSON->JS object również można dodać funkcje modyfikującą parsowane obiekty do JS.
//Tutaj niestety mamy podstawowe wartości (string number) tak więc nie sprawdzimy typów.
var personAgain = JSON.parse(personJSON, function(key, value) {
    //Jeśli trafimy na birthdate parsujemy string z datą do obiektu Date
    if(key === "birthdate")
        return new Date(Date.parse(value));
    

    if (key === "zipCodePattern")
        return RegExp(value);    

    //Reszta normalnie zwracana
    return value;
});