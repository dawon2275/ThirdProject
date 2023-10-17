/* main swiper */
let swiper = new Swiper(".mySwiper1", {  
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



/* header slide */
$(function() {

  $('.bg1-first').stop().animate({
      top: 370,
      opacity: 1
  },1500)
 $('.bg1-second').stop().animate({
   bottom:380,
   opacity: 1
 },1500)


  $('.bg2-first').delay(3500).animate({
      opacity : 1,
      top: 370
    },1500)
    $('.bg2-second').delay(3500).animate({
      opacity : 1,
      bottom: 380
    },1500)


    $('.bg3-first').delay(6500).animate({
      top: 370,
      opacity: 1
     },1500)
    $('.bg3-second').delay(6500).animate({
          bottom:380,
          opacity: 1
    },1500)

  

})

/* header rolling */
  $(function(){
    $('#header').each(function(){
        //offset : 요소 top의 위치
        /* 
        width/height 동일하게 적용
        height : 사용자가 입력한 값
        innerHeight : height + padding
        outerHeight : height + padding + boder
        outerHeight(true) : height + padding + border + margin
        */
        let $header = $(this),
            headerBottom = $header.offset().top + $header.outerHeight();
            //console.log(headerBottom); //70

        //html header 영역을 복제 할거임 -내용만
        let $headerClone = $header.contents().clone(); //header안의 내용만 복제
        //복제된 요소의 부모 생성
        let $cover = $("<div class='on'></div>") 

        //복제된 요소를 부모 요소 안에 넣기(결합).
        $cover.html($headerClone);

        /* 
        추가 - append ('선택자') : 지정한 선택자 기준으로 앞에 삽입
        $(p).append('div') : div안에 p요소를 삽입 
        */
       $cover.appendTo('body'); //body영역 안에 cover에 있는 태그가 삽입됨

       $(window).on('scroll',function(){
        //scrollTop의 위치값을 변수에 저장
        let scroll = $(window).scrollTop();
        //console.log(scroll)

        if (headerBottom < scroll) {
            $cover.addClass('active')
        } else {
            $cover.removeClass('active')
        }
       })
    });
});



let swiper2 = new Swiper('.mySwiper2', {
  slidesPerView: 3.5,
  direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
        
    500: {
      slidesPerView: 1,  //브라우저가 768보다 클 때
      spaceBetween: 40,
    },
    800: {
      slidesPerView: 3,  //브라우저가 1024보다 클 때
      spaceBetween: 50,
    },
  },

});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 100 ? 'vertical' : 'horizontal';

  return direction;
}
    




