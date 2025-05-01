'use strict'

let darkMode = document.getElementById("darkButton");
let dark = document.querySelector("turnDark")


darkMode.addEventListener("click", function(){
    darkMode.classList.toggle("darkButton");
});

