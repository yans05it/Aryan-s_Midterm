function calculate() {

    var temp = parseFloat(document.getElementById("tempBox").value);

    var weather = "";

    if (temp <= 0) {
        weather = "Freezing weather";
    }
    else if (temp <= 10) {
        weather = "Very Cold weather";
    }
    else if (temp <= 20) {
        weather = "Cold weather";
    }
    else if (temp <= 30) {
        weather = "Normal in Temp";
    }
    else if (temp <= 40) {
        weather = "Its Hot";
    }
    else if (temp > 40) {
        weather = "Its Very Hot";
    }


    document.getElementById("resultBox").value = weather;

}