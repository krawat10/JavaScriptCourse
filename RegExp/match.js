var p = document.querySelector("#emails");

var lorem = p.textContent;

var regex = /\w+@(\w+\.\w{2,4})/;

var search = lorem.match(regex); //["krawat10@gmail.com", "gmail.com"] - to samo co regex.exec(lorem)
console.log(search);

var search = lorem.match(regex); //["krawat10@gmail.com", "gmail.com"] - dalej 1 match
console.log(search);


var regex = /\w+@(\w+\.\w{2,4})/g; //dodajemy global

var search = lorem.match(regex); //["krawat10@gmail.com", "ewq@o2.pl"] - wyłapało wszystkie matche
console.log(search);
