(function(){
    "use strict";	
    console.log("fired");
    var button = document.querySelector("#button");
    var burgerMenu = document.querySelector("#burgerMenu");
  
  function hamburgerMenu() {
    burgerMenu.classList.toggle("slideToggle");
    button.classList.toggle("expanded");
  }
  
  button.addEventListener("click", hamburgerMenu, false);
      
  })();
  