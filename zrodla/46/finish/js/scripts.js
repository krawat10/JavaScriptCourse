var person = {
    firstName: "Jan",
    lastName: "Kowalski",
    age: 33,
    hobbies: ["sport", "IT"]
};

function copyObject(obj) {

    return JSON.parse(JSON.stringify(obj));

}

var personCopy = copyObject(person);