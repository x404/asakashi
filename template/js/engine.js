$(document).ready(function(){


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
