// little standalone file to test
// run with v8

load("utils.js");
load("markov.js");

var txt = read("alice.txt")

var markov = new Markov(txt);

var out = markov.generate(500);

print(out);
