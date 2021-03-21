/*if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		url = window.location.search;
		window.location.href="http://poligraf-pro.ru/mob/" + url;
	}*/


$(document).ready(function() {



  //E-mail Ajax Send
  $( "form" ).each( function() {
  	$( this ).validate({

  		rules: {
  			phone: {
  				required: true,
  				minlength: 6
  			}
  		},

  		submitHandler: function(form) {
  			var th = $(form);
  			$.ajax({
  				type: "POST",
          url: "telegram.php", //Change
          data: th.serialize()
        })
        window.location.href = "thanks.html";
        
      }
    });
  });
//popup form
$('.popup-js').magnificPopup({
  type: 'inline',
  preloader: false,
  focus: '#name',
  callbacks: {
    beforeOpen: function() {
      if($(window).width() < 700) {
        this.st.focus = false;
      } else {
        this.st.focus = '#name';
      }
    }
  }
});

  //animate pege element
//  $(".").animated("zoomIn");


//product form preference
$('.product__btn').on('click', function (e) {
  e.preventDefault();
  var $this = $(this);
  var topic = $this.data('topic');
  console.log(topic);
  $('.product__form-name').val(topic);
});
//Multiple galleries
 $('.gallery').each(function() { // the containers for all your galleries
  $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled:true
        }
      });
});

$('.slide__gallery-recently-works.gallery .slick-slide').each(function() { // the containers for all your galleries
  $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled:true
        }
      });
});





$('.play-audio').click(function(e){
  var $this = $(this);
  e.preventDefault();
  if(!$($this).hasClass('played')) {
    if($('.played').length) {
      $('.played').siblings('audio').get(0).pause();
    }
    $('.played').removeClass('played');
    $($this).addClass('played');
    $($this).siblings('audio').get(0).play();
  }

  else {
    $($this).removeClass('played');
    $($this).siblings('audio').get(0).pause();
  }
});


$('.slide__gallery').slick({
  slidesToShow: 4,
  infinite: false,
  slidesToScroll: 1,
  arrows:true,
  prevArrow:'<button type="button" class="slide-btn slide-btn-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
  nextArrow:'<button type="button" class="slide-btn slide-btn-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
});







$('.btn1').on('click', function () {
$('.slide__gallery1').fadeIn();
$('.slide__gallery1').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:true,
  prevArrow:'<button type="button" class="slide-btn slide-btn-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
  nextArrow:'<button type="button" class="slide-btn slide-btn-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
});
  });


$('.btn2').on('click', function () {
$('.slide__gallery2').slick({
  slidesToShow: 1,
  infinite: true,
  slidesToScroll: 1,
  arrows:true,
  prevArrow:'<button type="button" class="slide-btn slide-btn-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
  nextArrow:'<button type="button" class="slide-btn slide-btn-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
});
  });

  $('.btn3').on('click', function () {
$('.slide__gallery3').slick({
  slidesToShow: 1,
  infinite: true,
  slidesToScroll: 1,
  arrows:true,
  prevArrow:'<button type="button" class="slide-btn slide-btn-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
  nextArrow:'<button type="button" class="slide-btn slide-btn-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
});
  });

  $('.btn4').on('click', function () {
$('.slide__gallery4').slick({
  slidesToShow: 1,
  infinite: true,
  slidesToScroll: 1,
  arrows:true,
  prevArrow:'<button type="button" class="slide-btn slide-btn-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
  nextArrow:'<button type="button" class="slide-btn slide-btn-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
});
  });

  $('.btn5').on('click', function () {
$('.slide__gallery5').slick({
  slidesToShow: 1,
  infinite: true,
  slidesToScroll: 1,
  arrows:true,
  prevArrow:'<button type="button" class="slide-btn slide-btn-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
  nextArrow:'<button type="button" class="slide-btn slide-btn-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
});
  });

  $('.btn6').on('click', function () {
	$('.slide__gallery6').slick({
	  slidesToShow: 1,
	  infinite: true,
	  slidesToScroll: 1,
	  arrows:true,
	  prevArrow:'<button type="button" class="slide-btn slide-btn-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
	  nextArrow:'<button type="button" class="slide-btn slide-btn-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
	});
	  });





});
//jQuery
