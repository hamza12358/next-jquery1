$(document).ready( function () {
    $(".duplicate").click(function () {
        alert('you have clicked');
        $(this).after('<input class="duplicate" type="button" value="click">')
    })
});