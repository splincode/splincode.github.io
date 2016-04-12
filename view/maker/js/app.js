$(function(){


	$.ajax({
		url:"http://new.s-tv.ru/tv/",
		success: function(response){
	        alert(response)
		}
	});
/*
	$('iframe').load(function(){
		var iframe = $(this).contents();
		
		//iframe.find("#main").children("#header").remove();
		console.log(iframe)


	});*/


	//

	//console.log(iframe)
	//console.log(iframe.find('body').html())
//iframe.find("#header").remove();

});