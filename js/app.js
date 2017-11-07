// Background image parallax effect.

$('#landing').parallax({imageSrc: 'img/concert3.jpeg'});
$('#about').parallax({imageSrc: 'img/record2.jpg'});
$('#shows').parallax({imageSrc: 'img/mic3.jpg'});

/**
 * 
 * Scroll into view plugin, checks if an element is in the viewport.
 * 
 **/

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

/**
  * 
  * End of plugin.
  * 
  **/


  // Function to animate element when in viewport.
  function animation(element, animation){
    $(window).scroll(function(event) {
      $(element).each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
          el.addClass(animation); 
        } 
      });
    });
  }
  
  // Animate cards when they enter viewport.
  animation('.card', 'fade-up');
  // Animate photos when they enter viewport.
  animation('.gallery-image', 'fade-up');
  // Animate show list items when they enter viewport.
  animation('#shows .list-group-item', 'fade-right');
  // Animate contact section when it enters the viewport.
  animation('#contact .container', 'fade-up');


// Collect navbar items and down arrow and scroll to corresponding section of the page when clicked, accomplished by using scrollTo.js plugin.

var navButtons = $('.nav-link');
navButtons.push($('#scroll-arrow'));

for (let i = 0; i < navButtons.length; i++) {
  $(navButtons[i]).click(function(){
    var div = $(this).attr('data-link');
    $(window).scrollTo(div, {duration: 1000, offset: -47});
  })
}

// Add navbar logo when you scroll past landing section.

 $(window).scroll(function(){
  if ($(window).scrollTop() > ($('#landing').height() - 100) && $(window).width() > 768) {
    $('#nav-logo').fadeIn();
  } else {
    $('#nav-logo').fadeOut();
  } 
 })

// Hide navbar logo when screen enters medium breakpoint.

 $(window).resize(function(){
   if($(window).width() < 768) {
    $('#nav-logo').css('display', 'none');
   }
 })


// Email Validation

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  var email = $("#email").val();
  if (validateEmail(email)) {
    $('#email').removeClass('invalid');
    $('#email').addClass('valid');
    $('#newsletter-submit').prop('disabled', true);
    $('#newsletter-submit').addClass('animated bounce').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass('animated bounce');
    });
  } else {
    $(this).addClass('animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass('animated shake');
    });
    $('#email').addClass('invalid');
  }
  return false;
}

$("#newsletter-submit").bind("click", validate);


// Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);

$("body").append($overlay)

$(".gallery-image").click(function(event) {
  event.preventDefault();
  var imageLocation = $(this).attr("data-img");
  $image.attr("src", imageLocation);
  
  $('body').css('overflowY', 'hidden');
  $overlay.css('display', 'flex');
})

$overlay.click(function() {
  $('body').css('overflowY', 'visible');
  $overlay.hide();
});