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
// 4. uppercase into lowercase
function convertToLowercase() {
    const uppercase = "I'M NOAH FISHER, A SOUND ENGINEER FROM GEORGIA AND i CAN'T TYPE UPPERCASE TEXT. LOL";
    const lowercase = uppercase.toLowerCase();
    return lowercase;
}
console.log(convertToLowercase());

// 5. number array 4 of them is more than 100
function checkNumbers() {
    const numbers = [10, 121, 99, 151, 2012, 32, 85, 1095, 75, 312];
    const moreThan100 = numbers.filter(num => num > 100);
    return [moreThan100.length,moreThan100,];
}
const [numLength, numArray] = checkNumbers();
console.log(numLength);
console.log(numArray);

// 6. cheapest product from data.js
const items = data.items;  
console.log(items);  

function cheapestItem(items) {
    if (!items || items.length === 0) return null;
    return items.reduce((min, item) => (item.price < min.price ? item : min));
    }

const cheapest = cheapestItem(items);
console.log("Cheapest item:", cheapest);

// 7.findbyid function
const users = [
    { id: "1", name: "Ana" },
    { id: "2", name: "Giorgi"},
    { id: "3", name: "Nino" },
    { id: "4", name: "David" },
    { id: "5", name: "Mariam" },
    { id: "6", name: "Irakli" },
    { id: "7", name: "Salome" }
];
function findById(users, id) {
    return users.find(user => user.id === id);
}
console.log(findById(users, "3"));