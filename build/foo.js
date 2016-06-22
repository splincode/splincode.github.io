	if (window.location.protocol === "https:") { window.location.href = ("http://splincode.github.io"); }

	if(Modernizr.backgroundsize) {
	
		var data;

		$('.code').hover(function(){
			$('.left_button, .right_button').fadeIn(200);
		}, function(){
			$('.left_button, .right_button').fadeOut(200);
		});

		var count = 29;
	
		var section = Math.ceil(count/15);
		var dom = "";

		var k = 1;
		for (var j=1; j <= section; j++){
			dom += "<div class='floating'>";
			

			for(var i=k; i<(k+15); i++){
				dom += ("<image class='img' src='https://raw.githubusercontent.com/splincode/splincode.github.io/master/portfolio/"+i+".jpg' />" + "\n");
				count--;

				if (count == 0) break;
			}
			k += 15;

			dom += "</div>";
		}

		

		$('.slider').html(dom);

		
		var activeSection = 1;
		var nextStep = 340;
		var start = 0;
		var new_width = (360  * section) + "px";
		j = 0;

		$('.slider').css({'width' : new_width, 'max-width' : new_width});
		

		$('.right_button').on("click", function(){
			

			if (activeSection < section){
				j = 7; // marginLEft = 17 - 10 = 7
				nextStep = (-1) * parseFloat($('.slider').css('marginLeft')) + 340 + j; 
				activeSection++;
			}
			
			$('.slider').animate({
			    marginLeft : "-" + nextStep + "px"
			},500);

		})

		$('.left_button').on("click", function(){

			if (activeSection > 1){
				j = 7;
				start = (-1) * parseFloat($('.slider').css('marginLeft')) - 340 - j; 
				activeSection--;
			}

			$('.slider').animate({
			    marginLeft : "-" + start + "px"
			},500);
			
		})


		$('.floating img').unbind("click").on("click", function(){
			el = $(this).clone();
			$('.basket').html(el);
			el.css('display', 'inline-block')
			$('.modal').fadeIn(500);
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
				$('.modal .img').remove();
			})
		}


		$(document).ready(function(){		
			$('body').fadeIn(400);
		})

		$(window).load(function(){

			w = $(window).width();
			
			if (w > 640) {

				var path = 'build/media/intro.mp4';
				var video = 
				$('<video width="6000px" height="6000px" loop autoplay>' +
				    "<source src='" + path + "' type='video/mp4'>" +
				"</video>");

				$('.layer').before(video);

	 			video.bind("canplaythrough", function () {
				    $('video').css('visibility', 'visible');
				    $('.layer').css('opacity', '0.7');

				});

			}


		})
		

	} else {
		document.location.href = "http://phpbbex.com/oldies/ru.html";
	}
