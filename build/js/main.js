jQuery(function($){
  var appendNumber = 4;
    var prependNumber = 1;
    var swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 4,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 20,
    });
    

    var language = $(".language a");
    var languageAll = $(".language-all");
    language.on('click', function(event) {
        event.preventDefault();
        $(this).parent().toggleClass('language-open');
    });

    var body = $("body")
    // menu
    var menuBurger = $(".menu-burger");
    menuBurger.on('click', function(event) {
        event.preventDefault();
        body.toggleClass('mobile-menu-open');
    });
    var mobileMenu = $(".mobile-menu");
    mobileMenu.on('click', function(event) {
        event.preventDefault();
        body.removeClass("mobile-menu-open");
    });
    var mobileMenuItem = $(".mobile-menu-item");
    mobileMenuItem.on('click', function(event) {
        var thisLala = event.target;
        if(!$(thisLala).data('lang')) event.stopPropagation();     
    });

    var institutionSmallPictures = $(".clock-jewerly a");
    var institutionBigPictures = $(".ransom-r > .ransom-r-container");
    institutionSmallPictures.on('click', function(event) {
      event.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
      var index = institutionSmallPictures.index($(this));
      institutionBigPictures.eq(index).addClass('active').siblings().removeClass('active');    
    });

    // (".clock-jewerly").on('click', 'a', function(event) {
    //     event.preventDefault();
        
    // });

    $(document).ready(function() {
        $("a").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 400);
        return false;
        });
    }); 
});