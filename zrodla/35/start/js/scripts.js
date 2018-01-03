(function() {

    function TrollKiller(field, restrictedWords) {

        this._field = field;
        this._words = restrictedWords.split(/, */);
        this._regex = new RegExp("(" + this._words.join("|") + ")", "igm");

        this._assignEvents();

    }

    TrollKiller.prototype._assignEvents = function() {

        this._field.addEventListener("keyup", this._filterMessage.bind(this), false);

    };

    TrollKiller.prototype._filterMessage = function(e) {

        console.log(e);

    };

    var tk = new TrollKiller(
        document.querySelector("[name='your-message']"),
        "kurka, orzesz ty, wuj, psia kość, motyla noga, kochany"
    );

})();