function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Function to clear display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Function to calculate result
function calculateResult() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch {
        document.getElementById("display").value = "Error";
    }
}
