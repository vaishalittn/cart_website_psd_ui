$(document).ready(function() {    
    $(".special-category ul:not(:first)").hide();
    $("#shoe").addClass('active');
});


$('.special-buttons > .specials').click(function () {

    var that = this;
    var id = $(this).attr('id');
    var data = $(this).attr('data');
    console.log(this);
    console.log(that);

    $("#" + data).show();
    $("#" + id).addClass('active');
    $(".special-buttons > .specials").each(function () {
    
    if (this != that) {
    var id = $(this).attr('id');
    var data = $(this).attr('data');
    $("#" + data).hide();
    $("#" + id).removeClass('active');
    }
    });
    });