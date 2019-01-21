const Letter = function(char,isGuessed) {
    this.char = char;
    this.guessed = isGuessed;
    this.displayCharOrPlac = function () {
        //code block to display the place holder or the character, based on this.guessed.
    };
    this.processGuess = function (letterGuess) {
        //code block to evaluate the guess against this.char.  If true, set this.guessed to true.
    }
}