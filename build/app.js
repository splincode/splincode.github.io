var count = 37,
  			section = Math.ceil( count / 15 ),
  			dom = '',
  			k = 1;
  		

  		for (var j = 1; j <= section; j++){

  			dom += "<div class='frameSlider'>";
  		
  			for(var i=k; i<(k+15); i++){
  				
  				dom += 
  				"<image class='img' " +
  				"src='https://raw.githubusercontent.com/splincode/splincode.github.io/master/portfolio/preview/" + i +".jpg'/>";
  				
  				count--;
  				if (count == 0) break;
  			}
  		
  			k += 15;
  			dom += `</div>`;
  		}

  		document.getElementById("innerSlider").innerHTML = dom;

		var slider = new Spliny();

		$('.right_button').on("click", function(){
			slider.right();
		});

		$('.left_button').on("click", function(){
			slider.left();
		});


		var w = $(window).width();
		if (w > 640) {

			var video = $("<video width='6000px' height='6000px' loop autoplay>" +
			  "<source src='build/media/intro.mp4' type='video/mp4'>" +
			" </video>");

			$('.layer').before(video);

			video.bind("canplaythrough", function(){
				$('video').addClass("fadeInVideo")
			    $('.layer').css('opacity', '0.7');
			});

		}
	

  		$(document).ready(function() {		
			$('body').addClass("fadeIn");
		});