function init() {
    //setupDragDrop();
}

function displayFile() {
  var file = document.getElementById("file-input").files[0];
  var maxwords = parseInt(document.getElementById("value"));
  
  var reader = new FileReader();
  
  reader.onload = function() {
    var generated = getMarkov(this.result, 500);
    var txtNode = document.createTextNode(generated);
    var contentDiv = document.getElementById("contents");
    contentDiv.removeAllChildren();
    contentDiv.appendChild(txtNode);
  }
  
  reader.readAsText(file);
}

function getMarkov(source, maxwords) {
  var m = new Markov(source);
  return m.generate(maxwords);
}

