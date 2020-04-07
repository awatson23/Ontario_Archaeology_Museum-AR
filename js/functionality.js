// CONSOLE LOG TEST…
console.log('FIRING CYLINDERS');


// This nav slide is equal to an anonymous function
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle nav
    // When user clicks on the burger it will get the class of 'nav-links'
    burger.addEventListener('click', () => {
        // Run this function toggle now  of nav-active…
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            // Run a function…with a delay of 0.3
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.3}s`;
            }
          });
          // Toggle the burger icon back and forth
          burger.classList.toggle = ('toggle');
    });

}


navSlide();

