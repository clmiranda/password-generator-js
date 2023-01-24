const generatePassword = (base, includedOneNumber, length) => {
    let password = "", random = 0, random2 = 0, numbers = "";
    if (includedOneNumber) {
        numbers = "0123456789";
        random2 = Math.floor(Math.random() * length);
    }
    for (let x = 0; x < length; x++) {
        if (random2 === x) {
            random = Math.floor(Math.random() * numbers.length);
            password += numbers.charAt(random);
        }
        else {
            random = Math.floor(Math.random() * base.length);
            password += base.charAt(random);
        }
    }
    return password;
}

const generate = () => {
    let length = parseInt(lengthPassword.value);
    let base = "TdZgYaKhiWbSeNlfGXnIAjMkFcPvLCzpEomVtDqQuOrBwJxHyUsR";
    let specialCharacters = ".(¿,^;-}>$_!@?+)%&]#*{¡=:/~[<";
    let numbers = "3064195287";
    let includedOneNumber = false;

    if (checkboxNumbers.checked) {
        base += numbers;
        includedOneNumber = true;
    }
    if (checkboxCharacters.checked) base += specialCharacters;

    passwordGenerated.removeAttribute("hidden");
    passwordGenerated.innerText = generatePassword(base, includedOneNumber, length);
}

window.addEventListener('DOMContentLoaded', () => {
    btnGenerate.addEventListener('click', () => {
        generate();
    })
})

lengthPassword.addEventListener("input", () => {
    valueLength.innerText = lengthPassword.value;
})