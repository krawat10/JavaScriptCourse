function Shape(sideLengths) {

    if( !(this instanceof Shape) ) {
        return new Shape(sideLengths);
    }

    this.sideLengths = sideLengths;

}

function sayHello() {
    return this.firstName + " " + this.lastName;
}

// var firstName = "Jan",
//     lastName = "Kowalski";

var person = {
    firstName: "Jan",
    lastName: "Kowalski",
    sayHello: sayHello
};

var person2 = {
    firstName: "Katarzyna",
    lastName: "Nowak",
    sayHello: sayHello
};

var shape = new Shape([20, 20, 20, 20]);