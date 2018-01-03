var button = document.querySelector("#loadImages");

var imgs = [
    "http://eduweb.pl/kursy/projekty/javascript/kurs-js-obraz1.jpeg",
    "http://eduweb.pl/kursy/projekty/javascript/kurs-js-obraz2.jpeg"
];

// function showImages() {

//     var dc = document.createDocumentFragment();

//     imgs.forEach(function(url) {

//         var img = document.createElement("img");

//         img.src = url;
//         dc.appendChild(img);

//     });

//     document.body.appendChild(dc);

// }

function preloadImages(imgs, fn) {

    var counter = 0,
        length = imgs.length,
        dc = document.createDocumentFragment();

    function count() {

        if(++counter === length) {
            fn(dc);
        }

    }

    imgs.forEach(function(url) {

        var img = document.createElement("img");

        img.onload = count;
        img.src = url;
        dc.appendChild(img);

    });

}

function showImages() {

    preloadImages(imgs, function(dc) {

        document.body.appendChild(dc);

    });

}

button.onclick = showImages;