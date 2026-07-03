function calculate() {

    var char = document.getElementById("charBox").value ;

    var result = "";

    if (char === "A" || char === "a" ||
        char === "E" || char === "e" ||
        char === "I" || char === "i" ||
        char === "O" || char === "o" ||
        char === "U" || char === "u") {
        result = char + " is a vowel.";
    }
    else {
        result = char + " is a consonant.";
    }

    console.log(result);

    document.getElementById("resultBox").value = result;

}