var person = {
    firstName: "Jan",
    lastName: "Kowalski",
    hobbies: ["sport", "technologie"],
    birthdate: new Date(1970, 2, 15),
    married: false,
    salary: 2000,
    sayHello: function() {
        return this.firstName + " " + this.lastName;
    }
};

var personJSON = JSON.stringify(person, null, 4);

var personAgain = JSON.parse(personJSON);