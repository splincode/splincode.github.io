	var loc = window.location;
	if (loc === "https:") loc.href = ("http://splincode.github.io"); 

		$(document).ready(function() {		
			//$('body').addClass("fadeIn");
		});
		
		// заполняем кадры изображениями
		var count = 37;
		var section = Math.ceil( count / 15 );
		var dom = '';

		var k = 1;
		for (var j = 1; j <= section; j++){
			dom += "<div class='frameSlider'>";
	
			for(var i=k; i<(k+15); i++){
				dom += 
					"<image "  +
						"class='img' " +
						"src='https://raw.githubusercontent.com/splincode/splincode.github.io/master/portfolio/preview/" + i +".jpg' " +
						"alt='портфолио' " +
					"/>\n";
				
				count--;
				if (count == 0) break;
			}
		
			k += 15;
			dom += `</div>`;
		}
		alert(dom)
		$("#innerSlider").append(dom);

		$(window).on('load', function(){
    		
    		// слайдер 
    		var slider = new Spliny();

    		$('.right_button').on("click", function(){
    			slider.right();
    		});

    		$('.left_button').on("click", function(){
    			slider.left();
    		});

    		// видео
    		var w = $(window).width();
			if (w > 640) {

				var path = 'build/media/intro.mp4';
				var video = 
				$("<video width='6000px' height='6000px' loop autoplay>" +
				  "<source src='" + path + "' type='video/mp4'>" +
				" </video>");

				$('.layer').before(video);

	 			video.bind("canplaythrough", () => {
	 				$('video').addClass("fadeInVideo")
				    $('video').css('visibility', 'visible');
				    $('.layer').css('opacity', '0.7');
				});

			}

    	});