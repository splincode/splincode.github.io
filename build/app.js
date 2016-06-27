var loc = window.location;
if (loc === "https:") loc.href = "http://splincode.github.io";

if (Modernizr.backgroundsize) {

	$(document).ready(function () {
		$('body').addClass("fadeIn");
	});

	// заполняем кадры изображениями
	var count = 37;
	var section = Math.ceil(count / 15);
	var dom = '';

	var k = 1;
	for (var j = 1; j <= section; j++) {
		dom += '<div class=\'frameSlider\'>';

		for (var i = k; i < k + 15; i++) {
			dom += '\n\t\t\t\t\t<image \n\t\t\t\t\t\tclass=\'img\' \n\t\t\t\t\t\tsrc=\'https://raw.githubusercontent.com/splincode/splincode.github.io/master/portfolio/preview/' + i + '.jpg\' \n\t\t\t\t\t\talt=\'портфолио\' \n\t\t\t\t\t/>\n';

			count--;
			if (count == 0) break;
		}

		k += 15;
		dom += '</div>';
	}

	$("#innerSlider").html(dom);

	$(window).on('load', function () {

		// слайдер
		var slider = new Spliny();

		$('.right_button').on("click", function () {
			slider.right();
		});

		$('.left_button').on("click", function () {
			slider.left();
		});

		// видео
		var w = $(window).width();
		if (w > 640) {

			var path = 'build/media/intro.mp4';
			var video = $('<video width="6000px" height="6000px" loop autoplay>\n\t\t\t\t    <source src=\'' + path + '\' type=\'video/mp4\'>\n\t\t\t\t  </video>');

			$('.layer').before(video);

			video.bind("canplaythrough", function () {
				$('video').addClass("fadeInVideo");
				$('video').css('visibility', 'visible');
				$('.layer').css('opacity', '0.7');
			});
		}
	});
} else document.location.href = "http://phpbbex.com/oldies/ru.html";