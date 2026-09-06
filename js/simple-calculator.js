function getNumbers() {
    var no1 = parseFloat(document.getElementById("no1").value);
    var no2 = parseFloat(document.getElementById("no2").value);

    if (isNaN(no1) || isNaN(no2)) {
        alert("Please enter two valid numbers.");
        return null;
    }

    return [no1, no2];
}

function doAdd() {
    var numbers = getNumbers();
    if (!numbers) return;
    document.getElementById("result").value = numbers[0] + numbers[1];
}

function doSubtract() {
    var numbers = getNumbers();
    if (!numbers) return;
    document.getElementById("result").value = numbers[0] - numbers[1];
}

function doMultiply() {
    var numbers = getNumbers();
    if (!numbers) return;
    document.getElementById("result").value = numbers[0] * numbers[1];
}

function doDivide() {
    var numbers = getNumbers();
    if (!numbers) return;

    if (numbers[1] === 0) {
        alert("Cannot divide by zero!");
        return;
    }

    document.getElementById("result").value = numbers[0] / numbers[1];
}

function doClear() {
    document.getElementById("no1").value = "";
    document.getElementById("no2").value = "";
    document.getElementById("result").value = "";
    document.getElementById("no1").focus();
}
