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
var globlongitude;
var globlatitude;
var address;
$(document).ready(function(){

	   if(navigator.geolocation){
	      // timeout at 60000 milliseconds (60 seconds)
	      var options = {timeout:60000};
	      navigator.geolocation.getCurrentPosition(showLocation, 
	                                               errorHandler,
	                                               options);
	   }else{
	      alert("Sorry, browser does not support geolocation!");
	   }
	function showLocation(position) {
	 
	  var latitude = position.coords.latitude;
	  var longitude = position.coords.longitude;

	  var custurl = 'http://where.yahooapis.com/geocode?location='+latitude+'+'+longitude+'&flags=J&gflags=R&appid=yourappid';

      	$.ajax({
		  type: "GET",
		  url: custurl,
		  success: function(data) {
			var obj = data["ResultSet"]["Results"];
			address =  obj[0]["line1"]+" "+obj[0]["city"]+" "+obj[0]["state"];
			$.getScript("/menus.js?address="+address);
		  }
		});
	  
	}

	function errorHandler(err) {
	  if(err.code == 1) {
	    alert("Error: Access is denied!");
	  }else if( err.code == 2) {
	    alert("Error: Position is unavailable!");
	  }
	}
	function getLocation(){
	   if(navigator.geolocation){
	      // timeout at 60000 milliseconds (60 seconds)
	      var options = {timeout:60000};
	      navigator.geolocation.getCurrentPosition(showLocation, 
	                                               errorHandler,
	                                               options);
	   }else{
	      alert("Sorry, browser does not support geolocation!");
	   }
	}

}); // on ready ends





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
	$.getScript("/menus.js?menu_id="+menu_id+"&after="+after+"&cuisines="+curr+"&address="+address);
	setTimeout(updateMenus, 10000);
	
}
