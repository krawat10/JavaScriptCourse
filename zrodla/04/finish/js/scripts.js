/*

Shape
    Rectangle
        Square
    Triangle

 */

function Shape(sideLengths) {
    this._name = "";
    this._sideLengths = sideLengths;
}

Shape.prototype.getPerimeter = function() {

    return this._sideLengths.reduce(function(prevVal, val) {
        return prevVal + val;
    });

};

Shape.prototype.getArea = function() {
    return this._sideLengths[0] * this._sideLengths[1];
};

function Rectangle(sideLengths) {
    Shape.call(this, [sideLengths[0], sideLengths[1], sideLengths[0], sideLengths[1]]);

    this._name = "Prostokąt";
}

function Square(sideLength) {
    Rectangle.call(this, [sideLength, sideLength]);

    this._name = "Kwadrat";
}

var shape1 = new Square(20);