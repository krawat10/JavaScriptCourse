///////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////// Dziedziczenie Shape > Rectangle > Square //////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
function Shape(sideLenghts) {
    this.name = "";
    this._sideLenghts = sideLenghts;
}

Shape.prototype.getPerimeter = function () {
    //funkcja ktróra dodaje do poprzedniego elementu następny element listy i zwraca sume
    return this._sideLenghts.reduce(function (previousValue, currentValue, index, array) {
        return previousValue + currentValue;
    });
};

Shape.prototype.GetArea = function () {
    return this._sideLenghts[0] * this._sideLenghts[1];
};

//Przesłonięcie funkcji z object. Inne klasy dziedziczące z klasy Shape będą miały 
//tak samo zdefiniowaną metode .toString() (o ile same jej nie przesłonią)
Shape.prototype.toString = function () {
    return "[object " + this._name + "]";
}

function Rectangle(sideLenghts) { //[20,10]
    //Call for function Shape (something like extending), but it's not inherenting (can't access to shape's methods)
    Shape.call(this, [sideLenghts[0], sideLenghts[1], sideLenghts[0], sideLenghts[1]]); //[20,10,20,10]
    this._name = "Prostokat";

}
//Najlepszy sposób obiektowy. Kopiujemy prototyp klasy Shape (wszytkie funkcje) do nowego obiektu
//oraz przypisujemy konstruktor Rectangle (bo mógłby być podstawowy Object)
//Przypisywanie prototypu prosto z shape (Rectangle.prototype = Shape.prototype;) nie jest dobrym
//rowiązaniem ponieważ jeśli nadpisalibyśmy jakąś funkcje w Rectangle to automatycznie została by ona
//nadpisana w klasie Shape. Tutaj mamy nowo zdefiniowaną klase (skopiowany prototyp).
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;    //Przepisanie konstruktora (przesłoniecie konstrukotra Object)

//Rectangle.prototype = {};     //Po tym obiekt wygląda tak: Rectangle.protorype -> Object {} 


function Square(sideLenght) {
    Rectangle.call(this, [sideLenght, sideLenght]);
    this._name = "Kwadrat";
}
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

function Triangle(sideLenght) {
    Shape.call(this, [sideLenght, sideLenght, sideLenght]);
    this._name = "Trójkąt";
    //Definiowanie funkcji w tym miejscu obciąża pamieć. Lepiej użyć "Triangle.prototype.GetArea..."
    //this.GetArea = function () { ...
}
Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

//Trzeba zdefiniować inną funkcje na pole (nie jak dla prostokątów). To jest override funkcji.
//Gdybyśmy przepisali prototyp prosto z Shape (nie kopując go do nowego objektu) jak niżej:
//Triangle.prototype = Shape.prototype
//to ta funkcja została by również przypisana w Shape, dlatego więc tworzymy pustą klase i
//kopiujemy prototyp Shape (Triangle.prototype = Object.create(Shape.prototype)).
Triangle.prototype.GetArea = function () {
    var a = this._sideLenghts[0];

    return +((a * a * Math.sqrt(3)) / 4).toFixed(2); //.toFixed(2) skraca wynik do dwóch miejsc po przecinku
    //Plus na początku konwertuje string do number
}

var shape = new Shape([20, 20]);
var rect = new Rectangle([20, 10]);
var square = new Square(10);
var triangle = new Triangle(30); //Trójkąt równoboczny (30x30x30)