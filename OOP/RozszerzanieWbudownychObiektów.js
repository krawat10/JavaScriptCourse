///////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////// Rozszerzanie wbudowanych obiektów  ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

//wybranie wszystkich elementów li z elementu o id "list"
var elems = document.querySelectorAll("#list li"); //new NodeList() - nie ma prototypu Array więc 
//nie można użyc foreach

//Stworzenie własnej implementacji forEach
//Nie powinniśmy zmieniać wbudowanych obiektów (NodeList, array itp.) bo możemy pomieszać
//logikę javascriptu. Można tego używać do zdefiniowania funkcji dla starych przeglądarek "polifile".
//W tym przypadku można dodać warunek (czy to jest funkcją) aby nie nadpisywać tych klas
//w nowych przeglądarkach (w starych to nie są funkcje i to zostanie nadpisane)
if (NodeList.prototype.forEach != "function") {
    NodeList.prototype.forEach = function (callback) {
        for (var i = 0; i < this.length; i++) {
            callback(this[i]);  //Wywołanie naszego argumentu (argumentem jest funkcja)
        }
    }
}

elems.forEach(function (elem) { //function(elem){...} to nasze callback
    elem.style.color = "#ff0000";
});






