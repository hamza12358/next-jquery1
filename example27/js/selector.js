$('#signup_form').submit(function () {
    var users_email = $('#user_email').val();
    $('#signup_feedback').html('thanks' + users_email + 'has been signed up');
    
});