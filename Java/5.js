function calculate() {

    var name = document.getElementById("nameBox").value;
    var tuition = parseFloat(document.getElementById("tuitionBox").value);
    var birthYear = parseInt(document.getElementById("birthYearBox").value);

    var currentYear = 2026;
    var age = currentYear - birthYear;

    var discountRate = 0;

    if (tuition > 50000 && age > 21) {
        discountRate = 0.15;
    }
    else if (tuition > 40000 && age > 20) {
        discountRate = 0.10;
    }
    else if (tuition > 30000 && age > 19) {
        discountRate = 0.05;
    }
    else {
        discountRate = 0.02;
    }

    var discountAmount = tuition * discountRate;
    var payableTuition = tuition - discountAmount;

    document.getElementById("outDiscountBox").value = "Discount of " + name + " is " + discountAmount;
    document.getElementById("outPayableBox").value = "Fees of " + name + " is " + payableTuition;

}