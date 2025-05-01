'use strict'

//Trying desperately to toggle light dark mode, but it didn't work.
let darkMode = document.getElementById("darkButton");
let dark = document.querySelector("turnDark")
darkMode.addEventListener("click", function(){
    darkMode.classList.toggle("darkButton");
});



