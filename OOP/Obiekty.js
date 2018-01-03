///////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////// Obiekty w JavaScript //////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

function Person(firstName, lastName) {

    this.fName = firstName;
    this.lName = lastName;

    //Every object instance has this function inside (not good for client memory)
    //Unfortunatey, It's not a Person function (not inside prototype),
    //but it's function inside each object instance 
    this.getFullName = function (count) {
        for (var i = 0; i < count; i++) {
            console.log(this.fName + " " + this.lName);
        }
        return this.fName + " " + this.lName;
    }
}

//You can add methods to class outside classes. It's better for memory, because it's not a method of each function
Person.prototype.GetFullNameAgain = function () {
    return this.fName + " " + this.lName;
}

var person1 = new Person();
var person2 = new Person();

//you can change object methods dynamically (to specific object instance)
person2.GetFullNameAgain = function () {
    return "Hello";
}

//you can add some methods to all objects.
Object.GetFullNameAgain = function () {
    return "Hello";
}