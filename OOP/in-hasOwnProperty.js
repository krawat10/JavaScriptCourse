///////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////// Operator "in" oraz metoda "hasOwnProperty" ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

var person = {
    firstName: "Jan",
    lastName: "Kowalski",
    age: 34
};

if(person.age){     //słaba metoda do sprawdzania czy istnieje take pole (jeśli age == 0 to zwróci false)
    console.log(person.age)
}

if("age" in person){        //lepsza metoda do sprawdzania istnienia propercji/metod w obiekcie
    console.log("person ma age") //"in" działa tylko na obiektach
}

if("forEach" in Array.prototype){   //sprawdzanie czy Array ma metode foreach
    console.log("Array ma forEach");
}

//in w pętlach
function Person(firstName, lastName, age) {
    this._firstName = firstName; 
    this._lastName = lastName;
    this._age = age;
} 

Person.prototype.sayHello = function() {
    return "hello" + this._firstName;
}

var person = new Person("jan", "kowalski", 34);

//Iterowanie po wszystkich elementach (nawet funkcjach). Pętla poszukuje jakiegokolwiek klucza.
//Funkcje __props__ nie będą iterowane bo są typu nonenumerable
for(var key in person){

    //key będą nawet funkcje
    console.log(key);     //"_firstName" > "_lastName" > "_age" > "sayHello"
    
    //tutaj przechodzą tylko pola (funkcje to false)
    if(person.hasOwnProperty(key)){
        console.log(key);    
    }

    
}