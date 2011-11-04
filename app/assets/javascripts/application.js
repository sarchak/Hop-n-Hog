// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require twitter/bootstrap



$(document).ready(function(){

$("input[name='rdio']").click(function(){

    if ($("input[name='rdio']:checked").val() == 'a')
        $("#test").append("<div>a</div>");
    else if ($("input[name='rdio']:checked").val() == 'b')
        $("#test").append("<div>b</div>");
    else
        $("#test").append("<div>c</div>");
});
});
