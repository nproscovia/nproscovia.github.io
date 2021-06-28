

window.onload = function () {
    "use strict";

    
    const clickedButton = document.getElementById("decoButton");
    
    clickedButton.onclick = updateTimerAtInterval;

    
    const textArea = document.getElementById("inputTextArea");

    function makeAlertCall() { 
        alert("Hello World!");
    }

    function changeFontOfTextArea() { 
        textArea.style.fontSize = "24pt";
    }

    
    const checkBox = document.getElementById("checkBox");
   
    checkBox.onchange = checkIfCheckBoxIsOn;

    
    function changeStyleOfTextArea(shouldBold) {
        const wholePage = document.getElementById("body");
        if (shouldBold) {
            textArea.style.fontWeight = "bold";
            textArea.style.color = "green";
            textArea.style.textDecoration = "underline";
            wholePage.style.backgroundImage = "url(./dollar.jpg)";
        } else {
            textArea.style.fontWeight = "normal";
            textArea.style.color = "black";
            textArea.style.textDecoration = "none";
            wholePage.style.backgroundImage = "none";
        }
    }

    
    function checkIfCheckBoxIsOn() {
        changeStyleOfTextArea(checkBox.checked);
    }

   
    let timer = null;

    function updateTimerAtInterval() {
        if (timer === null) {
            timer = setInterval(incrementFontSize, 500);
        } else {
            clearInterval(timer);
            timer = null;
        }
    }

  
    function incrementFontSize() {
        let prevFont = window.getComputedStyle(textArea, null).getPropertyValue("font-size");
        textArea.style.fontSize = parseInt(prevFont) + 2 + "pt";
    }

    const pigLatinButton = document.getElementById("pigLatinButton");
    const malkovitchButton = document.getElementById("malkovitchButton");

    pigLatinButton.onclick = convertToPigLatin;
    malkovitchButton.onclick = convertToMalkovitch;

    function convertToPigLatin() {
        const inputText = document.getElementById("inputTextArea").value;
        let trimmedText = inputText.trim();
        if (trimmedText !== "") {
            let firstChar = trimmedText.charAt(0);
            if (!isVowel(firstChar)) {
                trimmedText = trimmedText.substring(1, trimmedText.length) + firstChar + "ay";
            } else {
                trimmedText = trimmedText + "ay";
            }
            textArea.value = trimmedText;
        }
    }

    function isVowel(testChar) {
        let upperCasedChar = testChar.toUpperCase();
        return upperCasedChar === "A" || upperCasedChar === "E" ||
            upperCasedChar === "I" || upperCasedChar === "O" ||
            upperCasedChar === "U";
    }

    function convertToMalkovitch() {
        const inputText = document.getElementById("inputTextArea").value;
        let trimmedText = inputText.trim();
        const wordsArray = trimmedText.split(" ");
        for (let i = 0; i < wordsArray.length; i++) {
            if (wordsArray[i].length >= 5) {
                wordsArray[i] = "Malkovich";
            }
        }
        let output = "";
        for (let i = 0; i < wordsArray.length; i++) {
            output = output + wordsArray[i] + " ";
        }
        document.getElementById("inputTextArea").value = output;
    }
};