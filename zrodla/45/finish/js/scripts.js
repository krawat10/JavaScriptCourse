function notify(text) {

    var title = document.title;

    var interval = setInterval(function() {

        if(document.title === title) {
            document.title = text + " " + document.title;
        } else {
            document.title = title;
        }

    }, 1000);

    return {
        interval: interval,
        title: title
    };

}

function stopNotify(notification) {

    clearInterval(notification.interval);
    document.title = notification.title;

}

var notification = notify("(1)");