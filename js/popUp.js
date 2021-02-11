var popUp = document.getElementById("popUpWindow");


var span = document.getElementsByClassName("close")[0];

// window.onload = function() {
//     popUp.style.display = "block";
// }


span.onclick = function() {
    popUp.style.display = "none";
}

window.onclick = function() {
    popUp.style.display = "none";

}

let pwa = localStorage.getItem('pwa');

if (!pwa) {
    popUp.style.display = "block";
    localStorage.setItem('pwa', 'true');
}

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeTwo")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}