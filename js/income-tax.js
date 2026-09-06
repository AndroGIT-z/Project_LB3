function calculateIncomeTax() {
    var income = parseFloat(document.getElementById("income").value);

    if (isNaN(income) || income < 0) {
        alert("Please enter a valid yearly income.");
        return;
    }

    var tax = 0;
    var category = "";

    if (income <= 5000) {
        tax = 0;
        category = "A";
    } else if (income <= 20000) {
        tax = (income - 5000) * 0.01;
        category = "B";
    } else if (income <= 35000) {
        tax = 150 + (income - 20000) * 0.03;
        category = "C";
    } else if (income <= 50000) {
        tax = 600 + (income - 35000) * 0.08;
        category = "D";
    } else if (income <= 70000) {
        tax = 1800 + (income - 50000) * 0.13;
        category = "E";
    } else if (income <= 100000) {
        tax = 4400 + (income - 70000) * 0.21;
        category = "F";
    } else if (income <= 250000) {
        tax = 10700 + (income - 100000) * 0.24;
        category = "G";
    } else if (income <= 400000) {
        tax = 46700 + (income - 250000) * 0.245;
        category = "H";
    } else if (income <= 600000) {
        tax = 83450 + (income - 400000) * 0.25;
        category = "I";
    } else if (income <= 1000000) {
        tax = 133450 + (income - 600000) * 0.26;
        category = "J";
    } else if (income <= 2000000) {
        tax = 237450 + (income - 1000000) * 0.28;
        category = "K";
    } else {
        tax = 517450 + (income - 2000000) * 0.30;
        category = "L";
    }

    document.getElementById("taxResult").innerHTML =
        "Category: " + category +
        "<br>Tax Amount: RM " + tax.toFixed(2);
}

function clearTax() {
    document.getElementById("income").value = "";
    document.getElementById("taxResult").innerHTML = "";
    document.getElementById("income").focus();
}
