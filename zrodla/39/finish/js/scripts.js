var numbers = [44, 20, 1, 0, 86, 33, 4];

// var max = Math.max(44, 20, 1, 0, 86, 33, 4);
var max = Math.max.apply(Math, numbers);

console.log(max);