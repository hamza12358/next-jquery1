$('#some_text').scroll(function () {
    var scroll_pos = $('#some_text').scrollTop();
    $('#some_feedback').html('you have scroll' + scroll_pos);
});
