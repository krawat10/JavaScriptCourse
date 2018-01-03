// var person = {
//     _firstName: "Jan",
//     _lastName: "Kowalski",
//     _age: 32,
//     getName: function() {
//         return this._firstName + " " + this._lastName;
//     },
//     getAge: function() {
//         return this._age;
//     },
//     setName: function(firstName, lastName) {
//         this._firstName = firstName || this._firstName;
//         this._lastName = lastName || this._lastName;
//     },
//     setAge: function(age) {
//         this._age = (age > 0) ? age : this._age;
//     }
// };

var person = (function() {

    var _firstName = "Jan",
        _lastName = "Kowalski",
        _age = 32;

    return {
        getName: function() {
            return _firstName + " " + _lastName;
        },
        getAge: function() {
            return _age;
        },
        setName: function(firstName, lastName) {
            _firstName = firstName || _firstName;
            _lastName = lastName || _lastName;
        },
        setAge: function(age) {
            _age = (age > 0) ? age : _age;
        }
    };

})();

function Person(firstName, lastName) {
    var _firstName = firstName,
        _lastName = lastName;

    this.getName = function() {
        return _firstName + " " + _lastName;
    };
}

var person2 = new Person("Anna", "Nowak");