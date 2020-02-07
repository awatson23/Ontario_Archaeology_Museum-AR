var controller = new ScrollMagic.Controller();

var scrolldetail1 = new ScrollMagic.Scene({
    triggerElement: '.circ',
    triggerHook: .8,
    reverse:false
     })
    .setClassToggle('.circ', 'scroll-anim')
    .addTo(controller);


// slide in image animation

    var scrollimage1 = new ScrollMagic.Scene({
        triggerElement: '.img_1',
        triggerHook: .8,
        reverse:true
         })
        .setClassToggle('.img_1', 'scroll-img1')
        .addTo(controller);