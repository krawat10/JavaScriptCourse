var regex = new RegExp();

var absoluteUrl = "http://mypage.com/document.docx";
var absoluteSecureUrl = "https://mypage.com/document.doc";
var relativeUrl = "/docs/tutorial-http.pdf";

var all = absoluteUrl + "\n" + absoluteSecureUrl + "\n" + relativeUrl;

regex = /https?.+/ig;

console.log(absoluteSecureUrl.match(regex));    //["https://mypage.com/document.doc"]
console.log(absoluteUrl.match(regex));  //["http://mypage.com/document.docx"]
console.log(relativeUrl.match(regex));  //["http.pdf"]


regex = /^https?.+/ig;  //'^'zaczyna sie od
console.log(all.match(regex));  //["http://mypage.com/document.docx"] - tylko pierwszy element "^"
regex = /^https?.+/igm; //'m' multiline ON, '^' - new line begin with ...
console.log(all.match(regex));  //["http://mypage.com/document.docx", "https://mypage.com/document.doc"]

regex = /\.pdf$/igm; //każda linia musi się kończyć z '.pdf'
console.log(all.match(regex));  //[".pdf"]

regex = /.*\.docx?$/igm; // z rozszerzeniem doc lub docx
console.log(all.match(regex)); //["http://mypage.com/document.docx", "https://mypage.com/document.doc"]

var lorem = "Lorem ipsum dolor sit LametL amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus.";
regex = /\bamet\b/igm; //'\b' musi być znak 'granicy' czyli spacja, przecinek, nowa linia itp. Nie wezmie z części słowa 'LametL'
console.log(lorem.match(regex));    //["amet"] z ' amet, '
regex = /\Bamet\B/igm; //'\B' nie może być znak 'granicy'
console.log(lorem.match(regex)); //["amet"] z ' LametL ' 