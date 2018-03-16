///
// https://regexr.com/ - strona do trenowania
///
var input = document.querySelector('#ininput');
var output = document.querySelector('#outinput');

var regex = /[aąeęioóuy]/ig;

/a/igm

input.oninput = function(e) {
    
    output.value = input.value.replace(regex, ""); //replace regex -> "" 
};

//Wstęp

/Lorem/g; //wyszukuje słów "Lorem" (global)

/Lorem/; //znajdz pierwsze słowo "Lorem"

/Lorem/ig; //wyszukuje słów "Lorem", "loRem" ... (ignorecase, global)

/[lrem]/g; //znajdz znaki 'l', 'r', 'e', 'm'

/[lr]em/g; //znajdz 'lem', 'rem'

/./g; //znajduje wszystkie symbole (dowolny znak obrócz \n) 

/Lo./g; //'Lor', 'Lom', 'Lol', 'Lo ', 'Lo{dowolny znak}' ...

/\w/g; //znajdz symbol alfanumeryczny 'a', 's', 'l' ...

/\W/g; //znajdz symbol NIEalfanumeryczny '1', ' ', ...

/\d\d/g; //znajdz dwucyfrową liczbe '12', '21', '11'

/\d\d\w/g; // '12s', '11d' ...

/\D/g; //Znajdz NIEliczbę

/\s/g; //znajdz spację, tabulator, linebreak (znaki białe)

/\S/g; //znajdz znaki NIEbiałe

/[\s\d]s/g; //Znajdz spacje lub cyfre + s (' s', '1s', '9s' ...) 

/[^ore]/g; //Znajdz każdy symbol oprócz 'o', 'r', 'e'

/[a-z]/g; //'a', 'b', 'c', 'd' ... (bez ą, ś, ć)

/[a-z]/ig; //'a', 'A', 'b', 'B', 'c', 'C', 'd', 'D' ... (ignorecase)

/[a-zA-Z]/ig; //jak wyżej

/./; //(bez global) pierwszy symbol

/\./g; //Znajdz wszystkie kropki

/\[...\]/g; //'[asd]', '[12s]' ...

/[a.]/g; //Znajdz 'a' lub '.' (kropka w [] to kropka)

