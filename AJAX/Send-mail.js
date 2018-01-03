(function() {
    //Pobranie elementów html.
    var form = document.querySelector('#email-form');
    var message = document.querySelector('#message');

    //Wyświetlenie wiadomości zwrotnej w polu #message
    function ShowMessage(type, msg) {
        message.className = type;
        message.innerHTML = msg;
    }

    function sendEmail(e) {
        e.preventDefault();

        var fields = form.querySelectorAll("input, textarea");    //Wybranie wszystkich pól formularza
        var data = {};

        //Zapozyczenie funkcji foreach z array 
        [].forEach.call(fields, function (field) {
            data[field.name] = field.value; //tworzenie pola klucz-wartość
        });
        
        //Funkcja stworzona w 'Wlasny-ajax.js'
        AJAX({
            type: form.getAttribute("method"),
            url: form.getAttribute("action"),
            data: data,
            success: function(response, xhr) {
                console.log(response);
                //Sparsuj odpowiedz.
                var res = JSON.parse(response);
                
                //Jeśli response to tablica to zwóć kilka błędów.
                if(Array.isArray(res)){
                    //Połaczenie elementów tablicy w jeden string i rozdzielony <br>.
                    ShowMessage("error", res.join("<br>")); 
                }
                //Jeśli w wiadomości zwrotnej jest pole error.
                else if("error" in res)
                {
                    ShowMessage("error", res.error);
                }
                //Gdy wiadomość zostanie wysłana.
                else if("sucess" in res){
                    ShowMessage("success", res.success);
                    //Po wysłaniu wiadomości usuń ten event (już nie wyśle ponownie emaila po kliknieciu)
                    form.removeEventListener("submit", sendEmail, false);
                    //Wyłącznie buttona do wysyłanie wiadomości
                    form.querySelector("button").setAttribute("disabled", "disabled");
                }

            },
            failed: function (xhr){

            }

        });
    }

    form.addEventListener("submit", sendEmail, false);
})();