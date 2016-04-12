$(function(){

	$.ajax({
	  url:"http://www.ontvtime.ru/tv/?cat=10&mode=0&dates0=2016-04-11&dates1=2016-04-12&dates2=2016-04-13&dates3=2016-04-14&dates4=2016-04-15&dates5=2016-04-16&dates6=2016-04-17&ch0=159",
	  dataType: "jsonp",
	  success: function (data) {
	    alert(data);
	  }
	});



});