// 1. function to check if name is empty

function emptyName(input) {
    return !input || input.trim() === "";;
}
function checkName() {
    const inputField = document.getElementById("nameInput");
    const name = inputField.value;

let result = emptyName(name)
    if (emptyName(name)) {
    result = "Name is empty.";
    } else {
    result = "Name is valid.";
    }

document.getElementById("result").textContent = result;
}
console.log(emptyName(""));
console.log(emptyName("   "));
console.log(emptyName("1992/04"));
console.log(emptyName("Noah Fisher"));

// 2. dollar to gel converter
function convert() {
    const dollar = 5;
    const currencyRate = 2.74;
    const gel = dollar * currencyRate;
    return `${dollar} dollars is equal to ${gel} GEL.`;
}
console.log(convert());

// 3. currency converter
function convertCurrency() {
    const amount = parseFloat(document.getElementById("currencyInput").value);
    const selectedCurrency = document.getElementById("currencySelect").value;
    let currencyRate;

    switch (selectedCurrency) {
        case "USD":
            currencyRate = 2.7210; 
            break;
        case "EUR":
            currencyRate = 3.1800; 
            break;
        case "GBP":
            currencyRate = 3.7063; 
            break;
        default:
            currencyRate = "unknown currency"; 
    }
    const convertedAmount = amount * currencyRate;
    document.getElementById("currencyResult").textContent = `converted amount in GEL: ${convertedAmount}`;
}
