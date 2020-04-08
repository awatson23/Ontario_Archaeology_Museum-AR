var controller = new ScrollMagic.Controller();

   
     
//scroll activated animation of measurement line
var lineAnimation = new ScrollMagic.Scene({
    triggerElement: '.artifact-vertical-line',
    triggerHook: .7,
    reverse: false
     })
     .setClassToggle('.artifact-vertical-line', 'scroll-anim')
     .addTo(controller);  






    
