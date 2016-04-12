$(function(){

	$.ajax({
	  url:"http://new.s-tv.ru/tv/?callback=true",
	  dataType: "text/plain",
	  success: function (data) {
	    alert(data);
	  }
	});


});