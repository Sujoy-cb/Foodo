/*-------Preloader part----------*/ 

setTimeout(function(){
    $("#preloader-part").fadeOut()
},3000)

/*-------fixed menu part----------*/ 
$(window).on('scroll', function(){
    var scrollamount = $(window).scrollTop()
    if (scrollamount > 100){
        $(".menubar").addClass("fixedmenu")
    }else{
        $(".menubar").removeClass("fixedmenu")
    }
})


/*-------Search part----------*/ 

$('.search').on('click', function(){
    $('.search-overlay').slideDown()
})

$('.cross').on('click', function(){
    $('.search-overlay').slideUp()
})

/*-------Go top button part----------*/ 

$(".top-button").on('click', function(){
    $('html,body').animate({
        scrollTop: 0,
    })
})

/*----------Go top button-invisible-----------*/
$(window).on('scroll', function(){
    var scrollPos = $(window).scrollTop();

    if (scrollPos > 100) {
      $(".top-button").slideDown(100);
    }else{
      $(".top-button").slideUp(100);
    }
  });
/*-----counter------*/

$(function(){
    $('.count-num').rCounter();
  });


/*-------veno box--------*/

$(document).ready(function(){
    $('.venobox').venobox(); 
});