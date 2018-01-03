var button = document.querySelector("#loadImages");

var imgs = [
    "http://eduweb.pl/kursy/projekty/javascript/kurs-js-obraz1.jpeg",
    "http://eduweb.pl/kursy/projekty/javascript/kurs-js-obraz2.jpeg"
];

function showImages() {

    var dc = document.createDocumentFragment();

    imgs.forEach(function(url) {

        var img = document.createElement("img");

        img.src = url;
        dc.appendChild(img);

    });

    document.body.appendChild(dc);

}

button.onclick = showImages;