const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const pw1El = document.getElementById("pw1")
const pw2El = document.getElementById("pw2")
pw1El.textContent = ""
pw2El.textContent = ""

const slider = document.getElementById("slider")
slider.textContent = "Special Chars: OFF"

let lengthOfPw = 10

function generatePw(arr) {
    let randomNumber
    let char
    const password = []
    for (let i = 0; i < lengthOfPw; i++) {
        randomNumber = Math.floor(Math.random() * arr.length)
        char = arr[randomNumber]
        password.push(char)
    }
    return password.join("")
}

let flag = true

function handleClick() {
    if (flag) {
        const checkbox = document.getElementById("slider-btn");
        const newArr = [...characters]
        let pw
        if (checkbox.checked) {
            pw = newArr
        } else {
            const index = newArr.indexOf("9");
            pw = newArr.slice(0, index+1)
        }
        
        const passwords = []
        for (let i = 0; i < 2; i++) {
            passwords.push(generatePw(pw))
        }
        pw1El.textContent = passwords[0]
        pw2El.textContent = passwords[1]
    } else {
        alert("Input does not obey the rules. Enter a number between 3 and 20 !")
    }
}

function handleSlider() {
    if (slider.textContent == "Special Chars: OFF") {
        slider.textContent = "Special Chars: ON"
        slider.style.backgroundColor = "green"
    } else {
        slider.textContent = "Special Chars: OFF"
        slider.style.backgroundColor = "#d90429"
    }
}

function handleChange(event) {
    lengthOfPw = event.target.value;
    if (lengthOfPw > 20 || lengthOfPw < 3 ||isNaN(lengthOfPw)) {
        flag = false
    } else {
        flag = true
    }
}
