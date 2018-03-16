var files = "obrazek.jpg\nzdjecie-234.JPEG\npictureDSC.jpg";
var regex = new RegExp();

regex = /^.+\.jpe?g/gmi;
console.log(files.match(regex));    //["obrazek.jpg", "zdjecie-234.JPEG", "pictureDSC.jpg"]

regex = /^(.+)\.jpe?g/gmi;  //'(.+)' jest to grupa pierwsza oznaczana jako $1
console.log(files.replace(regex, "$1.jpg")); 
//obrazek.jpg
//zdjecie-234.jpg
//pictureDSC.jpg

var text = "Jan kowalski <jan@kowalski.pl> 322-232-33-2. Kinga Nowal <kinga@nowak.com> 213-233-333";
regex = /<(\w+@\w+\.\w{2,4})>/igm
console.log(text.replace(regex, "mail: $1")); 
//Jan kowalski mail: jan@kowalski.pl 322-232-33-2. Kinga Nowal mail: kinga@nowak.com 213-233-333

text = "piotr@mycompany.com;532-232-333\nkatarzyna@mycompany.net;354-334-544";
regex = /(.+)@mycompany\.(?:com|net);(\d{3}-\d{3}-\d{3})/igm; //(?:com|net) - non capturing, teraz to nie jest $2
console.log(text.replace(regex, "$1@mycompany.com")); //Wybranie pierwszej grupy i dodanie "@mycompany.com"
//piotr@mycompany.com
//katarzyna@mycompany.com

regex = /^(.+)\.jpe?g/gmi;  //'(.+)' jest to grupa pierwsza oznaczana jako $1
console.log(files.replace(regex, "$&")); //'$&' zwraca cały match
// obrazek.jpg
// zdjecie-234.JPEG
// pictureDSC.jpg
