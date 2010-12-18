Node.prototype.removeAllChildren = function() {
    while (this.hasChildNodes()) {
      this.removeChild(this.firstChild);
    }
}