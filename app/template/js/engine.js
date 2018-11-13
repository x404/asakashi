$(document).ready(function(){

	$('#main-carousel').slick({
		dots: true,
		// prevArrow: '<button type="button" class="slick-prev slick-arrow" aria-label="Назад"></button>',
		// nextArrow: '<button type="button" class="slick-next slick-arrow" aria-label="Вперед"></button>',
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 4000,
		arrows : false,
		fade: true,
		// appendArrows : $('.prevnext'),
        // centerMode: true,
        // centerPadding: '110px',
        infinite : true,
		responsive: [
		    {
		      breakpoint: 1700,
		      settings: {
		        centerPadding: "70px"
		      }
		    },
			{
		      breakpoint: 991,
		      settings: {
		        centerPadding: "50px"
		      }
		    },
			{
		      breakpoint: 850,
		      settings: {
		        centerPadding: "30px"
		      }
		    },
			{
		      breakpoint: 768,
		      settings: {
		        centerPadding: "0px"
		      }
		    },
			{
		      breakpoint: 740,
		      settings: {
		        centerPadding: "10px"
		      }
		    }		    
	    ]
	});


	// mobile-menu
	$('#navbar').each(function(){
		var $this = $(this),
			$link = $('.navbar-toggle'),
			$close = $('.close-menu'),

			init = function(){
				$link.on('click', openMenu);
				$close.on('click', closeMenu);
			},
			openMenu = function(e){
				e.preventDefault();
				$('body').addClass('o-menu');

			},
			closeMenu = function(e){
				e.preventDefault();
				$('body').removeClass('o-menu');
			};
		init();
	});



	/* Time Parser */
	var inter = 1;
	$('.cifr span').each(function() {
	  $(this).attr('data-number', parseInt($(this).text()));
		var count = parseInt($(this).attr('data-number')),
			block = $(this),
			timeout = null,
			step = 1;
		timeout = setInterval(function() {
		  if (step == 25) {
			block.text(count.toString());
			clearInterval(timeout);
		  } else {
			block.text((Math.floor(count*step/25)).toString());
			step++;
		  }
		}, 60);
	});
});
