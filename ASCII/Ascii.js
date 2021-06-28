"use strict";
var animation;
window.onload = function() {
    var x = 1;
    function h() {
        var k = 2;
        var summ = function () {
            var z = 3;
            console.log(x + k + z);
        };
        k = 10;
        //z = 12;
        return summ;
    }
    var g = h();
    g();

    // document.getElementById('btnstart').onclick = p;
    // document.getElementById('fontSizes').onchange = setTextAreaFontSize;
    //  document.getElementById('animations').onchange = setTextAreaContent;
    // document.getElementById('btnstart').onclick = startAnimation;
}

function setTextAreaFontSize() {
    let textArea = document.getElementById('animationview');
    let size = parseInt(document.getElementById('fontSizes').value);
    textArea.style.fontSize = size + 'pt';
}

let textAreaContent = function () {
     //let dropdown = document.getElementById('animations');
    return ANIMATIONS[document.getElementById('animations').value];
}

// function startAnimation() {
//     //if()
//     let selectedAnimation = document.getElementById('animations').value;
//     //let selectedAnimation = do
//     let frame = ANIMATIONS[selectedAnimation].split("=====\n");
//     alert(frame.length);

// }

function animateText(arr) {
    arr.forEach(frame => {
        document.getElementById('animationview').innerHTML += frame;
    });
    
}

function f(){
    var a = 1, b = 20, c;
    console.log(a + " " + b + " " + c);

    function g() {
        var b = 300, c = 4000;
        console.log(a + " " + b + " " + c);
        a = a + b + c;
        console.log(a + " " + b + " " + c);
    }
    console.log(a + " " + b + " " + c);
    g();
    console.log(a + " " + b + " " + c);
}
function p() {
    for(var i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log("=====");
    console.log(i);
    if(i > 5) {
        var j = 3;
    }
    console.log(j);
}
