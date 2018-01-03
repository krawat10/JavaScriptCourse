if(typeof NodeList.prototype.forEach !== "function") {

    NodeList.prototype.forEach = function(callback) {

        for(var i = 0; i < this.length; i++) {
            callback(this[i]);
        }

    };

}

var elems = document.querySelectorAll("#list li"); // new NodeList()

elems.forEach(function(elem) {

    elem.style.color = "blue";

});