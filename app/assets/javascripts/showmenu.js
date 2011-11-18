
$(function(){
alert("hello")
});

$(document).ready(function(){
 var menu_id = $("#started").data('url');
 alert(menu_id)
 $(".dish").css("background-image", ""url("+menu_id+".jpg)"");
})