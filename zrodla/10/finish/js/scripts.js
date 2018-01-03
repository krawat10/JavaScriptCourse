// function sayHello() {
//     console.log("Cześć!");
// }

function sayHello(text) {
    console.log(text + " " + this.firstName + " " + this.lastName);
}

var person = {
    firstName: "Jan",
    lastName: "Kowalski"
};

sayHello.call(person, "Witaj");

var elems = document.querySelectorAll("#list li");

// Array.prototype.forEach.call(elems, function(elem) {
//     elem.style.color = "red";
// });

[].forEach.call(elems, function(elem) {
    elem.style.color = "red";
});

function sum(first, second, third) {
    console.log(first + second + third);
}

sum.apply(this, [2, 3, 4]);