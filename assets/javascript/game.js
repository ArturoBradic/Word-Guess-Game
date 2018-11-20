// Assign all words as an object, and a make an empty word list array

words = {};
words.list = [];

//create a word array for each word in word.list
words.list[0] = "bulbasaur";
words.list[1] = "charizard";
words.list[2] = "wartortle";
words.list[3] = "butterfree";
words.list[4] = "kakuna";
words.list[5] = "spearow";
words.list[6] = "raichu";
words.list[7] = "clefairy";
words.list[8] = "ninetailes";
words.list[9] = "wigglytuff";
words.list[10] = "vileplume";
words.list[11] = "parasect";
words.list[12] = "persian";
words.list[13] = "poliwhirl";
words.list[14] = "vaporeon";
words.list[15] = "jolteon";
words.list[16] = "mrmime";
words.list[17] = "vulpix";
words.list[18] = "ninjask";
words.list[19] = "venusaur";
words.list[20] = "milotic";


//Gives us length of the list

words.length = words.list.length;


//Set up word guesses variables


main = {};
main.wordArray = [];
main.wordUArray = [];

main.guesses = 10;
main.numInWordBank = words.length;

main.word = "test";
main.wordU = "";


// Functions

main.pullword = function () {
    main.word = words.list[(Math.floor(Math.random() * main.numInWordBank))];
}

main.setUnderline = function () {
    main.pullword();
    for (i = 0; i < main.word.length; i++) {
        main.wordArray[i] = main.word.charAt(i);
        main.wordUArray[i] = "_";
    }

    main.wordU = main.wordUArray.join("");

    //Update the letter that we are assigning


    main.updateLetter = function (letter) {

        main.changes = 0;
        for (i = 0; i < main.word.length; i++) {
            main.wordArray[i] = main.word.charAt(i);
            if (main.word.charAt(i) == letter) {
                main.wordUArray[i] = letter;
                main.changes += 1;
                main.wordU = main.wordUArray.join("");
                document.getElementById("WORD").innerHTML = main.wordU;

            }


        }

        if (main.changes < 1) {
            main.guesses -= 1;
            document.getElementById("guesses").innerHTML = main.guesses;
        }
        main.wordU = main.wordUArray.join("");
        document.getElementById("WORD").innerHTML = main.wordU

        main.word1 = main.wordArray.join("");
        main.word2 = main.wordUArray.join("");

        if (main.word1 == main.word2) {
            alert("YOU SOLVED THE CASE!");
            window.location.reload();
        }

        if (main.guesses < 1) {
            document.getElementById("WORD").innerHTML == main.word1;
            alert("YOU LOST THE CASE, DETECTIVE!");
            window.location.reload();
        }

    }


}

//Set up keyup Event Listeners for each letter

document.addEventListener("keyup", function (event) {
    var userGuess = event.key;
    if (userGuess === "a") {
        main.updateLetter("a");
    } else if (userGuess === "b") {
        main.updateLetter("b");
    } else if (userGuess === "c") {
        main.updateLetter("c");
    } else if (userGuess === "d") {
        main.updateLetter("d");
    } else if (userGuess === "e") {
        main.updateLetter("e");
    } else if (userGuess === "f") {
        main.updateLetter("f");
    } else if (userGuess === "g") {
        main.updateLetter("g");
    } else if (userGuess === "h") {
        main.updateLetter("h");
    } else if (userGuess === "i") {
        main.updateLetter("i");
    } else if (userGuess === "j") {
        main.updateLetter("j");
    } else if (userGuess === "k") {
        main.updateLetter("k");
    } else if (userGuess === "l") {
        main.updateLetter("l");
    } else if (userGuess === "m") {
        main.updateLetter("m");
    } else if (userGuess === "n") {
        main.updateLetter("n");
    } else if (userGuess === "o") {
        main.updateLetter("o");
    } else if (userGuess === "p") {
        main.updateLetter("p");
    } else if (userGuess === "q") {
        main.updateLetter("q");
    } else if (userGuess === "r") {
        main.updateLetter("r");
    } else if (userGuess === "s") {
        main.updateLetter("s");
    } else if (userGuess === "t") {
        main.updateLetter("t");
    } else if (userGuess === "u") {
        main.updateLetter("u");
    } else if (userGuess === "v") {
        main.updateLetter("v");
    } else if (userGuess === "w") {
        main.updateLetter("w");
    } else if (userGuess === "x") {
        main.updateLetter("x");
    } else if (userGuess === "y") {
        main.updateLetter("y");
    } else if (userGuess === "z") {
        main.updateLetter("z");
    }

})

main.guessesUsed = function(guesses){
    document.getElementById("user-guesses").innerHTML = main.guessesUsed("");
}


main.pullword();
main.setUnderline();

