
/**
 * 
 * Scroll into view plugin
 * 
 */

(function($) {
  
    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */
  
    $.fn.visible = function(partial) {
      
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
      
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    };
  })(jQuery);

  // Animate cards when they enter viewport.

  $(window).scroll(function(event) {
    $(".card").each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in"); 
      } 
    });
  });

  // Animate photos when they enter viewport.

  $(window).scroll(function(event) {
    $(".gallery-image").each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in"); 
      } 
    });
  });

// Add navbar logo when you scroll past landing section.

 $(window).scroll(function(){
  if ($(window).scrollTop() > $('#landing').height()) {
    $('#nav-logo').fadeIn();
  } else {
    $('#nav-logo').fadeOut();
  } 
 })

 $(window).resize(function(){
   if($(window).width() < 768) {
    $('#nav-logo').css('display', 'none');
   }
 })

// Background image parallax effect.

 $('#landing').parallax({imageSrc: 'img/concert3.jpeg'});
 $('#about').parallax({imageSrc: 'img/record.jpeg'});
 $('#shows').parallax({imageSrc: 'img/mic3.jpg'});


//  $(window).resize(function(){
//    if($(this).width() < 700) {
//     $('#shows').css('background-color', 'black');
//    } else {
//     $('#shows').css('background-color', 'transparent');
//    }
//  })