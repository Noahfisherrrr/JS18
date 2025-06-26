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

// 