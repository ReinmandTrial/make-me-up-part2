$(document).ready(function(){

    $('#new .slider_wrapper .slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    });
    $('#new .mainblock .tl').click(function(){
        $('#new .slider_wrapper .slider').slick('slickPrev');
    });
    $('#new .mainblock .tr').click(function(){
        $('#new .slider_wrapper .slider').slick('slickNext');
    });
    $('#news2 .slider_wrapper .slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    });
    $('#news2 .mainblock .tl').click(function(){
        $('#news2 .slider_wrapper .slider').slick('slickPrev');
    });
    $('#news2 .mainblock .tr').click(function(){
        $('#news2 .slider_wrapper .slider').slick('slickNext');
    });

});

/*
###FANCYBOX

	$('.fancybox').fancybox();

	
	$("a.video").click(function() {
	$.fancybox({
			'padding'		: 0,
			'autoScale'		: false,
			'transitionIn'	: 'none',
			'transitionOut'	: 'none',
			'title'			: this.title,
			'width'		: 680,
			'height'		: 495,
			'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
			'type'			: 'swf',
			'swf'			: {
			   	 'wmode'		: 'transparent',
				'allowfullscreen'	: 'true'
			}
		});

	return false;
});
	
###TABS
	
	    $(document).on('click','.tabs_wrapper .tabs a',function(e){
        var ind=$(this).index();
        $('.tabs_wrapper .tabs a').removeClass('active');
        $('.tabs_wrapper .tab_content>div').removeClass('active');
        $('.tabs_wrapper .tab_content>div:eq(' + ind + ')').addClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

###opened menu	
		$(document).on('click','.open',function(){
       $(this).parent().find('.block').slideToggle();
    });
	
###jcarousel
	    $('#slider_wrapper .slider').jcarousel({
        wrap: 'circular',
        vertical: false
    });
    $('#slider_wrapper .slider').jcarouselAutoscroll({
        autostart: true,
        interval: 7000
    });
	
	    $('#slider_wrapper .controls')
        .on('jcarouselpagination:active', 'a', function() {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function() {
            $(this).removeClass('active');
        })
        .jcarouselPagination();
		
		
    $('#slider_wrapper .toleft')
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '-=1'
        });

    $('#slider_wrapper .toright')
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '+=1'
        });


$(window).on('load resize', function() {
  if ($(window).width() < 768) {
    $('.slider:not(.slick-initialized)').slick({
      centerMode: true,
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1
    });
  } else {
    $(".slider.slick-initialized").slick("unslick");
  }
});			
		
$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
*/