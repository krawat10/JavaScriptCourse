(function() {

    var form = document.querySelector("#form"),
        message = document.querySelector("#message");

    function showMessage(type, msg) {

        message.className = type;
        message.innerHTML = msg;

    }

    function sendEmail(e) {

        e.preventDefault();

    }

    form.addEventListener("submit", sendEmail, false);

})();