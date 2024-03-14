function solveEquation() {
    var coefA = parseFloat(document.getElementById('coefA').value);
    var coefB = parseFloat(document.getElementById('coefB').value);
    var resultElement = document.getElementById('result');

    if (isNaN(coefA) || isNaN(coefB)) {
        resultElement.innerHTML = "Hãy nhập đúng hệ số!";
    } else {
        var result = -coefB / coefA;
        resultElement.innerHTML = "Nghiệm x: " + result;
    }
}
