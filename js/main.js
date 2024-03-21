

//  pc 상태일 때 서브메뉴 슬라이드 다운 & 업
$('.navList, .sub_shadow').on('mouseenter mouseleave',function(e){
  if(window.innerWidth > 1169){
    if(e.type == 'mouseenter'){
      $('.sub').stop().fadeIn();
      $('.sub_shadow').stop().slideDown();
    } else {
      $('.sub').stop().fadeOut(200,function(){
        $('.sub').removeAttr('style')   //display:none 없애줌 
      });
      $('.sub_shadow').stop().slideUp(200,function(){
        $('.sub_shadow').removeAttr('style')    //display:none 없애줌 
      });
    }
  }
})
//========↓이렇게 해도 됨(display:none 없애주는건 엄쑴...)↓=================
// $('.navList, .sub_shadow').on('mouseenter',function(){
//   $('.sub').stop().fadeIn();
//   $('.sub_shadow').stop().slideDown();
// })

// .on('mouseleave',function(){
//   $('.sub').stop().fadeOut();
//   $('.sub_shadow').stop().slideUp();
// })


// 햄버거버튼 누르면 gnb나오게 (헤더전체도 옆으로 컨테이너는 고정 스크롤됨)
$('.trigger').click(function(){
  $(this).toggleClass('open');

  if($(this).hasClass('open')){
    $('.gnb').animate({right:0},400)
    $('header').animate({left:-250},400)    //헤더를 왼쪽으로 밀어줌
  } else {
    $('.gnb').animate({right:-250},400)
    $('header').animate({left:0},400)    //헤더를 왼쪽으로 밀어줌
  }
  
})


//  모바일상태일 때 각각의 서브메뉴 슬라이드 다운 & 업 / 색바뀜

const $mainBtn = $('.navList>li>a');    //객체생성

$mainBtn.click(function(){
  if(window.innerWidth < 1170){
    $('.navList>li').removeClass('on');
    $('.sub').slideUp(500);

    $(this).parents('li').addClass('on');
    $(this).siblings('.sub').slideDown(500);


    //원래 사이트 
    // if(!$(this).parents('li').hasClass('on')){   //  만약에 li에 on클라스를 가지고 있지 않다면
    //   $(this).parents('li').addClass('on');    // parents('li')-> 부모
    //   $(this).siblings('.sub').slideDown(500);   // siblings('.sub')->형제관계
    // } else {
    //   $(this).parents('li').removeClass('on');
    //   $(this).siblings('.sub').slideUp(500);
    // }     
  }
})



// more 버튼을 누르면 sns내용이 더 보임
$('.moreBtn').click(function(){
  $('.item_wrap_more').show();
  $('.more').hide();
})