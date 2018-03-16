var regex = new RegExp();

var divs = "<div>some text</div> <div>some other text</div>";
//Gwiazdka jest łakoma i nie zwróci jednego diva tylko cały tekst.
regex = /<div>.*<\/div>/ig;
console.log(divs.match(regex)); //["<div>some text</div> <div>some other text</div>"]

regex = /<div>.*?<\/div>/ig; //'?' w tym wypadku ustawia gwiazdkę na 'leniwą'
console.log(divs.match(regex)); //["<div>some text</div>", "<div>some other text</div>"]