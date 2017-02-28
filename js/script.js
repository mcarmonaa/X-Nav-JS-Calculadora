(function() {
    var operators = [];
    var display = document.getElementById("calculator-display");
    var resultDisplay = document.getElementById("calculator-result");

    document.getElementById("zero").addEventListener("click", function(e) {
        operators.push(0);
        display.innerHTML += "0";
    }, false);


    document.getElementById("one").addEventListener("click", function(e) {
        operators.push(1);
        display.innerHTML += "1";
    }, false);

    document.getElementById("plus").addEventListener("click", function(e) {
        display.innerHTML += "+";
    }, false);

    document.getElementById("equal").addEventListener("click", function(e) {
        var result = 0;
        for (var op in operators) {
            result = (result + operators[op]) % 2;
        }
        resultDisplay.innerHTML += result;
    }, false);

    document.getElementById("clear").addEventListener("click", function(e) {
        operators = [];
        display.innerHTML = "";
        resultDisplay.innerHTML = "";
    }, false);
})();
