jQuery(function ($) {
    'use strict';
	
        // Header Sticky
		$(window).on('scroll',function() {
            if ($(this).scrollTop() > 120){  
                $('.navbar-area').addClass("is-sticky");
            }
            else{
                $('.navbar-area').removeClass("is-sticky");
            }
		});

		// Mean Menu
		jQuery('.mean-menu').meanmenu({
			meanScreenWidth: "1199"
        });
		
		// Others Option For Responsive JS
		$(".others-option-for-responsive .dot-menu").on("click", function(){
			$(".others-option-for-responsive .container .container").toggleClass("active");
		});

		// Sidebar Modal
        $(".burger-menu").on('click',  function() {
			$('.sidebar-modal').toggleClass('active');
		});
        $(".sidebar-modal-close-btn").on('click',  function() {
			$('.sidebar-modal').removeClass('active');
        });
        
        // Nice Select JS
		$('select').niceSelect();
		
		// Odometer JS
        $('.odometer').appear(function(e) {
			var odo = $(".odometer");
			odo.each(function() {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
		});

		// Home Slides
		$('.home-slides').owlCarousel({
			loop: true,
			nav: true,
			dots: false,
            autoplayHoverPause: true,
            items: 1,
            smartSpeed: 100,
			autoplay: false,
            navText: [
                "<i class='flaticon-left-arrow'></i>",
                "<i class='flaticon-right-arrow'></i>"
            ],
        });
        
        $(".home-slides").on("translate.owl.carousel", function(){
            $(".main-slider-content h1").removeClass("animated fadeInUp").css("opacity", "0");
            $(".main-slider-content p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".main-slider-content a").removeClass("animated fadeInUp").css("opacity", "0");
        });
        $(".home-slides").on("translated.owl.carousel", function(){
            $(".main-slider-content h1").addClass("animated fadeInUp").css("opacity", "1");
            $(".main-slider-content p").addClass("animated fadeInUp").css("opacity", "1");
            $(".main-slider-content a").addClass("animated fadeInUp").css("opacity", "1");
		});

		// Services Slider
		$('.services-slider').owlCarousel({
			loop: true,
			nav: true,
			dots: false,
			smartSpeed: 200,
			margin: 30,
			autoplayHoverPause: true,
			autoplay: true,
			navText: [
                "<i class='flaticon-left-arrow'></i>",
                "<i class='flaticon-right-arrow'></i>"
            ],
			responsive: {
				0: {
					items: 1
				},
				576: {
					items: 2
				},
				768: {
					items: 2
				},
				1024: {
					items: 3
				},
				1200: {
					items: 4
				}
			}
        });

		// Credit Card Image Slider
		$('.credit-card-image-slider').owlCarousel({
			loop: true,
			nav: true,
			dots: false,
			smartSpeed: 200,
			margin: 30,
			autoplayHoverPause: true,
			autoplay: true,
			items: 1,
			navText: [
                "<i class='flaticon-left-arrow'></i>",
                "<i class='flaticon-right-arrow'></i>"
            ],
        });
		
		// Customer Slider
		$('.customer-slider').owlCarousel({
			loop: true,
			nav: true,
			dots: false,
			smartSpeed: 200,
			margin: 30,
			autoplayHoverPause: true,
			autoplay: true,
			navText: [
                "<i class='flaticon-left-arrow'></i>",
                "<i class='flaticon-right-arrow'></i>"
            ],
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 3
				},
				1200: {
					items: 3
				}
			}
		});

		// Partner mobile slider
		$('.customer-logos').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 1
      }
    }]
  });

		
		
		// media Slider
		$('.media-slider').owlCarousel({
			loop: true,
			nav: true,
			dots: false,
			smartSpeed: 500,
			margin: 30,
			autoplayHoverPause: true,
			autoplay: true,
			navText: [
                "<i class='flaticon-left-arrow'></i>",
                "<i class='flaticon-right-arrow'></i>"
            ],
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 3
				},
				1200: {
					items: 3
				}
			}
		});
		
		// Partner Slider
		$('.partner-slider').owlCarousel({
			loop: true,
			nav: false,
			dots: false,
			smartSpeed: 500,
			margin: 30,
			autoplayHoverPause: true,
            autoplay: true,
			responsive: {
				0: {
					items: 2
				},
				576: {
					items: 2
				},
				768: {
					items: 3
				},
				1024: {
					items: 4
				},
				1200: {
					items: 5
				}
			}
		});

		$('.why-slider').owlCarousel({
			loop: true,
			nav: true,
			dots: false,
			smartSpeed: 500,
			margin: 30,
			autoplayHoverPause: true,
			autoplay: true,
			navText: [
                "<i class='flaticon-left-arrow'></i>",
                "<i class='flaticon-right-arrow'></i>"
            ],
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 3
				},
				1200: {
					items: 3
				}
			}
		});
		// card stacked js
		window.onload = () => {
			let sliderImagesBox = document.querySelectorAll('.cards-box');
			sliderImagesBox.forEach(el => {
				let imageNodes = el.querySelectorAll('.card:not(.hide)')
				let arrIndexes = []; // Index array
				(() => {
					// The loop that added values to the arrIndexes array for the first time
					let start = 0;
					while (imageNodes.length > start) {
						arrIndexes.push(start++);
					}
				})();
		
				let setIndex = (arr) => {
					for(let i = 0; i < imageNodes.length; i++) {
						imageNodes[i].dataset.slide = arr[i] // Set indexes
					}
				}
				el.addEventListener('click', () => {
					arrIndexes.unshift(arrIndexes.pop());
					setIndex(arrIndexes)
				})
				setIndex(arrIndexes) // The first indexes addition
			});
		};
		
		

		// Popup Video
		$('.popup-youtube').magnificPopup({
			disableOn: 320,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});

		// FAQ Accordion
        $(function() {
            $('.accordion').find('.accordion-title').on('click', function(){
                // Adds Active Class
                $(this).toggleClass('active');
                // Expand or Collapse This Panel
                $(this).next().slideToggle('fast');
                // Hide The Other Panels
                $('.accordion-content').not($(this).next()).slideUp('fast');
                // Removes Active Class From Other Titles
                $('.accordion-title').not($(this)).removeClass('active');		
            });
		});

		// Subscribe form
		$(".newsletter-form").validator().on("submit", function (event) {
			if (event.isDefaultPrevented()) {
			// handle the invalid form...
				formErrorSub();
				submitMSGSub(false, "Please enter your email correctly.");
			} else {
				// everything looks good!
				event.preventDefault();
			}
		});
		function callbackFunction (resp) {
			if (resp.result === "success") {
				formSuccessSub();
			}
			else {
				formErrorSub();
			}
		}
		function formSuccessSub(){
			$(".newsletter-form")[0].reset();
			submitMSGSub(true, "Thank you for subscribing!");
			setTimeout(function() {
				$("#validator-newsletter").addClass('hide');
			}, 4000)
		}
		function formErrorSub(){
			$(".newsletter-form").addClass("animated shake");
			setTimeout(function() {
				$(".newsletter-form").removeClass("animated shake");
			}, 1000)
		}
		function submitMSGSub(valid, msg){
			if(valid){
				var msgClasses = "validation-success";
			} else {
				var msgClasses = "validation-danger";
			}
			$("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
		}
		// AJAX MailChimp
		// $(".newsletter-form").ajaxChimp({
		// 	url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
		// 	callback: callbackFunction
		// });
		
		// Tabs
        (function ($) {
            $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
            $('.tab ul.tabs li a').on('click', function (g) {
                var tab = $(this).closest('.tab'), 
                index = $(this).closest('li').index();
                tab.find('ul.tabs > li').removeClass('current');
                $(this).closest('li').addClass('current');
                tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
                tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
                g.preventDefault();
            });
		})(jQuery);

		// Preloader
		jQuery(window).on('load',function(){
			jQuery(".preloader").fadeOut(500);
		});

		// Go to Top
		$(function(){
			// Scroll Event
			$(window).on('scroll', function(){
				var scrolled = $(window).scrollTop();
				if (scrolled > 600) $('.go-top').addClass('active');
				if (scrolled < 600) $('.go-top').removeClass('active');
			});  
			// Click Event
			$('.go-top').on('click', function() {
				$("html, body").animate({ scrollTop: "0" },  500);
			});
		});

		

		$('#fund1').on('click', function(){
			$('#demo').html('<h5>2. Fund Wallet</h5>')
			$('#demo2').html('Make a transfer into your wallet from your bank account or activate an auto top up on your debit card with a specified amount.')
			$('#demoimage').html("<img src='assets/img/illust/fund-rename.png'>")
		});

		$('#down1').on('click', function(){
			$('#demo').html('<h5>1. Download app</h5>')
			$('#demo2').html('Download Reaprite App from the App Store or Google Play Store. Sign up using your Fullname, Phone Number, Email address')
			$('#demoimage').html("<img src='assets/img/illust/down-rename.png'>")
		});

		$('#star1').on('click', function(){
			$('#demo').html('<h5>3. Start Saving </h5>')
			$('#demo2').html('Select the best plan suitable for you from our saving plans. Fund the plan from your wallet or activate an auto top up on your debit card with a specified amount to start saving immediately while you watch your money by up to 16% interest p.a.')
			$('#demoimage').html("<img src='assets/img/illust/start-earn.png'>")
		});
		
		$("#loggy").on('click', function(){
			window.location.href ='google.com'
		});
		
		// $('.autoplay').slick({
		// 	slidesToShow: 3,
		// 	slidesToScroll: 1,
		// 	autoplay: true,
		// 	autoplaySpeed: 2000,
		//   });
//<![CDATA[
	$(document).ready(function () {
		FeaturedPost({
		blogURL:"https://www.halosehat.xyz",
		MaxPost:8,
		idcontaint:"#featuredpost",
		ImageSize:500,
		interval:10000,
		autoplay:true,
		tagName:false
		});
		});
		//]]>      
		  
  
		// Marquee3k.init()
		
  		// AOS.init();


}(jQuery));

			


			
