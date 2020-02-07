var controller = new ScrollMagic.Controller();

var scrolldetail1 = new ScrollMagic.Scene({
    triggerElement: '.circ',
    triggerHook: .8,
    reverse:false
     })
    .setClassToggle('.circ', 'scroll-anim')
    .addTo(controller);