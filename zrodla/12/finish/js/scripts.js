var firstName = "Jan";

(function() {

    var firstName = "Anna";

    function sayHello() {
        console.log(firstName);
    }

    window.hello = sayHello;

})();

function fireXTimes(fn, x) {

    var counter = 0;

    return function() {

        if(++counter > x) {
            throw new Error("Przekroczono maksymalny limit wywołań: " + x);
        } else {
            fn(counter);
        }

    };

}

var fire3times = fireXTimes(function(c) {
    console.log("Wywołuję po raz " + c);
}, 3);