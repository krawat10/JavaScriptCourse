var p = document.querySelector("#emails");

var regex1 = new RegExp("\\w+@\\w+\\.\\w{2,4}", "g");
var regex2 = /\w+@(\w+\.\w{2,4})/g; // regex1 == regex2

//Regext przy każdym '.exec' znajduje pojedynczy 'match'. Ale jego wartość 'lastIndex' rośnie
//Przy następnym wywołaniu '.exec' próbuje znaleść następny match i znowu podnosi 'lastIndex'
console.log(regex1.lastIndex); //0
var search = regex1.exec(p.textContent);
console.log(search); //["krawat10@gmail.com", "gmail.com"] (["znaleziony content", "grupa"])

console.log(regex1.lastIndex); //30
var search2 = regex1.exec(p.textContent); //Znajdowanie następnego wyrażenia
console.log(search2); //["ewq@o2.pl", "o2.pl"] 

console.log(regex1.lastIndex); //187


//Znaleczienie wszystkich match'ów
var search3;
var domains = [];

while(search3 = regex2.exec(p.textContent))
{
   domains.push(search3[0]);
}
console.log(domains); //["krawat10@gmail.com", "ewq@o2.pl"]
