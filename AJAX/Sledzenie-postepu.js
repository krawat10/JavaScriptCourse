var xhr = new XMLHttpRequest();
var data = new FormData();

//Obiekty html typu progress (paski ładowania)
uProgess = document.querySelector('#upload');
dProgess = document.querySelector('#download');

xhr.open('post', 'getForm.php', true);

//Event występujący przy zmianach stanu rządania 
xhr.onreadystatechange = function (e) {
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.response);
    }
}

//Event potrzebny do śledzenia postępu pobierania Response.
xhr.onprogress = function (event) {
    //event.total - ile jest całych danych 
    //event.loaded - ile danych pobrano

    //Sprawdzenie czy możliwe jest wyznaczenie postępu
    if (event.lengthComputable) {
        var percent = (event.loaded / event.total) * 100;
        
        dProgess.value = percent;   //Aktualizowanie elmentu progress       
    }
}

//xhr.upload - obiekt XMLHttpRequestUpload. Sprawdzanie postępu
//wysyłania zapytania
xhr.upload.onprogress = function (event) {
    //event.total - ile jest całych danych 
    //event.loaded - ile danych wysłano

    //Sprawdzenie czy możliwe jest wyznaczenie postępu
    if (event.lengthComputable) {
        var percent = (event.loaded / event.total) * 100;

        uProgess.value = percent;   //Aktualizowanie elmentu progress       
    }
}

//Zdefiniowanie danych do wysłania
data.append('firstName', 'Jan');
data.append('lastName', 'Kowalski');

xhr.send(data);