$("#bs-mirror-btn, #bs-mirror-btn-float").click(function(){
  $("body").toggleClass("bs-mirror");
});    

$(window).scroll(function(){
  if ($(this).scrollTop() >= 300) {$('.mirror-button').fadeIn();} else {$('.mirror-button').fadeOut();}
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".bs-sidebar a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 80
      },800, function(){
   

      });
    } // End if
  });
});