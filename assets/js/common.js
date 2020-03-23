//gnav
$('.menu-trigger').on('click',function(){
		$('body').toggleClass('open');
		$('.gnav').toggle(0);
		$('body').removeClass('open-search');
});

$('.search').on('click',function(){
		$('body').toggleClass('open-search');
		$('.search-nav').toggle(0);
		$('body').removeClass('open');
});



var breakpoint = 1024;
var winWidth;
var mobileFlag=true;
var pagetopFlag=true;

$(window).load(function() {
	"use strict"
	//headerの高さで縮まる
	$(function() {
  var $win = $(window),
      $header = $('.nav'),
      animationClass = 'is-animation';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > 20 ) {
      $header.addClass(animationClass);
    } else {
      $header.removeClass(animationClass);
    }
  });
});

	//pagetop
	$(".pagetop").click(function(){
		$('html,body').animate({scrollTop:0}, 500);
		return false;
	});
	$(".pagetop").click(function(){
		$('html,body').animate({scrollTop:0}, 500);
		return false;
	});

		$(function(){
	  $('.mainnav a[href^="#"]').click(function(){
	    var speed = 500;
	    var href= $(this).attr("href");
	    var target = $(href == "#" || href == "" ? 'html' : href);
	    var position = target.offset().top;
	    $("html, body").animate({scrollTop:position}, speed, "swing");
	    return false;
	  });
	});
});

//アコーディオン
$(function(){
	$(".btnAcd").on("click", function() {
		$(this).next().slideToggle(300);
		$(this).toggleClass('open-accordion');
	});
});

var timer = false;
var viewportContent; //viewport
$(window).on('load resize',function(){
"use strict";

	if (timer !== false) {
        clearTimeout(timer);
    }
    timer = function() {


		winWidth = $(window).width();
		if(winWidth <= breakpoint){
			mobileFlag = true;
			//viewport
			viewportContent = "width=device-width,initial-scale=1";
		} else {
			mobileFlag = false;
			//viewport
			viewportContent = "width=1080";
		}
		document.querySelector("meta[name='viewport']").setAttribute("content", viewportContent);
	};
	setTimeout(timer, 100);

});


$(window).load(function() {
	"use strict";

	//inview
	$('.fade-mv').on('inview',function(event, isInView){
		if(isInView){
			$(this).addClass('mv');
		}
	});

	//inview X
	$('.fade-mv_x').on('inview',function(event, isInView){
		if(isInView){
			$(this).addClass('mv_x');
		}
	});

	//モーダル
	$(function(){
    $('.popup-iframe').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 200,
      preloader: false
    });
		$('.popup-image').magnificPopup({
      type: 'image',
      mainClass: 'mfp-fade',
      removalDelay: 200,
      preloader: false
    });
  });

});
