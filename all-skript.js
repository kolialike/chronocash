
jQuery(function($){
   var BODY = $("body");
  //menu
  var menuBurger = $(".menu-burger");
  menuBurger.on('click', function(event) {
    event.preventDefault();
    BODY.toggleClass('mobile-menu-open');
  });
  var mobileMenu = $(".mobile-menu");
  mobileMenu.on('click', function(event) {
    event.preventDefault();
    BODY.removeClass("mobile-menu-open");
  });
  var mobileMenuItem = $(".mobile-menu-item");
  mobileMenuItem.on('click', function(event) {
    var thisLala = event.target;
    if(!$(thisLala).data('lang')) event.stopPropagation();        
  });

//paralax
  var header = $("#header");
  var headerWidth = header.outerWidth();
  var headerHeight = header.outerHeight();
  var parallax = $(".parallax");
  var coef = 20;
  header.on('mousemove', function(event) {
    var cordX = event.pageX - headerWidth/2;
    var cordY = event.pageY - headerHeight/2;
    parallax.css({
      "marginLeft": -(cordX+cordY)/coef + "px"
    })
  }); 

  // Для свайпера стоп при наведении
  $('.slider-content').on('mouseover',function() { swipers.stopAutoplay(); }); $('.slider-content').on('mouseout',function() { swipers.startAutoplay(); });

  //Табы по индексу
  var institutionSmallPictures = $(".institution-small-pictures").find("a");
  var institutionBigPictures = $(".institution-big-pictures").find("img");
  institutionSmallPictures.on('click', function(event) {
      event.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
      var index = institutionSmallPictures.index($(this));
      institutionBigPictures.eq(index).addClass('active').siblings().removeClass('active');    
  });

  // Время для переключения баннеров
  var timers = [$("#t13"),$("#t1")];
  var iter = 0;
  var count = 1;
  count++;
  setInterval(function() { show_timer(); }, 3000);
  function show_timer(){
      for(var i = 0; i<timers.length; i++){
          timers[i].fadeOut(0);
      }
      timers[iter].fadeIn(0);
      iter++;
      if(iter==count){
          iter = 0;   
      }
  }

  // фиксированное меню
  var $window = $(window);
    var $menu = $('#header'); 
    setTimeout(function(){    
      var menuTop = $menu.offset().top;
      $window.on('scroll', function() {
        var windowTop = $window.scrollTop();
        if(windowTop > menuTop){
          $menu.addClass("fixed");
        }else{
          $menu.removeClass("fixed");
        }
      });
    }, 1500);

  // Клавиша для перекручивания вверх
  $(document).ready(function(e) {
    $(".fixtotop").hide(); 
    $(window).scroll(function(e) { 
      var top = $(document).scrollTop(); 
      if(top >= 1050) $('.fixtotop').fadeIn(); 
      else $('.fixtotop').fadeOut(); 
      e.preventDefault(); 
      return false; 
    }); 
    $(document).on('click', '#totop', function(e) { 
      $('body, html').animate({scrollTop: 0}, 1000); 
      e.preventDefault(); 
      return false; 
    });
    
  });

  // Фиксированый блок по отношению к контенту
  $(document).ready(function(e) {

    if($(".news-full").length > 0) {
        $(document).on('scroll', function(event) {
        var $window = $(window);
        var $newsFullR = $('.news-full-r'); 
        var newsFullTop = $(".news-full").offset().top-118;
        var blockHeight = $(".news-full > .wrapper").height()+$(".news-full > .wrapper").offset().top;
        var windowTopV = $window.scrollTop();
          var windowTopV = $window.scrollTop();
          if(windowTopV > newsFullTop) $newsFullR.addClass("news-full-r-f-fixed");
          else  $newsFullR.removeClass('news-full-r-f-fixed').removeClass('bottabs-news');
          if(  windowTopV >= $(".news-full > .wrapper").height()-372) $newsFullR.addClass('bottabs-news').removeClass('news-full-r-f-fixed');            
      });
    };
});


});
