///////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////// this - problemy ///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////


function SayHello() {
    console.log(this); //tutaj Window (globalny element)
    return this.firstName + " " + this.lastName;    //"undefined undefined" jak nigdzie nie damy takiej zmiennej
}

var firstName = "jan";  //teraz obiekt Window posiada takie zmienne (this.firstName)
var lastName = "kowalski";  //zmienne globalne

var person = {
    firstName: "Ewa",
    lastName: "Kalinowska",
    SayHello: SayHello
};

var person2 = {
    firstName: "Katarzyna",
    lastName: "Nowak",
    SayHello: SayHello
};


function Shape(sideLenghts) {
    this._sideLenghts = sideLenghts;
}

var shape1 = new Shape([20,20,20,20]);

//Tutaj this._sideLenghts będą "undefined" ponieważ odwołujemy sie do globalnych wartości.
//Bez słowa "new" jest to zwykła funkcja (żaden obiekt!), więc wszelkie this w środku odwołuje się 
//do globalnych wartości z Window. Teraz powstała globalna wartość _sideLenghts o wartości [20, 20, 20, 20]
var shape2 = Shape([20, 20, 20, 20]); 

//ROZWIĄZANIE

function SafeShape(sideLenghts){
    if(!(this instanceof SafeShape)){   //Jeśli zapomnimy dodać "new" wcześniej, ten warunek to sprawdzi i
        return new SafeShape(sideLenghts);  //Zwróci obiekt SafeShape. Zabezpieczenie przed wykonaniem zwykłej funkcji 
    }
    this._sideLenghts = sideLenghts; //Tutaj dojdzie tylko wtedy gdy obiekt będzie klasy SafeShape a nie Window
}