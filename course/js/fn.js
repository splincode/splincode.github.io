var count;
var JI = 1;
var count;

$(function(){

	box = $(".box").height();
	count = $('.box').length;


	$('.next').click(function(){

		now = $('#list').css("margin-top");
		now = parseInt(now) - 535;
		th = now+"px";

		$('#list').animate({"margin-top": th}, 300, function(){
			JI++;
			if (JI==2) {

				$('.next').animate({"left" : "170px"}, 300);
				$('.prev').fadeIn();

			}

			if (JI==count) {
				$('.next').fadeOut(0);
				$('.prev').css({"left" : "220px"});
			}

		});

	});


	$('.prev').click(function(){
		now = $('#list').css("margin-top");
		now = parseInt(now) + 535;
		th = now+"px";

		$('#list').animate({"margin-top": th}, 300, function(){
			JI--;

			if (JI < count){
				$('.next').fadeIn();
				$('.prev').css({"left" : "250px"});
			}

			if (JI==1) {
				$('.prev').fadeOut();
				$('.next').animate({"left" : "220px"}, 300);
			}

		});

	});



	$('.powerpoint').unbind("click").on("click", function(){
			docs = $(this).children("a").attr("href")
			$('.basket').html('<iframe src="https://docs.google.com/presentation/d/'+docs+'/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="margin-top:110px"></iframe>');
			$('.modal').fadeIn(500);
			return false;
	});

	$('.home').unbind("click").on("click", function(){
			docs = $(this).children("a").attr("href")
			$('.basket').html('<iframe src="https://docs.google.com/document/d/'+docs+'/pub?embedded=true"  frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="margin-top:110px"></iframe>');
			$('.modal').fadeIn(500);
			return false;
	});
	

	$('.video').unbind("click").on("click", function(){
			docs = $(this).children("a").attr("href")
			$('.basket').html('<iframe width="960" height="569" src="https://www.youtube.com/embed/'+docs+'" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="margin-top:110px"></iframe>');
			$('.modal').fadeIn(500);
			return false;
	});

	$('.close').on("click", function(){
		clickCloseModal();
	})

	$(document).keyup(function(e) {
	     if (e.keyCode == 27) { 
	     	clickCloseModal();
	    }
	});

	var clickCloseModal = function(){
		$('.modal').fadeOut(500, function(){
			$('.basket').html("");
		})
	}


});
