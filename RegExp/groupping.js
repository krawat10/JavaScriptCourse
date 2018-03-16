var regex = new RegExp();

var files = "document.doc\ndocument.docx\nlicence.pdf\nprices.xlsx\nold-prices.xls"

regex = /^.+\.docx?$/igm;
console.log(files.match(regex));    //["document.doc", "document.docx"]

regex = /^.+\.(docx?|pdf|xlsx?)$/igm; //Grupowanie '^.+\.' + 'docx?' lub 'pdf' lub 'xlsx?'
console.log(files.match(regex)); //["document.doc", "document.docx", "licence.pdf", "prices.xlsx", "old-prices.xls"]

regex = /(doc|pdf|xls)?/ // albo 'doc'albo 'pdf albo 'xls' albo nic. '?' odnosi sie do całej grupy

var site = "http://www.eduweb.pl\nhttps://eduweb.pl"
regex = /^https?:\/\/(www\.)?\w+\.\w{2,4}$/igm  //(www\.)? - może być 'www.' ale nie musi 
console.log(site.match(regex)); //["http://www.eduweb.pl", "https://eduweb.pl"]