var props = ["firstName", "lastName"];

var person = {
    _tempId: "23411",
    firstName: "Jan",
    lastName: "Kowalski",
    hobbies: ["sport", "technologie"],
    birthdate: new Date(1970, 2, 15),
    married: false,
    salary: 2000,
    sayHello: function() {
        return this.firstName + " " + this.lastName;
    },
    zipCodePattern: /^\d{2}-\d{3}$/
};