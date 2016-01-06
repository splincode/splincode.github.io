var tcon = new (function(){
	// author: splincode

   'private';
   	function addStyle(css){
		var style = document.createElement('style'); style.innerHTML = css;
		document.getElementsByTagName("head")[0].appendChild(style);
	};

	var selectors = {
		"menu--xbutterfly" : {
			"width" : 
					".tcon-menu--xbutterfly," + 
					".tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines::before," + 
					".tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines::after" + 
					"{width: %Wpx}",

			"height" : 
					 ".tcon-menu--xbutterfly .tcon-menu__lines,.tcon-menu--xbutterfly .tcon-menu__lines::before," + 
					 ".tcon-menu--xbutterfly .tcon-menu__lines::after" + 
					 "{height: %Hpx}",

			"background" : 
						 ".tcon-menu--xbutterfly .tcon-menu__lines," + 
						 ".tcon-menu--xbutterfly .tcon-menu__lines::before," + 
						 ".tcon-menu--xbutterfly .tcon-menu__lines::after " + 
						 "{background: %B}"
		},

		"menu--minus" : {
			"width" : 
					".tcon-menu--minus,.tcon-menu--minus.tcon-transform .tcon-menu__lines::before," + 
					".tcon-menu--minus.tcon-transform .tcon-menu__lines::after" + 
					" {width: %Wpx}",

			"height" :
					 ".tcon-menu--minus .tcon-menu__lines," +
					 ".tcon-menu--minus .tcon-menu__lines::before," +
					 ".tcon-menu--minus .tcon-menu__lines::after" +
					 "{height: %Hpx}",

			"background" : 
						".tcon-menu--minus .tcon-menu__lines," +
						".tcon-menu--minus .tcon-menu__lines::before," +
						".tcon-menu--minus .tcon-menu__lines::after" +
						"{background: %B}"
		},

		"menu--xcross" : {
			"width" : 
					".tcon-menu--xcross,.tcon-menu--xcross.tcon-transform .tcon-menu__lines::before," +
					".tcon-menu--xcross.tcon-transform .tcon-menu__lines::after" +
					" {width: %Wpx}",

			"height" : 
					".tcon-menu--xcross .tcon-menu__lines," +
					".tcon-menu--xcross .tcon-menu__lines::before," +
					".tcon-menu--xcross .tcon-menu__lines::after" +
					"{height: %Hpx}",

			"background" : 
						".tcon-menu--xcross .tcon-menu__lines,.tcon-menu--xcross .tcon-menu__lines::before," +
						".tcon-menu--xcross .tcon-menu__lines::after" +
						"{background: %B}"
		},

		"menu--arrowup" : {
			"width" : 
					".tcon-menu--arrowup {width: %Wpx}",

			"height" : 
					 ".tcon-menu--arrowup .tcon-menu__lines," +
					 ".tcon-menu--arrowup .tcon-menu__lines::before," +
					 ".tcon-menu--arrowup .tcon-menu__lines::after" +
					 "{height: %Hpx}",

			"background" : 
						".tcon-menu--arrowup .tcon-menu__lines,.tcon-menu--arrowup .tcon-menu__lines::before,"+
						".tcon-menu--arrowup .tcon-menu__lines::after" +
						"{background: %B}"
		},

		"menu--arrow360left" : {
			"width" : 
					".tcon-menu--arrow360left {width: %Wpx}",

			"height" : 
					 ".tcon-menu--arrow360left .tcon-menu__lines," +
					 ".tcon-menu--arrow360left .tcon-menu__lines::before," +
					 ".tcon-menu--arrow360left .tcon-menu__lines::after" +
					 "{height: %Hpx}",

			"background" : 
						".tcon-menu--arrow360left .tcon-menu__lines," +
						".tcon-menu--arrow360left .tcon-menu__lines::before," +
						".tcon-menu--arrow360left .tcon-menu__lines::after" +
						"{background: %B}"
		},

		"menu--arrowleft" : {
			"width" : 
					".tcon-menu--arrowleft {width: %Wpx}",

			"height" : 
					".tcon-menu--arrowleft .tcon-menu__lines," +
					".tcon-menu--arrowleft .tcon-menu__lines::before," +
					".tcon-menu--arrowleft .tcon-menu__lines::after" +
					"{height: %Hpx}",

			"background" : 
						".tcon-menu--arrowleft .tcon-menu__lines," +
						".tcon-menu--arrowleft .tcon-menu__lines::before," +
						".tcon-menu--arrowleft .tcon-menu__lines::after" +
						"{background: %B}"
		},

		"grid--collapse" : function (object){
			var width = parseInt(object["width"]);
			var height = parseInt(object["height"]);
			var bgcolor = object["background"];
			var css = ".tcon-grid--collapse .tcon-grid__item {width: "+width+"px; height: "+height+"px}\n";
				css += ".tcon-grid.tcon-grid--collapse {" + "padding-left: " +  width*2 + "px; width: " + (width+2)*4+ "px; height: " + (width+2)*4 + "px; }\n";
				width += 2;
				css += ".tcon-grid--collapse .tcon-grid__item {" + "background:" + bgcolor + "; color: " + bgcolor + ";}\n";
				css += ".tcon-grid--collapse .tcon-grid__item {" + "box-shadow: -" + 
								width +"px 0 "+ bgcolor + ", -" + width  +"px " + width  + "px " + bgcolor + ", " + width  + "px 0 " + 
								bgcolor + ", " + width  + "px -" + width  + "px " + bgcolor + ", 0 -" + width  + "px " + bgcolor +", -" + 
								width  + "px -" + width  + "px " + bgcolor + ", 0 " + width  + "px, " + width  + "px " + width  + "px " + 
								bgcolor + "}\n";

				css += ".tcon-grid--collapse.tcon-transform .tcon-grid__item {" + "box-shadow: -" + width + "px 0, 0 0 transparent, " + 
								width + "px 0, 0 0 transparent, 0 -" + width + "px, 0 0 transparent, 0 " + 
								width + "px, 0 0 transparent;" + "}";
		
				addStyle(css);
		},

		"grid--rearrange" :function (object){
			var width = parseInt(object["width"]);
			var height = parseInt(object["height"]);
			var bgcolor = object["background"];
			var css = ".tcon-grid--rearrange .tcon-grid__item {width: "+width+"px; height: "+height+"px}\n";
				css += ".tcon-grid.tcon-grid--rearrange {" + "padding-left: " +  width*2 + "px; width: " + (width+2)*4+ "px; height: " + (width+2)*4 + "px; }\n";
				width += 2;
				css += ".tcon-grid--rearrange .tcon-grid__item {" + "background:" + bgcolor + "; color: " + bgcolor + ";}\n";
				css += ".tcon-grid--rearrange .tcon-grid__item {" + "box-shadow: -" + 
								width +"px 0 "+ bgcolor + ", -" + width  +"px " + width  + "px " + bgcolor + ", " + width  + "px 0 " + 
								bgcolor + ", " + width  + "px -" + width  + "px " + bgcolor + ", 0 -" + width  + "px " + bgcolor +", -" + 
								width  + "px -" + width  + "px " + bgcolor + ", 0 " + width  + "px, " + width  + "px " + width  + "px " + 
								bgcolor + "}\n";

				css += ".tcon-grid--rearrange.tcon-transform .tcon-grid__item  {"+ "box-shadow: 0 -" + 
								(width-1) + "px, 0 -" + (width-1)*2 + "px, " + (width-1) + "px 0, -" + (width-1)*2 + "px 0, " + 
								(width-1)*2 + "px 0, -" + (width-1) + "px 0, 0 " + (width-1)*2 + "px, 0 " + (width-1) + "px;"  +"}\n";
		
				addStyle(css);
		},

		"plus" : {
			"width" : 
					" .tcon-plus {width: %Wpx}",

			"height" : 
					".tcon-plus {height: %Hpx}",

			"background" : 
						 ".tcon-plus::before, .tcon-plus::after," +
						 ".tcon-plus--check.tcon-transform::before," +
						 ".tcon-plus--check.tcon-transform::after" +
						 "{background: %B}"
		},

		"remove--check" : {
			"width" : 
					".tcon-remove {width: %Wpx}",

			"height" : 
					 ".tcon-remove {height: %Hpx}",

			"background" : 
						".tcon-remove::before,"+
						".tcon-remove::after,"+
						".tcon-remove--check.tcon-transform::before,"+
						".tcon-remove--check.tcon-transform::after"+
						"{background: %B}"
		},

		"mail--envelope" : function(object){
			var width = parseInt(object["width"]);
			var css = ".tcon-mail--envelope { width:" + width + "px; height: " + width/2 + "px; }\n";
				css += ".tcon-mail--envelope:after {border-right: "+width+"px solid #A5ACAE;border-top: "+width/2+"px solid transparent;}\n";
				css += ".tcon-mail--envelope:before {border-left: "+width+"px solid #BCBCBD; border-top: "+width/2+"px solid transparent;}\n";
				css += ".tcon-mail--envelope__flap {border-left: "+width/2+"px solid transparent;  border-right: "+width/2+"px solid transparent;}";

				addStyle(css);
		},

		"vid--play" : function(object){
			var width = parseInt(object["width"]);
			var height = object["height"];
			var bgcolor = object["background"];
			var css = ".tcon-vid--play { width:" + width + "px; height: " + height + "; }\n";
				css += " .tcon-vid--play:after { width:" + width + "px; border-color:transparent transparent transparent " + 
								bgcolor + "; border-width: " + width/2 + "px 0 " + width/2 + "px " + width/2 + "px}\n";
				css += ".tcon-vid--play.tcon-transform {background: "+ bgcolor +" }\n";

				addStyle(css);
		},

		"search--xcross" : function(object){
			var width = parseInt(object["width"]);
			var height = object["height"];
			var bgcolor = object["background"];
			var css = ".tcon.tcon-search--xcross, .tcon-search__item { width:" + width + "px; height: " + height + "; }\n";
				width = width - ((width/100)*60);
				css += ".tcon-search__item::after{width:" + width + "px; height: " + width + "px;}\n";
				css += ".tcon-search__item::before,.tcon-search--xcross.tcon-transform .tcon-search__item::before, " + 
								".tcon-search--xcross.tcon-transform .tcon-search__item::after {background: "+bgcolor+"}\n";
				css += ".tcon-search__item::after {border-color: "+bgcolor+"}\n";

				addStyle(css);	
		}, 

		"loader--spinner360" : function(object) {
			var width = parseInt(object["width"]);
			var height = object["height"];
			var bgcolor = object["background"];
			var css = ".tcon-loader--spinner360 { width:" + width + "px; height: " + height + "; background: "+bgcolor+"}\n";
				width = width*2;
				css += ".tcon-loader--spinner360:before {height:" + (width/2) + "px; border-radius: 0 " + width + "px " + width + "px 0}\n";
				width = (width/2) - ((width/2)/100)*25;
				css += ".tcon-loader--spinner360:after {width: "+ width+"px; height: "+width+"px }\n";

				addStyle(css);
		}
	};



   'public';
	this.set = function(element, object){
		element = (typeof element == "string" ? element : ""); 
		object = (typeof object == "object" ? object : {});
		var css = "";

			if (typeof selectors[element] == "function") selectors[element](object);
			else {

				if (object["width"] != undefined) {
					width = selectors[element]["width"].replace('%W', parseInt(object["width"]));
					css += width + "\n";
				}

				if (object["height"] != undefined) {
					height = selectors[element]["height"].replace('%H', parseInt(object["height"]));
					css += height + "\n";
				}

				if (object["background"] != undefined) {
					height = selectors[element]["background"].replace('%B', object["background"]);
					css += height + "\n";
				}

				addStyle(css);
			}

		return this;
	};

})();