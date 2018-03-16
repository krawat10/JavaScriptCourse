var value = "firstName = Jan;";
var path = "path =; /httpOnly";

var page = "http://eduweb.pl";
var securepage = "https://eduweb.pl";

var regex = new RegExp();


var cookie = "firstName = Jan; path =;    /httpOnly"
regex = /; */ig; //';', '; ', ';  ', ';     '
console.log(cookie.match(regex)); //["; ", ";  "] - znajdz symbol ';' i ileś spacji (0 - infinite)

var stringAndMail = "My mail is krawat10@gmail.com";
regex = /\w+@\w+\.\w{2,3}/ig; //'\w+' - jeden lub wiecej znaków alfanumerycznych, 
                              //'\w{2,4} - od 2 do 4 znaków alfanumerycznych, 
console.log(stringAndMail.match(regex)); //["krawat10@gmail.com"]

var code = "44-0010";
regex = /\d{2}-\d{3,4}/;
console.log(code.match(regex)); //["44-0010"]

var pages = "http://eduweb.pl    https://eduweb.pl";
regex = /http:\/\/\w+\.\w{2,4}/ig;
console.log(pages.match(regex)); //["http://eduweb.pl"]
regex = /https?:\/\/\w+\.\w{2,4}/ig; // 's?' - opcjonalnie. Może zaiwierać 's' ale nie musi. 
console.log(pages.match(regex)); //["http://eduweb.pl", "https://eduweb.pl"]

regex = /(http|https):\/\/\w+\.\w{2,4}/ig; // '(a|b) - musi być albo 'a' albo 'b'
console.log(pages.match(regex)); //["http://eduweb.pl", "https://eduweb.pl"]



regex = /../ig; //dowolne 2 znaki

