$(function(){

	$.ajax({
	  url:"http://new.s-tv.ru/tv/",
	  dataType: "jsonp",
	  success: function (data) {
	    console.log(data)
	    alert(data);
	  }
	});

	$('iframe').load(function(){
		var iframe = $(this).contents();
		
		//iframe.find("#main").children("#header").remove();
		console.log(iframe)


	});

});