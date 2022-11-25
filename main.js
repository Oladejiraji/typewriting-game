const TypeWriter = function(txtElement, words, wait = 3000){
    this.txtElement = txtElement;
    this.words = words;
    this.wait = '';
    this.WordIndex = '0';
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

//Type