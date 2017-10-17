const logo = $(".logo");
const nav = $("nav");
const mobileButton = $(".mobile-nav-button");
const menu = $(".header-nav");
const mobileNav = $(".mobile-nav");
const footer = $("footer");

//Fade in content.

logo.addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  $(this).removeClass('animated flipInX');
});

nav.show(2000);


// Scroll to corresponding div when nav buttons are clicked and animate the logo.

var links = $('.nav-li');
links.push($('#scroll-arrow'));

$.each(links, function(i, btn){
  $(this).click(function () {
    const target = $(this).attr('data-link');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
    logo.addClass('animated fadeOutDownBig').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass('animated fadeOutDownBig');
    });
  });
});


// Mobile navigation.

mobileButton.click(function() {
  mobileButton.hide();
  mobileNav.slideDown();
});

mobileNav.mouseleave(function() {
  mobileNav.slideUp();
  mobileButton.show();
})


// Parallax effect.

$('.landing').parallax({imageSrc: 'img/concert3.jpeg'});
$('.shows').parallax({imageSrc: 'img/mic3.jpg'});
$('.about').parallax({imageSrc: 'img/record.jpeg'});
$('.pictures').parallax({imageSrc: 'img/blured.jpg'});


//Email validation

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










// Debugging

// $("#newsletter-submit").click(function() {
//   console.log('clicked');
//   if ($('#email').attr('class') == 'invalid') {
//     console.log('invalid');
//   } else if ($('#email').attr('class') == 'valid') {
//     console.log('valid')
//   }
// });