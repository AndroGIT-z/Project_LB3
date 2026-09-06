function getLength() {
    var value = parseFloat(document.getElementById("lengthValue").value);

    if (isNaN(value)) {
        alert("Please enter a valid number.");
        return null;
    }

    return value;
}

function showConversion(text) {
    document.getElementById("conversionResult").innerHTML = text;
}

function cmToMetre() {
    var value = getLength();
    if (value === null) return;
    showConversion(value + " cm = " + (value / 100).toFixed(4) + " m");
}

function metreToCm() {
    var value = getLength();
    if (value === null) return;
    showConversion(value + " m = " + (value * 100).toFixed(2) + " cm");
}

function metreToKm() {
    var value = getLength();
    if (value === null) return;
    showConversion(value + " m = " + (value / 1000).toFixed(6) + " km");
}

function kmToMetre() {
    var value = getLength();
    if (value === null) return;
    showConversion(value + " km = " + (value * 1000).toFixed(2) + " m");
}
