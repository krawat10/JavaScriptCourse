function notify(text) {

    var title = document.title;

    var interval = setInterval(function() {

        if(document.title === title) {
            document.title = text + " " + document.title;
        } else {
            document.title = title;
        }

    }, 1000);

}