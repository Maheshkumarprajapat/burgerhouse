// Fixed Header Js Start
$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});
// Fixed Header Js End

// Service Section Slider Start
 $('.service-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    arrows: false,
  });
// Service Section Slider End

// Aso Animation Start
  AOS.init();
// Aso Animation End


