console.log("JSONP");
(function() {
    
    //Stworzenie elementu html <script> który bedzie ładował skrypt serwera (getData.php)
    //i zwróci jakieś dane (person) w postaci javascript. Sposób na ominięcie 'same-origin-policy' 
    function JSONP(url, callbackName) {
        
        var script = document.createElement('script'); //nowy element <script>...</script>
        script.type = 'text/javascript';    //wskazanie typu skryptu
        script.async = true; //Wskazanie tego czy skrypt ma być ładowany asynchronicznie (nie blokować strony)
        script.src = url + '?callback=' + callbackName; //Wysłanie do serwera query stringa (pomoc przy response)

        console.log(script);

        //Dodanie tego elementu na strone, aby się od razu wykonał. Funkcja 'showData(data)' jest już wcześniej
        //zdefiniowana (window.showData). Po dodaniu elementu <script> zostanie wysłana proźba do serwera
        //o odesłanie skryptu. Nasz skrypt odeśle plik js w stylu:
        //showData({'name':'James', 'age':32});
        //Funkcja (z danymi z serwera) zostanie od razu wykonana (bo showData jest już wcześniej zdefiniowane).
        //Elementy <script> nie mają rygoru 'same-origin-policy' więc możemy tym sposobem pobierać
        //dane z obcych serwerów (przy AJAX jest z tym problem). 
        document.head.appendChild(script);  
    }


    function showData(data) {
        
        var pre = document.createElement("pre");    //Tworzenie elementu html </pre>

        pre.textContent = JSON.stringify(data); //Zamiana data na string i dodanie do kontentu pre
        document.body.appendChild(pre); //dodanie do body elementy </pre>(na koniec)
    }

    //Dopisanie funkcji wywołanej po kliknięciu na element o id 'loadData'
    document.querySelector('#loadData').onclick = function (event) {    
        
        // Na kliknięcie dodaj element <script> na stronie który pobierze skrypt z serwera i który
        // który zwróci dane w postaci pliku js z tekstem: 'showData({dane})'.
        // 'showData' jest przekazane w query stringu do serwera,
        // wiec serwer to wezmie pod uwagę przy zwracanych danych.
        // Sposób na ominięcie 'same-origin-policy'.
        JSONP("http://localhost/JavaScript/AJAX/GetData.php", "showData");
    }

    window.showData = showData;
})();