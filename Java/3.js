function calculate() {

    var num1 = parseInt(document.getElementById("num1Box").value) ;
    var num2 = parseInt(document.getElementById("num2Box").value) ;
    var num3 = parseInt(document.getElementById("num3Box").value) ;

    var greatest = 0;

    if (num1 >= num2 && num1 >= num3) {
        greatest = num1;
    }
    else if (num2 >= num1 && num2 >= num3) {
        greatest = num2;
    }
    else {
        greatest = num3;
    }

    console.log("The greatest number is: " + greatest);

    document.getElementById("resultBox").value = greatest;

}