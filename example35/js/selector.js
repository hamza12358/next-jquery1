$(document).ready( function () {
   var text = 55;
   $('#text_feedback').html(text + 'characters remaining');

   $('#text').keyup(function () {
       var text_length = $('#text').val().length;
       var text_remaining = text - text_length;

       $('#text_feedback').html(text_remaining + 'character remaining');
   })
});