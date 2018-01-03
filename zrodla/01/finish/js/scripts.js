var arr = [1, 2];

console.log( arr.indexOf(1) );

arr.indexOf = function() {
    return false;
};

console.log( arr.indexOf(1) );

var arr2 = [3, 5];

console.log( arr2.indexOf(5) );

console.log( arr2.valueOf() );

Array.prototype.valueOf = function() {
    return false;
};

console.log( arr2.valueOf() );

Object.getPrototypeOf(arr) === arr.constructor.prototype; // tak samo jak arr.__proto__;

Array.prototype.__proto__ === Object.prototype; // true
Array.prototype.isPrototypeOf(arr); // true
Object.prototype.isPrototypeOf(arr); // true
Object.prototype.__proto__; // null