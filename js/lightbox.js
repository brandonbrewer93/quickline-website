var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");

//An image to overlay
$overlay.append($image);

//Add overlay
$("body").append($overlay);

//Capture the click event on a link to an image
$("#gallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  
  //Show the overlay.
  $overlay.css("display", 'flex');

  $("body").css("overflow-y", "hidden");
  
});

//When overlay is clicked
$overlay.click(function(){
  //Hide the overlay
  $overlay.hide();
  $('body').css('overflow-y', 'visible')
});
