// var slideIndex = 0;
// showSlides();
//
// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
jQuery(function ($) {
   var roles = ['Startups', 'Developing', 'Building'];
   //used to determine which is the next roles to be displayed
   var counter = 0;
   var $role = $('#role')
   //repeat the passed function at the specified interval - it is in milliseconds
   setInterval(function () {
       //display the role and increment the counter to point to next role
       $role.text(roles[counter++]);
       //if it is the last role in the array point back to the first item
       if (counter >= roles.length) {
           counter = 0;
       }
   }, 3000)
})
$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '2125240171',
        limit: 4,
        resolution: 'standard_resolution',
        accessToken: '2125240171.1677ed0.0ab5f0fd0f4f442489cb1ce2cd38653f',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();


    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});
