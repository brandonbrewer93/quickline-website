var menuButton = document.getElementById("menu-nav-button")
var nav = document.getElementById("menu-nav-hidden")

menuButton.addEventListener("click", function(){
  if (nav.getAttribute("id") == "menu-nav-hidden"){
    nav.setAttribute("id", "menu-nav-show"); 
  } else {
    nav.setAttribute("id", "menu-nav-hidden");
  }
})