(function() {

    function JSONP(url, callbackName) {

        var script = document.createElement("script");

        script.type = "text/javascript";
        script.async = true;
        script.src = url + "?callback=" + callbackName;

        document.head.appendChild(script);

    }

    function showData(data) {

        var pre = document.createElement("pre");

        pre.textContent = JSON.stringify(data);
        document.body.appendChild(pre);

    }

    document.querySelector("#loadData").onclick = function(e) {

        JSONP("http://eduweb.dev/get_data.php", "showData");

    };

    window.showData = showData;

})();