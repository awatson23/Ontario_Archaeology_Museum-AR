var controller = new ScrollMagic.Controller();

var scrolldetail1 = new ScrollMagic.Scene({
    triggerElement: '.circ',
    triggerHook: .7,
    reverse: true
     })
    .setClassToggle('.circ', 'scroll-anim')
    .addTo(controller);

var scrolldetail2 = new ScrollMagic.Scene({
    triggerElement: '.potSize p',
    triggerHook: 1,
    reverse: true
        })
    .setClassToggle('.potSize p', 'scroll-anim')
    .addTo(controller);

var scrolldetail2 = new ScrollMagic.Scene({
    triggerElement: '.potSize p',
    triggerHook: 1,
    reverse: true
        })
    .setClassToggle('.potSize p', 'scroll-anim')
    .addTo(controller);