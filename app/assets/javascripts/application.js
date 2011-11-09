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


var curr;
$(document).ready(function(){

$("input[name='rdio']").click(function(){

    if ($("input[name='rdio']:checked").val() == 'Normal')
        $("#test").append("<div>Normal User</div>");
    else if ($("input[name='rdio']:checked").val() == 'Restaurant')
        $("#test").append("<div>Restaurant Owner</div>");
    else
        $("#test").append("<div>c</div>");
});
});

$(document).ready(function(){

    $('ul.dropdown-menu li').click(function(e) {
		var ind = $('ul.dropdown-menu li').index(this);
		var cuisines = $('ul.dropdown-menu li:eq('+ind+')').text();
		curr = cuisines;

		$.ajax({
		  type: "GET",
		  url: '/menus?cuisines='+cuisines,
		  success: function(data) {
			var newmenu = $(data).find('#menus');
			$('#menus').replaceWith(newmenu);
		  }
		});
	});
});

$(function(){
	if($("#menus").length > 0){
		setTimeout(updateMenus, 10000)
	}
});

function updateMenus(){
	var menu_id = $("#menus").data('id');
	var after= $("#menus").data('time');
	
	$.getScript("/menus.js?menu_id="+menu_id+"&after="+after+"&cuisines="+curr);
	setTimeout(updateMenus, 10000);
	
}