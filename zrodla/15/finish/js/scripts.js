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

RegExp.prototype.toJSON = function() {
    return this.source;
};

var personJSON = JSON.stringify(person, function(k, v) {

    return v;

});

var personAgain = JSON.parse(personJSON, function(k, v) {

    if(k === "birthdate") {
        return new Date( Date.parse(v) );
    }

    if(k === "zipCodePattern") {
        return new RegExp(v);
    }

    return v;

});