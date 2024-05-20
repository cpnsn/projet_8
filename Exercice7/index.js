const binaryDisplay = document.getElementById('binaryResult');

function convertToBinary() {
    const inputValue = document.getElementById('decimalInput').value;

    if (isNaN(inputValue)) {
        binaryDisplay.textContent = "";
    } else {
        const number = parseInt(inputValue);
        const binary = number.toString(2);
        binaryDisplay.textContent = binary;
    }
}