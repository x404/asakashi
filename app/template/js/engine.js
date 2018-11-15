$(document).ready(function(){

	// inputs
	$('.input-field').each(function(){
		if ($(this).find('.form-control').val().length > 0) {
			return $(this).addClass('is-charged');
		}
	});

	$('body').on('focusin', '.input-field', function(e) {
		return $(this).addClass('is-focused');
	})
	.on('focusout', '.input-field', function(e) {
		$(this).removeClass('is-focused');
		return $(this).removeClass('is-focused');
	})
	.on('change', '.input-field', function() {
		$(this).removeClass('is-charged');
		if ($(this).find('.form-control').val().length > 0) {
			return $(this).addClass('is-charged');
		}
	});


	$('select').selectize();



	$('#home-carousel').slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 4000,
		arrows : false,
		fade: true,
        infinite : true
	});


	$('#home-carousel-mobile').slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 4000,
		arrows : false,
		fade: true,
        infinite : true
	});


    $('.slider-tabs a').click(function(e){
        e.preventDefault();
        let $this = $(this),
        	href = $this.attr('href'),
	        slideIndex = href.substr(href.lastIndexOf('-') + 1);
        $('.slider-tabs a').removeClass('active');
        $this.addClass('active');
        $('#home-carousel').slick('slickGoTo', parseInt(slideIndex) );
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


	var nice = $('.selectize-dropdown-content').niceScroll({railpadding: {top: 15, right: 0, left: 0, bottom: 15 }});


	/* Time Parser */
	var inter = 1;
	$('.cifr span').each(function() {
	  $(this).attr('data-number', parseInt($(this).text()));
		let count = parseInt($(this).attr('data-number')),
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


document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key == "Escape" || evt.key == "Esc");
    } else {
        isEscape = (evt.keyCode == 27);
    }
    if (isEscape && document.querySelector('.modal-menu').classList.contains('open')) {
    	document.querySelector('.modal-menu.open').classList.remove('open');
    }
};



var closemodal2 = document.querySelectorAll('.close-modal');
for (var i = 0; i < closemodal2.length; i++) {
    var self = closemodal2[i];

	self.addEventListener('click', function(e){
		this.closest('.open').classList.remove('open');
		document.querySelector('.body').classList.remove('m-modal-open');
	}, false);
}

$(document).on('click', '.extra-toggle', function(e){
	if (window.innerWidth > 650) {
		var modal = $(this).data('popup');
		$('#' + modal).addClass('open');
		// document.querySelector('body').classList.add('modal-open-my')
	} else{
		// for mobile menu
		document.querySelector('.apanel').classList.add('open');
	}
});



// mobile menu
var apanelfolder = document.querySelectorAll('.apanel .folder span');
for (var i = 0; i < apanelfolder.length;i++)
{
	var self = apanelfolder[i];
	self.addEventListener("click", function(e){
		e.preventDefault();
		let $this = $(this),
			menuItem = $this.data('name');

		document.querySelector('.page-asubnav').classList.add('open');
		document.querySelector('.apanel .subnav_content-' + menuItem).classList.add('subnav_content-active');
	});
}


// closemenu and back button of modal menu
document.querySelector('.apanel .close-menu').addEventListener("click", function(){
	document.querySelector('.apanel.open').classList.remove('open');
	resetpanel();
}, false);

document.querySelector('.asubnav .back_btn').addEventListener("click", function(){
	resetpanel();
}, false);



function resetpanel(){
	let subnavs= document.querySelectorAll('.asubnav_content');
		for (var i = 0; i < subnavs.length;i++)
		{
			var self = subnavs[i];
			if (self.classList.contains('subnav_content-active')){
				console.log (self.classList.contains('subnav_content-active'));
				self.classList.remove('subnav_content-active');
				
			}
		}
	document.querySelector('.page-asubnav.open').classList.remove('open');
}
// =/mobile menu



// `closest` polyfill for IE11
(function (ElementProto) {
	if (typeof ElementProto.matches !== 'function') {
		ElementProto.matches = ElementProto.msMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.webkitMatchesSelector || function matches(selector) {
			var element = this;
			var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
			var index = 0;

			while (elements[index] && elements[index] !== element) {
				++index;
			}

			return Boolean(elements[index]);
		};
	}

	if (typeof ElementProto.closest !== 'function') {
		ElementProto.closest = function closest(selector) {
			var element = this;

			while (element && element.nodeType === 1) {
				if (element.matches(selector)) {
					return element;
				}

				element = element.parentNode;
			}

			return null;
		};
	}
})(window.Element.prototype);