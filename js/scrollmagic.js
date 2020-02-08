var controller = new ScrollMagic.Controller();

var scrolldetail1 = new ScrollMagic.Scene({
    triggerElement: '.circ',
    triggerHook: .7,
    reverse: true
     })
    .setClassToggle('.circ', 'scroll-anim')
    .addTo(controller);


// slide in image animation

var scrollimage1 = new ScrollMagic.Scene({
    triggerElement: '.img_1',
    triggerHook: .8,
    reverse: true
     })
     .setClassToggle('.img_1', 'scroll-img1')
     .addTo(controller);    


// text Animation potinfo2
var textimg1 = new ScrollMagic.Scene({
    triggerElement: '.potInfo_2 p',
    triggerHook: .9,
    reverse: true 
     })
     .setClassToggle('.potInfo_2 p', 'textimg1-anim' )
     .addTo(controller);


var scrolldetail2 = new ScrollMagic.Scene({
    triggerElement: '.potSize',
    triggerHook: .8,
    reverse: true
        })
    .setClassToggle('.potSize p', 'scroll-anim')
    .addTo(controller);

var scrolldetail3 = new ScrollMagic.Scene({
    triggerElement: '.potInfo',
    triggerHook: .8,
    reverse: true
        })
    .setClassToggle('.potInfo', 'scroll-anim')
    .addTo(controller);


    // left to right box animation
    
var scrollimage2 = new ScrollMagic.Scene({
    triggerElement: '.img_2',
    triggerHook: .8,
    reverse: true
        })
    .setClassToggle('.img_2', 'scroll-img2')
    .addTo(controller);

var textimg2 = new ScrollMagic.Scene({
    triggerElement: '.potInfo_3 p',
    triggerHook: .9,
    reverse: true 
        })
        .setClassToggle('.potInfo_3 p', 'textimg2-anim' )
        .addTo(controller);