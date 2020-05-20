$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});
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
