"use strict";

class Spliny {
	constructor() {
		let obj = $('.frameSlider');
	    let size = obj.length;
	    let obj_width = parseFloat(obj.outerWidth());
	    let new_width = size * obj_width;
	    
	    this.x = obj_width; // смещение кадра на x пикселей
	    this.xframe = 1; // текущий номер кадра
	    this.xlength = size; // всего кадров
	    
	    $("#boxSlider ").css({
	    	'width': obj.outerWidth(),
	    	'height': obj.outerHeight()
	    });

	    $("#innerSlider").css({
	    	'width': `${new_width}px`, 
	    	'height': obj.outerHeight()
	    });
	}

	static removeId (element) {
		element = document.getElementById(element.replace("#", ""));
		element && element.parentNode && element.parentNode.removeChild(element);
	}

	right(){

		if (this.xframe < this.xlength) {
			Spliny.removeId("#x-right");
			Spliny.removeId("#x-left");

			let rule = parseFloat( $('#innerSlider').css('margin-left') );
			let slide = rule; 
			slide -= this.x;
			let podrule = Math.ceil(podrule / 2);
			$('body').append(`
				<style id="x-right">
				@keyframes x-right {
				    0%   {margin-left: ${rule}px} /* rule - текущая позиция */
				    50%   {margin-left: ${podrule}px} /* rule - текущая позиция */
				    100% {margin-left: ${slide}px} /* slide - смещение на новую позицию */
				}

				#innerSlider {
					animation-name: x-right;
				}
				</style>
			`);

			$('#innerSlider').css('margin-left', `${slide}px`);

			this.xframe++;
		}
	}

	left(){
		if (this.xframe > 1) {
			Spliny.removeId("#x-right");
			Spliny.removeId("#x-left");
			
			let rule = parseFloat( $('#innerSlider').css('margin-left') );
			let slide = rule; 
			slide += this.x;

			$('body').append(`
				<style id="x-left">
				@keyframes x-left {
				    0%   {margin-left: ${rule}px} /* rule - текущая позиция */
				    100% {margin-left: ${slide}px} /* slide - смещение на новую позицию */
				}

				#innerSlider {
					animation-name: x-left;
				}
				</style>
			`);

			$('#innerSlider').css('margin-left', `${slide}px`);

			this.xframe--;
		}


	}
};