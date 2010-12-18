load("utils.js");
load("markov.js");

var f = new File("alice.txt");
f.open("read", "text");
var txt = f.readAll().join(" ");

var markov = new Markov(txt);

var out = markov.generate(500);

print(out);
