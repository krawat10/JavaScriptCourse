var img = document.querySelector("img"),
    p = document.querySelector("p");

// Jeżeli SVG nie jest wspierane
img.src = img.src.replace(".svg", ".png");

// p.innerHTML = p.textContent.replace(/\*\*/g, "--");
// p.innerHTML = p.textContent.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");

p.innerHTML = p.textContent.replace(/\*\*(.+?)\*\*/g, function(match, p1, offset, string) {

    var captured = [].slice.call(arguments, 1, -2);

    console.log(arguments);
    console.log(captured);

    return "<b>" + captured[0].toUpperCase() + "</b>";

});