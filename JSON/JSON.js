var person = {
    firstName: "Jan",
    latName: "Kowalski",
    hobbies: ["sport", "technologia"],
    birthdate: new Date(1970, 12, 23),
    married: false,
    salary: 2000,
    sayHello: function () {
        return this.firstName + " " + this.latName;
    }
};

console.log(person.birthdate.getDate());

//"{"firstName":"Jan","latName":"Kowalski","hobbies":["sport","technologia"],"birthdate":"1971-01-22T23:00:00.000Z","married":false,"salary":2000}"
var personJSON = JSON.stringify(person) //JS objekt -> JSON representation string

//Ostatni parametr liczba wcięć pomiędzy polami obiektu, po wklejeniu takiego obiektu gdziekolwiek
//nie będzie to jedna linia znaków, a string ze spacjami, nowymi liniami itp.
//Przydatne jakby ktoś chciał taki obiekt zapisać w pliku i mieć zformatowany obiekt.
var personJsonWithArgs = JSON.stringify(person, null, 4);

//Powrót to obiektu JS. Jednakże birthdate już pozostało jako string ("1971-01-22T23:00:00.000Z")
var personAgain = JSON.parse(personJSON);