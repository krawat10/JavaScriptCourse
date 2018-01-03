var person = {
    firstName: "Jan",
    lastName: "Kowalski",
    age: 33,
    hobbies: ["sport", "IT"]
};

var str = JSON.stringify(person);

var encoded = window.btoa(str);

var decoded = window.atob(encoded);

window.location.hash = "?data=" + encodeURIComponent(encoded);