
$(document).ready(function() {
  $('.popup-with-zoom-anim').magnificPopup({
    type: 'iframe',

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 100,
    mainClass: 'my-mfp-zoom-in'
  });

  $('.popup-with-move-anim').magnificPopup({
    type: 'iframe',

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 100,
    mainClass: 'my-mfp-slide-bottom'
  });
});

