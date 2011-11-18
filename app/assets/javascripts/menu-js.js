

var curr="All";
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
		var curr = $('ul.dropdown-menu li:eq('+ind+')').text();
		var menu_id = $("#menus").data('id');
		var after= $("#menus").data('time');
		/*$.ajax({
		  type: "GET",
		  url: "/menus/sidebar.js?menu_id="+menu_id+"&after="+after+"&cuisines="+curr+"&address="+address,
		  success: function(data) {
			var newmenu = $(data).find('#Mymenu');
			$('#Mymenu').empty()
			$('#Mymenu').append(newmenu);
		  }
		});*/
		$.getScript("/menus/sidebar.js?menu_id="+menu_id+"&after="+after+"&cuisines="+curr+"&address="+address);
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
	$.getScript("/menus.js?menu_id="+menu_id+"&after="+after+"&address="+address);
	$.getScript("/ratings/show.js");
	setTimeout(updateMenus, 10000);
	
}



$(document).ready(function(){

	$("#menus li").live("click", function(){
		var ind = $(this).index();
	   	//alert(" Hi, I'm element " + $(this).index() );
		
		
	});
})