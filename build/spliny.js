
var Spliny = function(){
	var obj = $('.frameSlider');
    var size = obj.length;
    var obj_width = parseFloat(obj.outerWidth());
    var new_width = size * obj_width;

    this.x = obj_width; // смещение кадра на x пикселей
    this.xframe = 1; // текущий номер кадра
    this.xlength = size; // всего кадров
    
    $("#boxSlider ").css({
    	'width': obj.outerWidth(),
    	'height': obj.outerHeight()
    });

    $("#innerSlider").css({
    	'width': new_width + 'px', 
    	'height': obj.outerHeight()
    });

    this.removeId = function(element){
    	element = document.getElementById(element.replace("#", ""));
    	element && element.parentNode && element.parentNode.removeChild(element);
    }

    this.right = function(){

    	if (this.xframe < this.xlength) {
    		this.removeId("#x-right");
    		this.removeId("#x-left");

    		var rule = parseFloat( $('#innerSlider').css('margin-left') );
    		var slide = rule; 
    		slide -= this.x;

    		$('body').append(

    		'<style id="x-right">' +
			 '@keyframes x-right {' +
    		 '0%   {margin-left: ${rule}px}' + /* rule - текущая позиция */
    		 '100% {margin-left: ${slide}px}' + /* slide - смещение на новую позицию */
			'}' +
    		'#innerSlider {' +
    		'animation-name: x-right;' + 
    		'}' + 
    		'</style>'
    		);

    		$('#innerSlider').css('margin-left', slide + 'px');

    		this.xframe++;
    	}
    }


    this.left = function(){
		if (this.xframe > 1) {
			this.removeId("#x-right");
			this.removeId("#x-left");
			
			var rule = parseFloat( $('#innerSlider').css('margin-left') );
			var slide = rule; 
			slide += this.x;

			$('body').append(

    		'<style id="x-left">' +
			 '@keyframes x-left {' +
    		 '0%   {margin-left: ${rule}px}' + /* rule - текущая позиция */
    		 '100% {margin-left: ${slide}px}' + /* slide - смещение на новую позицию */
			'}' +
    		'#innerSlider {' +
    		'animation-name: x-left;' + 
    		'}' + 
    		'</style>'
    		);

			$('#innerSlider').css('margin-left', slide + 'px');

			this.xframe--;
		}


	}

}



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

			$('body').append(`
				<style id="x-right">
				@keyframes x-right {
				    0%   {margin-left: ${rule}px} /* rule - текущая позиция */
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