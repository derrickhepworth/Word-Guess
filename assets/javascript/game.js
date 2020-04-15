


    var bandGuessGame ={
        bandsToPick: {
            afi: {
                picture:"",
                song: "",
                preview:""
            },
            brandNew: {
                picture:"",
                song: "",
                preview:""
            },
            dashboardConfessional: {
                picture:"",
                song: "",
                preview:""
            },
            myChemicalRomance: {
                picture:"",
                song: "",
                preview:""
            },
            falloutBoy: {
                picture:"",
                song: "",
                preview:""
            },
            yellowcard: {
                picture:"",
                song: "",
                preview:""
            }

        },

        wordInPlay: null,
        lettersOfWord: [],
        matchedLetters:[],
        guessedLetters: [],
        guessesleft: 0,
        totalGuesses: 0,
        letterGuessed: null,
        wins: 0,

        //called when page loads
        setUpGame: function(){
            //picks a word randlomly from object
            var objKeys = Object.keys(this.bandsToPick);
            this.wordInPlay =objKeys[Math.floor(Math.random() *objKeys.length)];

            //splits word by letters
            this.lettersOfWord =this.wordInPlay.split("");

            this.rebuildWordView();

            this.processUpdateTotalGuesses();
        },

        updatePAge: function(letter) {
            if (this.guessesLeft === 0){
                this.restartGame();
            }else{
                this.updateGuesses(letter);
                this.updateMAtchedLetters(letter);
                this.rebuildWordView();
                if(this.updateWins() === ture){
                    this.restartGame();
                }
            }

        },
        





















    }







    


