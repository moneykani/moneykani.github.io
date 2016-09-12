$(document).ready(function(){
  $("a.nav-anchor").on('click', function(event) {
      event.preventDefault();

      // Store hash
      var hash = "#" + $(this).attr("data-click");
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){

        window.location.hash = hash;
      });
  });
  
  $("#submit-btn").on("click", function() {
      var from = $("#name-field").val();
	  var email = $("#email-field").val();
	  var msg = $("#comment-field").val();
	  
	  emailjs.send("mailgun", "contact_form", {
	      from: from,
		  email: email,
		  message: msg
	  }).then(function() {
		  $.notify("Sent Email!", "success");
	  }, function(error) {
		  $.notify("Unable to Send Email", "error");
	  });
  });
});
