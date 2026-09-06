function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var heightCm = parseFloat(document.getElementById("height").value);
    var result = document.getElementById("bmiResult");

    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        alert("Please enter a valid weight and height.");
        return;
    }

    var heightM = heightCm / 100;
    var bmi = weight / (heightM * heightM);
    var category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal weight";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    result.innerHTML = "BMI: " + bmi.toFixed(2) + "<br>Category: " + category;
}

function clearBMI() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("bmiResult").innerHTML = "";
    document.getElementById("weight").focus();
}
