function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype.sayHello = function() {
    return this.firstName + " " + this.lastName;
};

var person = {
    firstName: "Jan",
    lastName: "Kowalski",
    age: 0
};

var person2 = new Person("Anna", "Nowak", 48);

for(var key in person2) {

    if(person2.hasOwnProperty(key)) {
        console.log(key);
    }

}