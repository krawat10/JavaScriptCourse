var files = "plik.jpg\nzdjecie.jpeg\ndokument.pdf\nobrazek.gif\nregulamin.docx\navatar.png";
var regex = new RegExp();

regex = /.+\.(jpe?g|gif|png)$/igm;
console.log(files.match(regex));    //["plik.jpg", "zdjecie.jpeg", "obrazek.gif", "avatar.png"]

 //(?={regexp}) - wyrażenie w środku jest brane pod uwage przy match, ale jest ignorowane 
 //przy wyświetlaniu wyniku. Jeśli {regexp} sie zgadza wyświetl cała reszte match bez tej grupy
regex = /.+(?=\.(jpe?g|gif|png)$)/igm;
console.log(files.match(regex));    //["plik", "zdjecie", "obrazek", "avatar"]

//(?={regexp}) - jeżeli {regexp} bedzie false wez wyrażenie. Nie można tego użyć jak w poprzednim przykładzie
// bo .+ jest zachłanna. "Zaznacz jeśli '(?={regexp})' nie pasuje do wzorca".
regex = /^(\w(?!.+jpg))+/igm; //wez pierwszą litere wtedy gdy reszta nie pasuje do wzorca  '(?!.+jpg)' 
                              //i wyswietl reszte (\w)  
console.log(files.match(regex)); //["zdjecie", "dokument", "obrazek", "regulamin", "avatar"]
