$(document).ready(function() {
	$('section#screenshots a').on('click', function(){
		$('.modal-body img').attr('src', $(this).data('image-url'));
	})

	var nav = $('.navbar-fixed-top');
	var distance = $('.navbar-fixed-top').offset();

	if (distance.top >= 300)
		nav.addClass('effect');
	else
		nav.removeClass('effect');

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
	
		if(scroll >= 300) 
			nav.addClass('effect');
		else
			nav.removeClass('effect');
	})


	$('#about .blue-circle').waypoint(function(){
		$('#about .blue-circle').addClass('animated fadeInUp');
	}, {
		offset: '50%'
	});

	$('.features-image img').waypoint(function(){
		$('.features-image img').addClass('animated fadeInUp');
	}, {
		offset: '50%'
	});

	$('#features .blue-circle').waypoint(function(){
		$(this.element).addClass('animated fadeInUp');
	}, {
		offset: '50%'
	});

	$('#screenshots .col-sm-4').waypoint(function(){
		$(this.element).addClass('animated zoomIn');
		$(this.element).css({'opacity':1});
	}, {
		offset: '50%'
	});

	$('#download div.phone img').waypoint(function(){
		$('#download div.phone img').addClass('animated fadeInRight');
	}, {
		offset: '50%'
	});

	$('#download .platforms > div').waypoint(function(){
		$('#download .platforms > div').addClass('animated fadeInRight');
	}, {
		offset: '50%'
	});

	$('#form').bootstrapValidator({
		message: 'This value is not valid.',
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
			invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		},
		fields : {
			name: {
				validators: {
					notEmpty: {
						message: "This field is required and cannot be empty."
					}
				}
			},
			email: {
				validators: {
					notEmpty: {
						message: "This field is required and cannot be empty."
					},
					emailAddress: {
						message: "The input is not a valid email address."
					}
				}
			},
			message: {
				validators: {
					notEmpty: {
						message: "This field is required and must be filled in with a msg."
					}
				}
			},
		}
	}).on('success.form.bv', function (e) {
		
		e.preventDefault();

		var $form = $(e.target);
		var bv = $form.data('bootstrapValidator');
		$.post($form.attr('action'), $form.serialize(), function (result){
			console.log(result);
		}, 'json');
	
	})


    smoothScroll.init({
	    speed: 700, // Integer. How fast to complete the scroll in milliseconds
	    easing: 'easeInQuart', // Easing pattern to use
	});
})
