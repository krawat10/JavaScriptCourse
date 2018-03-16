var img = document.querySelector("img");
img.src = img.src.replace(".svg", ".png");  //Zamiana rozszerzeń na obrazku

var p = document.querySelector('#mark');

//jakis tekst **to jest w markdownie** tekst i **markdown**
p.textContent = p.textContent.replace(/\*\*/g, "--");
//jakis tekst --to jest w markdownie-- tekst i --markdown--

//(.*?) -> '.*' nongreedy. Zamiast 'textContent' wstawilśmy 'innerHTML' aby móc wstawiać elementy html.
p.innerHTML = p.textContent.replace(/\-\-(.*?)\-\-/g, "<b>$1</b>"); 
//jakis tekst <b>to jest w markdownie</b> tekst i <b>markdown</b>


p.textContent = "jakis tekst **to jest w markdownie** tekst i **markdown**"
p.innerHTML = p.textContent.replace(/\*\*(.*?)\*\*/g, function(match, p1, offset, string) {
    console.log(match); //**to jest w markdownie** (match)
    console.log(p1); //to jest w markdownie (znaleziona grupa) 
    console.log(offset); //12 - (indeks gdzie jest match)
    console.log(string); //jakis tekst **to jest w markdownie** tekst i **markdown** (cały tekst)

    //Grup może być więcej (match, p1, p2, p3, offset, string).
    //Aby je przechwycić możemy użyć.
    var capturedGroups = [].slice.call(arguments, 1, -2);
    //Odwołujemy sie do wszystkich argumentów i wycinamy je od indeksu 1 do trzeciego od końca (-2).

    console.log(capturedGroups); //["to jest w markdownie"]
    capturedGroups[0] //$1
    capturedGroups[1] //$2

    return "<b>" + capturedGroups[0] + "</b>";
}); 

