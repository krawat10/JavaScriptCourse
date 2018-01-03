var xhr = new XMLHttpRequest(),
    data = new FormData();

xhr.open("POST", "odbierz.php", true);

xhr.onreadystatechange = function(e) {

    if(this.readyState === 4 && this.status === 200) {
        console.log(this.response);
    }

};

data.append("firstName", "Jan");
data.append("lastName", "Kowalski");

// xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.send(data);