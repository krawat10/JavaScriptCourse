(function () {

    function TrollKiller(field, restrictedWords) {
        this._field = field;

        //["kurka", "orzesz ty", "wuj", "psia kość", "motyla noga", "kochany"]
        this._words = restrictedWords.split(/, */);

        //kurka|orzesz ty|wuj|psia kość|motyla noga|kochany
        var group = this._words.join('|');

        // /(kurka|orzesz ty|wuj|psia kość|motyla noga|kochany)/igm
        this._regex = new RegExp("(" + group + ")", "igm");

        this._assignEvents();
    };

    //Trigger an event when user'll put text to this._field
    TrollKiller.prototype._assignEvents = function(){

        //this._filterMessage.bind(this) - assign to TrollKiller, not to _field.
        this._field.addEventListener("keyup", this._filterMessage.bind(this), false);
    }

    TrollKiller.prototype._filterMessage = function(e){
        
        this._field.value = this._field.value.replace(this._regex, function(match){
            
            return this._censorWord(match); //bez .bind(this), 'this' to Window
        
        }.bind(this)); 
    };

    TrollKiller.prototype._censoredSigs = "!#%$@*^".split(''); //["!", "#", "%", "$", "@", "*", "^"]

    TrollKiller.prototype._censorWord = function(word){

        var censored = "";
        var rand = 0;

        //Create word with the same length, but with random symbols from '_censoredSigs'
        for(var i = 0; i < word.length; i++){
            rand = Math.round(Math.random() * (this._censoredSigs.length - 1));
            censored += this._censoredSigs[rand];
        }

        return censored;
    }

    var field = document.querySelector("[name='your-message']");
    var tk = new TrollKiller(field, "kurka, orzesz ty, wuj, psia kość, motyla noga, kochany");
})();