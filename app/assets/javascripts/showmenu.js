
/*$(function(){
	alert("hello");
});
*/

$(document).ready(function(){
 var menu_id = $("#started").data('url');

 var urlimage = "url(\'"+menu_id+".jpg\')";
 //alert(urlimage)
 //$(".dish").removeClass("dish").addClass("dish1")
// $("#test").css('background-image', urlimage);

});

$('.dish').load(function() {
	alert("here")
 var menu_id = $("#started").data('url');

 var urlimage = "url(\""+menu_id+".jpg\")";

 //$(".dish").removeClass("dish").addClass("dish1")
 $(".dish").css("background-image", "url('154.jpg')");
});