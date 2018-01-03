var xhr = new XMLHttpRequest();

xhr.open("post", "getForm.php", true);

xhr.onreadystatechange = function (e) {
    
    if(this.readyState === 4 && this.status === 200){
        console.log(this.response);
    }
}

//Jeśli wyślemy teraz dane w postaci query stringa to serwer nie rozpozna tego.
//Dzieje się tak ponieważ nie zdefiniowaliśmy nagłówka:
//"Content-type: application/x-www-form-urlencoded".
xhr.send("firstName=Jan&lastName=Kowalski");    

//Dodanie nagłówka do zapytania
xhr.open("post", "getForm.php", true);  //otwarcie rządania
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");  //dodanie nagłówka (akceptuj query stringa)
xhr.send("firstName=Jan&lastName=Kowalski");    //Wyślij zapytanie z danymi w postaci query-stringa

//Lepsze definiowanie danych
var data = new FormData();
data.append("firstName", "Jan");
data.append("lastName", "Kowalski");

xhr.open("post", "getForm.php", true);
xhr.send(data); //Nie trzeba ustawiać nagłówka "Content-Type"