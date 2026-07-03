// script.js

function showOffer() {
    alert("Special Offer: Get 10% discount on selected mobile phones today!");
}

function addToCart(productName) {
    alert(productName + " has been added to your cart.");
}

function submitContactForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in your name, email, and message.");
    } else {
        alert("Thank you, " + name + "! We received your message about " + phone + ".");
    }
}

function clearContactForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").selectedIndex = 0;
    document.getElementById("message").value = "";

    alert("The contact form has been cleared.");
}