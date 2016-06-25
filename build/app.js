	"use strict";

	let loc = window.location;
	if (loc === "https:") loc.href = ("http://splincode.github.io"); 
	

	if(Modernizr.backgroundsize) {

		$(document).ready(() => {		
			$('body').fadeIn(400);
		});
		
		// заполняем кадры изображениями
		let count = 37;
		let section = Math.ceil( count / 15 );
		let dom = '';

		let k = 1;
		for (let j = 1; j <= section; j++){
			dom += "<div class='floating'>";
			
			for(let i=k; i<(k+15); i++){
				dom += `
					<image 
						class='img' 
						src='https://raw.githubusercontent.com/splincode/splincode.github.io/master/portfolio/preview/${i}.jpg' 
						alt='портфолио' 
					/>\n`;
				
				count--;
				if (count == 0) break;
			}

			k += 15;
			dom += "</div>";
		}

		$("#innerSlider").html(dom);

		$(window).on('load', () => {
    		
    		// слайдер 
    		let slider = new Spliny();

    		$('.right_button').on("click", () => {
    			slider.right();
    		});

    		$('.left_button').on("click", () => {
    			slider.left();
    		});

    		// видео
    		let w = $(window).width();
			
			if (w > 640) {

				var path = 'build/media/intro.mp4';
				var video = 
				$('<video width="6000px" height="6000px" loop autoplay>' +
				    "<source src='" + path + "' type='video/mp4'>" +
				"</video>");

				$('.layer').before(video);

	 			video.bind("canplaythrough", () => {
				    $('video').css('visibility', 'visible');
				    $('.layer').css('opacity', '0.7');
				});

			}

    	});




		/*

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

		*/


		

	} else document.location.href = "http://phpbbex.com/oldies/ru.html";
	
