function calculate() {

    var num1 = parseInt(document.getElementById("num1Box").value) ;
    var num2 = parseInt(document.getElementById("num2Box").value) ;

    var greater = 0;

    if (num1 > num2) {
        greater = num1;
        console.log("The greater number is: " + num1);
    }
    else if (num2 > num1) {
        greater = num2;
        console.log("The greater number is: " + num2);
    }
    else {
        greater = num1; 
        console.log("Both numbers are equal.");
    }

    document.getElementById("resultBox").value = greater;

}