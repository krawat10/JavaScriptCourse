function sayHello(text) {
    console.log(this.firstName + " " + this.lastName);
}

var person = {
    firstName: "Jan",
    lastName: "Kowalski",
    say: sayHello //Będzie się odwoływać do powyższej funkcji
}

//Wywołanie funkcji sayHello, jednak "this" jest przekierowane pod argument funkcji call 
//W tym przypadku jest to wywołanie funkcji sayHello na obiekcie person.
//Następne argumenty call to argumenty naszej wywoływanej funkcji (obiekt, arg1, arg2...)
sayHello.call(person, "Argument 'text'");

//tutaj mamy zbiór elmentów html, więc nie możemy użyć funkcji forEach(tylko dla tablic)
var elems = document.querySelectorAll('#list li');

//Jednak tutaj pobieramy funkcje forEach z prototypu array i robimy call na nasz zbiór elementów html.
//W funkcji forEach "this" to teraz elems, function(element) to domyślny argument funkcji forEach 
Array.prototype.forEach.call(elems, function(element) {
    element.style.color = "red";
});

//Jeszcze szybsza metoda(mniej wydajna). Kożystamy z funkcji obiektu pustej tablicy 
[].forEach.call(elems, function (element) {
    element.style.color = "red";
});


//apply
function sum(first, second, third) {
    console.log(first + second + third);
}

//.apply robi to samo co .call z tym wyjątkiem że argumenty naszej funkcji podajemy w tablicy
sum.apply(this, [2,3,5]);
sum.call(this, 2, 3, 5);    //Ten sam efekt jak powyżej

