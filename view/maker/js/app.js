$(function(){

	$.ajaxPrefilter( function (options) {
	  if (options.crossDomain && jQuery.support.cors) {
	    var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
	    options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
	    //options.url = "http://cors.corsproxy.io/url=" + options.url;
	  }
	});

	$.get(
	    'http://new.s-tv.ru/tv/',
	    function (response) {
	        console.log("> ", response);
	       // $("#viewer").html(response);
	});



});