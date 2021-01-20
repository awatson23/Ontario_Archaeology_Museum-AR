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

if(!pwa){
    popUp.style.display = "block";
    localStorage.setItem('pwa','true');
}