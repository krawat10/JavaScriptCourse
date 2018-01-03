function AJAX(config) {

    if (!(this instanceof AJAX)) {
        return new AJAX(config);
    }

    this._xhr = new XMLHttpRequest();
    this._config = this._extendOptions(config);
    this._assignEvents();

    this._beforeSend();
}

AJAX.prototype._defaultConfig = {
    type: "GET",
    url: window.location.href,
    data: {},
    options: {
        async: true,
        timeout: 0,
        username: null,
        password: null
    },
    headers: {}
};

AJAX.prototype._handleResponse = function (event) {
    //Użyte 'this._xhr' tak więc this to obiekt AJAX. 
    //Działa ponieważ wcześniej:
    //this._handleResponse.bind(this)
    if (this._xhr.readyState === 4 && this._xhr.status === 200) {
        if(typeof this._config.success === 'function'){
            //Wywołanie funckcji zdefiniowanej przez użytkownika (w config)
            this._config.success(this._xhr.response, this._xhr);
        }
    } else if (this._xhr.readyState === 4 && this._xhr.status >= 400 && this._xhr.status){
        this._handleError();    //Gdy wystąpi błąd 401, 404 etc.
    }
}

AJAX.prototype._handleError = function (event) {
    if(typeof this._config.failure === 'function'){
        this._config.failure(this._xhr);
    }
}

AJAX.prototype._assignEvents = function () {
    //W tym miejscu bindujemy handlery na nasz obiekt bo this._handleError normalnie
    //kieruje na obiekt '_xhr'. Musimy więc nabinodwać to na obiekt klasy 'AJAX'.
    this._xhr.addEventListener("readystatechange", this._handleResponse.bind(this), false);
    this._xhr.addEventListener("abort", this._handleError.bind(this), false);
    this._xhr.addEventListener("error", this._handleError.bind(this), false);
    this._xhr.addEventListener("timeout", this._handleError.bind(this), false);
}

//Łączenie podstawowych konfiguracji z konfiguracjami użytkownika,
//Jeśli użytkownik nie podał jakieś konfiguracji, zostanie
//wartość domyślna.
AJAX.prototype._extendOptions = function (config) {
    /*
    Nadpisywanie domyślnych funkcji (błedny przykład)
    for (var key in this._defaultConfig) {
        if(key in config){
            //Nadpisujemy wartość własności "_defaultConfig".
            //Nie jest to dobre rozwiązanie bo nadpisujemy własność
            //prototypu AJAX (AJAX.prototype._defaultConfig) tak wiec,
            //wszystkie obiekty klasy AJAX będą miały zmieniony obiekt
            //"_defaultConfig".
            this._defaultConfig[key] = config[key];
        }
    }
    */

    //Tip - kopiowanie obiektu. Nie działa na obiektach z funkcjami
    //(bo nie można parsować do JSON'a).
    var defaultConfig = JSON.parse(JSON.stringify(this._defaultConfig));

    //Nadpisywanie kopii obiektu "this._defaultConfig".
    for (var key in defaultConfig) {
        //Jeśli klucz znajduje się w obiekcie 'config' to nie 
        //nadpisuj config.
        if (key in config) {
            continue;
        }
        //Jeśli dany klucz (z defaultConfig) nie istnieje w 'config',
        //to go dopisz do 'config'.
        config[key] = defaultConfig[key];
    }

    return config;
}

AJAX.prototype._assignUserHeaders = function () {
    //Sprawdzanie czy w 'this._config.headers' są jakieś klucze(nagłówki).
    if (Object.keys(this._config.headers).length) {
        for (var key in this._config.headers) {
            this._xhr.setRequestHeader(key, this._config.headers[key]);
        }
    }
}

//Wewnętrzna metoda do konstruowania zapytania.
//Wszystkie konfiguracje bierzemy ze zdefiniowanego
//pola 'this._config'
AJAX.prototype._open = function () {
    this._xhr.open(
        this._config.type,
        this._config.url,
        this._config.options.async,
        this._config.options.username,
        this._config.options.password
    );

    //Ten nagłówek powinien być zawsze (wskazuje że to zapytanie AJAX)
    this._xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

    this._xhr.timeout = this._config.options.timeout;
}

AJAX.prototype._beforeSend = function () {
    
    //Sprawdzanie czy w obiekcie data są jakieś wartości.
    var isData = Object.keys(this._config.data).length > 0;
    var data = null;

    //Sprawdzanie typu rządania. Metoda 'toUpperCase' zwraca 
    //stringa w dużych literach żeby być pewny że system rozpozna
    //'Post', 'post', 'PoSt' etc.
    //Dodatkowo sprawdzamy czy są wogóle jakieś dane.
    if(this._config.type.toUpperCase() === "POST" && isData){
        data = this._serializeFormData(this._config.data)
    } else if (this._config.type.toUpperCase() === "GET" && isData){
        //Przy GET dodajemy do url'a query stinga
        this._config.url += '?' + this._serializeData(this._config.data);
    }
    
    console.log(this._config.url);
    this._open();
    this._assignUserHeaders();
    this._send(data);
}

AJAX.prototype._send = function (data) {
    this._xhr.send(data);
}

AJAX.prototype._serializeData = function(data){
    var serialized = "";
    
    //Tworzenie query stringa. Metoda 'encodeURIComponent'
    //enkoduje stringi do odpowiedniego typu (zamienia spacje itp.)
    for(var key in data){
        serialized += key + "=" + encodeURIComponent(data[key]) + "&";
    }
    //key1=abx&key2=ass&


    return serialized.slice(0, serialized.length - 1)
    //key1=abx&key2=ass
}

//Serializacja danych podanych przez użytkownika do typu FormData.
//Funkcja działa dla rządania typu "POST".
AJAX.prototype._serializeFormData = function (data) {
    var serialized = new FormData();

    //Dodawanie wartości klucz-wartość do serializatora
    for (var key in data) {
        serialized.append(key, data[key]);
    }

    return serialized;
}

AJAX({
    type: "Post",
    url: "getForm.php",
    data: {
        firstName: "Jan",
        lastName: "Kowalski Wielgus"
    },
    headers: {
        "X-My-Header": "123#asdf"
    },
    success: function (response, xhr) {
        console.log("Done! Status: " + xhr.status + ", Data: " + response);
    },
    failure: function (xhr) {
        console.log("Error! Status: " + xhr.status)
    }
});