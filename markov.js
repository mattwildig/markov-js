var MARKOV_SENTINEL_WORD = "SENTINEL";

function Markov(source) {    
    words = source.trim().split(/\s+/);
    
    var prefix_tab = {};
    
    var current_prefix = [MARKOV_SENTINEL_WORD, MARKOV_SENTINEL_WORD];
    
    function prefixKey() {return current_prefix.join("|");}
    
    for (var i = 0; i<words.length; i++) {
        
        var key = prefixKey();
        
        prefix_tab[key] = prefix_tab[key] || [];
        prefix_tab[key].push(words[i]);
        
        current_prefix.shift();
        current_prefix.push(words[i]);
    }
    
    prefix_tab[prefixKey()] = prefix_tab[prefixKey()] || [];        
    prefix_tab[prefixKey()].push(MARKOV_SENTINEL_WORD);
    
    this.generate = function(maxwords) {
        var generated = "";
        var current_prefix = [MARKOV_SENTINEL_WORD, MARKOV_SENTINEL_WORD];
        
        while(maxwords-- > 0) {
            var key = current_prefix.join("|");
            var list = prefix_tab[key];  
            var nextWord = list[Math.floor(Math.random() * list.length)];
            
            if(nextWord == MARKOV_SENTINEL_WORD) break;
            generated += nextWord + " ";
            
            current_prefix.shift();
            current_prefix.push(nextWord);
        }
        
        return generated;
    }
}

