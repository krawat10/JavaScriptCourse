(function() {

    function showData(data) {

        var pre = document.createElement("pre");

        pre.textContent = JSON.stringify(data);
        document.body.appendChild(pre);

    }

    document.querySelector("#loadData").onclick = function(e) {

        var data = {
            firstName: "Jan",
            lastName: "Kowalski",
            age: 32
        };

        showData(data);

    };

})();