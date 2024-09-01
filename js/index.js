window.addEventListener('DOMContentLoaded', (event) => {

	var slidehome = new Swiper('.home-slider', {
		autoplay: {
			delay: 4500,
			centeredSlides: false,
			loop: false,
			grabCursor: true,
			autoPlay:false,
			spaceBetween: 0,
			roundLengths: true,
			slideToClickedSlide: false,
			disableOnInteraction: false
		},
	});
	var bestsale = new Swiper('.swiper_bestsale', {
		slidesPerView: 4,
		spaceBetween: 20,
		slidesPerGroup: 1,
		breakpoints: {
			300: {
				slidesPerView: 1,
				spaceBetween: 0
			},
			500: {
				slidesPerView: 1,
				spaceBetween: 0
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			991: {
				slidesPerView: 4,
				spaceBetween: 20
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 20
			}
		}
	});
	var swiper = new Swiper('.swiper_process', {
		slidesPerView: 4,
		spaceBetween: 15,
		slidesPerGroup: 1,
		breakpoints: {
			300: {
				slidesPerView: 1,
				spaceBetween: 15
			},
			500: {
				slidesPerView: 1,
				spaceBetween: 15
			},
			640: {
				slidesPerView: 1,
				spaceBetween: 15
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 15
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 15
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 15
			}
		}
	});
	
	var swiper = new Swiper('.swiper_blog', {
		slidesPerView: 4,
		spaceBetween: 20,
		slidesPerGroup: 1,
		breakpoints: {
			300: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			500: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			640: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 20
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 20
			}
		}
	});
});