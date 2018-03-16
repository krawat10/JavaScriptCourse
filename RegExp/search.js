var files = [
    "picture-thumb-150x150.jpg",
    "beach-thumb-150x150.jpg",
    "monako-thumb-150x150.jpg",
    "sportcar-thumb-300x300.jpg",
];

var regex = /-thumb-\d{1,4}x\d{1,4}/;

var search = files[0].search(regex); //7 - index zaczynający znalezione wyrażenie reguralne
console.log(search);

files.forEach((file, i) =>{
    var index = file.search(regex); //Znalezienie indeksu który zaczyna wyrażenie reguralne 

    if(index > -1){ //Jeśli index jest -1 oznacza to że nie znaleziono wyrażenia (regex) w stringu 
        files[i] = file.substring(0, index); //Usuwanie tego co jest wyrażeniem
    }
});

console.log(files); //["picture", "beach", "monako", "sportcar"]

function stringContains(string, pattern) {

     //Musimy użyć konstruktora RegExp aby zamienić argument pattern na wyrażennie
    var regexp = new RegExp(pattern);

    //sprawdzamy index od którego zaczyna się wyrażenie reguralne (pattern)
    var index = string.search(pattern); 

    //Jeśli jest większe od jeden to oznacza że takie wyrażenie znajduje się w stringu
    return index > -1; 
}

console.log(stringContains("eduweb.pl", "edu")); //true - 'eduweb.pl' posiada wyrażenie 'edu'

console.log(stringContains("eduweb.pl", /we?b/)); //true - wyrażenie '/we?b/' jest w  'eduweb.pl'
