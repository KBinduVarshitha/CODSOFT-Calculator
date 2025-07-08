let c = document.getElementById("c");
let mod = document.getElementById("%");
let arrow = document.getElementById("arrow");
let div = document.getElementById("/");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let add = document.getElementById("+");
let sub = document.getElementById("-");
let mul = document.getElementById("*");
let equal = document.getElementById("=");
let doublezero = document.getElementById("00");
let zero = document.getElementById("0");
let dot = document.getElementById(".");
let words = document.getElementsByClassName("words")[0];

let justDone = false;

function pop() {
    let content = words.textContent.toString();
    let ans = content.slice(0, -1);
    words.textContent = ans;
}

function appendChar(char) {
    if (justDone) {
        words.textContent = "";
        justDone = false;
    }
    words.textContent += char;
}

function appendOperator(op) {
    let lastChar = words.textContent.slice(-1);
    if ("+-*/%.".includes(lastChar)) return;
    if (words.textContent === "") return;
    words.textContent += op;
    justDone = false;
}

c.addEventListener("click", () => { words.textContent = ""; justDone = false });

arrow.addEventListener("click", () => pop());

one.addEventListener("click", () => appendChar("1"));
two.addEventListener("click", () => appendChar("2"));
three.addEventListener("click", () => appendChar("3"));
four.addEventListener("click", () => appendChar("4"));
five.addEventListener("click", () => appendChar("5"));
six.addEventListener("click", () => appendChar("6"));
seven.addEventListener("click", () => appendChar("7"));
eight.addEventListener("click", () => appendChar("8"));
nine.addEventListener("click", () => appendChar("9"));
zero.addEventListener("click", () => appendChar("0"));
doublezero.addEventListener("click", () => appendChar("00"));
dot.addEventListener("click", () => appendChar("."));

add.addEventListener("click", () => appendOperator("+"));
sub.addEventListener("click", () => appendOperator("-"));
mul.addEventListener("click", () => appendOperator("*"));
div.addEventListener("click", () => appendOperator("/"));
mod.addEventListener("click", () => appendOperator("%"));

equal.addEventListener("click", () => {
    try {
        let expression = words.textContent;
        let result = Function('"use strict"; return (' + expression + ')')();
        let resultexpression = result.toString();
        let condition=false;
        for (let i = 0; i < resultexpression.length; i++) {
            if (resultexpression[i] === ".") {
                condition=true;
                break;
            }
        }
        if(condition)
        {
            words.textContent=result.toFixed(3);
        }
        else
        {
            words.textContent=result;
        }
        justDone = true;
    } catch (error) {
        words.textContent = "Error";
    }
});
