
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
         '0%   {margin-left: ' + rule + 'px}' + /* rule - текущая позиция */
         '100% {margin-left: ' + slide + 'px}' + /* slide - смещение на новую позицию */
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
         '0%   {margin-left: ' + rule + 'px}' + /* rule - текущая позиция */
         '100% {margin-left: ' + slide + 'px}' + /* slide - смещение на новую позицию */
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


      var http_s = location.href;
      if (http_s.indexOf("http://") !== -1) location = "https://splincode.github.io";
      else {

      var count = 38, 
        countPhoto = count,
        section = Math.ceil( count / 15 ),
        dom = '',
        k = 1;
      

      for (var j = 1; j <= section; j++){

        dom += "<div class='frameSlider'>";
      
        for(var i=k; i<(k+15); i++){

          dom += 
          "<image class='img' data-number='" + i + "' style='background: url(portfolio/preview.jpg) no-repeat -" + ((i-1)*50) + "px 0;'/>";
          
          count--;
          if (count == 0) break;
        }
      
        k += 15;
        dom += "</div>";
      }

      document.getElementById("innerSlider").innerHTML = dom;

    var slider = new Spliny();

    $('.right_button').on("click", function(){
      slider.right();
    });

    $('.left_button').on("click", function(){
      slider.left();
    });
    

      $(document).ready(function() {    
      $('body').addClass("fadeIn");

      var photo = parseFloat ( (function parse(val) {
          var result = "Not found",
              tmp = [];
          location.search
          //.replace ( "?", "" )
          // this is better, there might be a question mark inside
          .substr(1)
              .split("&")
              .forEach(function (item) {
              tmp = item.split("=");
              if (tmp[0] === val) result = decodeURIComponent(tmp[1]);
          });
          return result;
      })("photo") );

      if (photo > 0 && photo <= countPhoto) {
        $('[data-number='+ photo +']').click();
      }

    });


    // click
    $('.img').on("click", function(){

      var i = $(this).attr('data-number');

      history.pushState(null, null, '?photo='+i);

      var dom = 
        "<image class='img' data-origin-number='" + i + "'" +
        "src='https://raw.githubusercontent.com/splincode/splincode.github.io/master/portfolio/origin/" + i +".jpg'/>";
          
      document.getElementById("basket").innerHTML = dom;

      $(".modal").css('display', 'block').attr("data-active", "true");

    });

    $('.btnclose').on("click", function(){
      history.pushState({}, null, "/");
      $(".modal").css('display', 'none').attr("data-active", "false");;
      document.getElementById("basket").innerHTML = "";
    });

    $("body").keydown(function( event ) {
      if ( event.which == 27 ) { // ESC
         $('.btnclose').click();
      }
    });

    $("body").keydown(function( event ) {
      if ( event.which == 37 ) { // Left
         $('.lefto').click();
      }
    });

    $("body").keydown(function( event ) {
      if ( event.which == 39 ) { // Right
         $('.righto').click();
      }
    });

    $('.lefto').on("click", function(){
      if ($('[data-active]').attr("data-active") === "true") {
        var i = parseFloat ( $('[data-origin-number]').attr('data-origin-number') );
        i--;
        
        if (i > 0) {
          history.pushState(null, null, '?photo='+i);
          var dom = 
            "<image class='img' data-origin-number='" + i + "'" +
            "src='https://raw.githubusercontent.com/splincode/splincode.github.io/master/portfolio/origin/" + i +".jpg'/>";
          
          document.getElementById("basket").innerHTML = dom;
        }
      }
    });

    $('.righto').on("click", function(){
      if ($('[data-active]').attr("data-active") === "true") {
        var i = parseFloat ( $('[data-origin-number]').attr('data-origin-number') );
        i++;
        
        if (i <= countPhoto) {
          history.pushState(null, null, '?photo='+i);
          var dom = 
            "<image class='img' data-origin-number='" + i + "'" +
            "src='https://raw.githubusercontent.com/splincode/splincode.github.io/master/portfolio/origin/" + i +".jpg'/>";
          
          document.getElementById("basket").innerHTML = dom;
        }
      }
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
    }
