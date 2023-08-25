// matrix_animation.js
const matrixAnimationText = `
Matrix Terminal v1.0

Initializing matrix simulation...

`;

let terminalOutput = document.getElementById("terminal-output");
let commandInput = document.getElementById("command-input");

function typeMatrixAnimation(text) {
    let i = 0;
    terminalOutput.innerHTML = "";
    const typingInterval = setInterval(function () {
        if (i < text.length) {
            terminalOutput.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
            commandInput.focus();
        }
    }, 30);
}

typeMatrixAnimation(matrixAnimationText);

commandInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const command = commandInput.value;
        terminalOutput.innerHTML += `<br><span class="prompt">$</span> ${command}`;
        commandInput.value = "";
    }
});

