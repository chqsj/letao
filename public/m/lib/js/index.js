$(function(){


    // 轮播图js
    var swiper = new Swiper('.slide  .swiper-container', {
        loop : true,
        centeredSlides: true,
        autoplay: {
          delay: 2200,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true,
        },
      
      });


    //   swiper滚动初始化
    var swiper = new Swiper('#main>.swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        mousewheel: true,
      });
  

})