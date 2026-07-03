function calculate() {

    var age = parseInt(document.getElementById("ageBox").value) ;

    var status = "";

    if (age >= 18) {
        status = "Eligible to vote";
    }
    else {
        status = "Not eligible to vote";
    }

    console.log(status);

    document.getElementById("resultBox").value = status;

}