var logo = $(".logo");
var nav = $("nav");
var button = $("header div");
var menu = $(".header-nav");
var mobileNav = $(".mobile-nav")
var footer = $("footer");

logo.fadeIn(2000);

nav.show(2000);

footer.fadeIn(2000);

button.click(function() {
  button.hide();
  mobileNav.slideDown();
});

mobileNav.mouseleave(function() {
  mobileNav.slideUp();
  button.show();
})

var width = $(window).width();

if (width > 700) {
  mobileNav.css("display", "none");
}