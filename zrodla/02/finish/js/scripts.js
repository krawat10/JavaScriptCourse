var arr = new Array();

function Person(firstName, lastName) {
    this.fName = firstName;
    this.lName = lastName;

    this.sayHello = function() {
        return this.fName + " " + this.lName;
    };

    // return {
    //     fName: firstName,
    //     lName: lastName
    // };
}

var person1 = new Person("Jan", "Kowalski");
var person2 = new Person("Tomasz", "Nowak");