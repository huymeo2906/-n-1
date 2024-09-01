window.awe = window.awe || {};
function awe_lazyloadImage() {
	var ll = new LazyLoad({
		elements_selector: ".lazyload",
		load_delay: 500,
		threshold: 5
	});
} window.awe_lazyloadImage=awe_lazyloadImage;
awe_lazyloadImage();

window.addEventListener("load", onLoadFunction);
function onLoadFunction(e){
	onResizeFunction();
	window.addEventListener("resize", onResizeFunction);
}
function onResizeFunction (e){
	resizeImage();
}
$(document).on('click','.overlay, .close-popup, .btn-continue, .fancybox-close', function() {   
	hidePopup('.awe-popup'); 	
	setTimeout(function(){
		$('.loading').removeClass('loaded-content');
	},500);
	return false;
})
function awe_showLoading(selector) {
	var loading = $('.loader').html();
	$(selector).addClass("loading").append(loading); 
}  window.awe_showLoading=awe_showLoading;
function awe_hideLoading(selector) {
	$(selector).removeClass("loading"); 
	$(selector + ' .loading-icon').remove();
}  window.awe_hideLoading=awe_hideLoading;
function awe_showPopup(selector) {
	$(selector).addClass('active');
}  window.awe_showPopup=awe_showPopup;
function awe_hidePopup(selector) {
	$(selector).removeClass('active');
}  window.awe_hidePopup=awe_hidePopup;
awe.hidePopup = function (selector) {
	$(selector).removeClass('active');
}
$(document).on('click','.overlay, .close-window, .btn-continue, .fancybox-close', function() {   
	awe.hidePopup('.awe-popup'); 
	setTimeout(function(){
		$('.loading').removeClass('loaded-content');
	},500);
	return false;
})
function resizeImage() {
	setTimeout(function(){
		var queryThumb = document.querySelectorAll('.image_thumb');
		if (queryThumb != undefined) {
			queryThumb.forEach(function(thumb) {
				thumb.style.height = thumb.offsetWidth + "px";
			})
		}
	},200);
}
$(document).on('click','.overlay, .close-popup, .btn-continue, .fancybox-close', function() {   
	hidePopup('.awe-popup'); 	
	setTimeout(function(){
		$('.loading').removeClass('loaded-content');
	},500);
	return false;
})
function awe_showLoading(selector) {
	var loading = $('.loader').html();
	$(selector).addClass("loading").append(loading); 
}  window.awe_showLoading=awe_showLoading;
function awe_hideLoading(selector) {
	$(selector).removeClass("loading"); 
	$(selector + ' .loading-icon').remove();
}  window.awe_hideLoading=awe_hideLoading;
function awe_showPopup(selector) {
	$(selector).addClass('active');
}  window.awe_showPopup=awe_showPopup;
function awe_hidePopup(selector) {
	$(selector).removeClass('active');
}  window.awe_hidePopup=awe_hidePopup;
awe.hidePopup = function (selector) {
	$(selector).removeClass('active');
}
$('.menu-bar-h').click(function(e){
	e.stopPropagation();
	$('.menu_mobile').toggleClass('open_sidebar_menu');
	$('.opacity_menu').toggleClass('open_opacity');
});
$('.opacity_menu').click(function(e){
	$('.menu_mobile').removeClass('open_sidebar_menu');
	$('.dqdt-sidebar, .open-filters').removeClass('openf');
	$('.opacity_menu').removeClass('open_opacity');
});

$('.opacity_menu').click(function(e){
	$('.wrapmenu_right_2').removeClass('open_sidebar_menu');
	$('.opacity_menu').removeClass('open_opacity');
});
var wDWs = window.innerWidth;

function awe_convertVietnamese(str) { 
	str= str.toLowerCase();
	str= str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
	str= str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
	str= str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
	str= str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
	str= str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
	str= str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
	str= str.replace(/đ/g,"d"); 
	str= str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-");
	str= str.replace(/-+-/g,"-");
	str= str.replace(/^\-+|\-+$/g,""); 
	return str; 
} window.awe_convertVietnamese=awe_convertVietnamese;

function awe_category(){
	if (document.querySelectorAll('.nav-category .fa-plus') != undefined) {
		var faplus = document.querySelectorAll('.nav-category .fa-plus'),
			faminus = document.querySelectorAll('.nav-category .fa-minus');
		faplus.forEach(function(fap) {
			fap.addEventListener('click', function () { 
				fap.classList.toggle('fa-minus');
				fap.parentNode.classList.toggle('active');
			})
		})
		faminus.forEach(function(fam) {
			fam.addEventListener('click', function () { 
				fam.classList.toggle('fa-plus');
				fam.parentNode.classList.toggle('active');
			})
		})
	}
} window.awe_category=awe_category;
$(document).ready(function ($) {
	"use strict";
	awe_tab();
});
function awe_tab() {
	$(".e-tabs:not(.not-dqtab,.not-dqtab2,.not-dqtab3)").each( function(){
		$(this).find('.tabs-title li:first-child').addClass('current');
		$(this).find('.tab-content').first().addClass('current');
		$(this).find('.tabs-title li').click(function(e){
			var tab_id = $(this).attr('data-tab');
			var url = $(this).attr('data-url');
			$(this).closest('.e-tabs').find('.btn-viewmore a').attr('href',url);
			$(this).closest('.e-tabs').find('.tabs-title li').removeClass('current');
			$(this).closest('.e-tabs').find('.tab-content').removeClass('current');
			$(this).addClass('current');
			$(this).closest('.e-tabs').find("#"+tab_id).addClass('current');

		});    
	});
} window.awe_tab=awe_tab;


$('.aside-item .aside-title .fa-down-arrow').click(function(e){
	$(this).toggleClass('fa-down-arrow fa-up-arrow');
	$(this).closest('.aside-item').find('.aside-content').slideToggle('fast');
});
function awe_backtotop() { 
	window.onscroll = function() {scrollFunction()};
	function scrollFunction() {
		if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
			document.querySelector('.backtop').classList.add('show');
		} else {
			document.querySelector('.backtop').classList.remove('show');
		}
	}
	document.querySelector('.backtop').addEventListener("click", function(){
		scrollTo(0, 300);
	});
	function scrollTo(element, duration) {
		var e = document.documentElement;
		if (e.scrollTop === 0) {
			var t = e.scrollTop;
			++e.scrollTop;
			e = t + 1 === e.scrollTop-- ? e : document.body;
		}
		scrollToC(e, e.scrollTop, element, duration);
	}
	function scrollToC(element, from, to, duration) {
		if (duration <= 0) return;
		if (typeof from === "object") from = from.offsetTop;
		if (typeof to === "object") to = to.offsetTop;

		scrollToX(element, from, to, 0, 1 / duration, 20, easeOutCuaic);
	}

	function scrollToX(element, xFrom, xTo, t01, speed, step, motion) {
		if (t01 < 0 || t01 > 1 || speed <= 0) {
			element.scrollTop = xTo;
			return;
		}
		element.scrollTop = xFrom - (xFrom - xTo) * motion(t01);
		t01 += speed * step;
		setTimeout(function() {
			scrollToX(element, xFrom, xTo, t01, speed, step, motion);
		}, step);
	}

	function easeOutCuaic(t) {
		t--;
		return t * t * t + 1;
	}

} window.awe_backtotop=awe_backtotop;


var wDWs = $(window).width();

var is_renderd = 0


var wDW = $(window).width();
function renderLayout(){
	if(is_renderd) return 
	is_renderd = 1
	//<![CDATA[ 
	function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("footer")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" }) }
	loadCSS("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css");
	//]]> 

	if(localStorage.last_viewed_products != undefined) {
		var last_viewd_pro_array = JSON.parse(localStorage.last_viewed_products);
		if(document.querySelector('.countviewed') != null) {
			document.querySelector('.countviewed').innerHTML = last_viewd_pro_array.length;
		}
	}


	awe_backtotop();
	awe_category();

	if (document.querySelector('.qtyplus') != null) {
		document.querySelector('.qtyplus').addEventListener('click', function(e){
			e.preventDefault();   
			fieldName = this.dataset.field; 
			var numberA = document.querySelector('input[data-field='+fieldName+']').value();
			var currentVal = parseInt(numberA);
			if (!isNaN(currentVal)) { 
				document.querySelector('input[data-field='+fieldName+']').value = currentVal + 1;
			} else {
				document.querySelector('input[data-field='+fieldName+']').value = 0;
			}
		});
	}
	if (document.querySelector('.qtyminus') != null) {
		document.querySelector('.qtyminus').addEventListener('click', function(e){
			e.preventDefault(); 
			fieldName = this.dataset.field; 
			var numberA = document.querySelector('input[data-field='+fieldName+']').value();
			var currentVal = parseInt(numberA);
			if (!isNaN(currentVal) && currentVal > 1) {          
				document.querySelector('input[data-field='+fieldName+']').value = currentVal - 1;
			} else {
				document.querySelector('input[data-field='+fieldName+']').value = 1;
			}
		});
	}



	/*Footer*/
	if(wDW > 767){
		$('.toggle-mn').show();
	}else {
		$('.footer-click > .widget-ft > .clicked').click(function(){
			$(this).toggleClass('open_');
			$(this).next('ul').slideToggle("fast");
			$(this).next('div').slideToggle("fast");
		});
	}
	var wDWs = $(window).width();
	$('.cart_click').click(function(){
		$(this).addClass('off');
		$('.top-cart-content').addClass('show');
	});
	$('.top-cart-content .top_cart_header').click(function(){
		$(this).parent().removeClass('show');
		$('.cart_click').removeClass('off');
	});
	if (wDW < 992) {
		$(".not-dqtab .button_show_tab").click(function(){ 
			$('.link_tab_check_click').slideToggle('down');
		});
	}
	if (wDWs < 1199) {
		/*Remove html mobile*/
		$('.quickview-product').remove();
	}

	if (wDWs < 1199 && wDWs > 992) {
		$('.item_big li:has(ul)' ).one("click", function(e)     {
			e.preventDefault();
			return false;    
		});

		$('.ul_menu li:has(ul)' ).one("click", function(e)     {
			e.preventDefault();
			return false;    
		});
	}

	$('.ul_menu li .fa').click(function(e){
		if($(this).hasClass('current')) {
			$(this).closest('.ul_menu').find('li, .fa').removeClass('current');
		} else {
			$(this).closest('.ul_menu').find('li, .fa').removeClass('current');
			$(this).closest('li').addClass('current');
			$(this).addClass('current');
		}
	});
	$('.item_big li .icon').click(function(e){
		if($(this).hasClass('current')) {
			$(this).closest('ul').find('li, .icon').removeClass('current');
		} else {
			$(this).closest('ul').find('li, .icon').removeClass('current');
			$(this).closest('li').addClass('current');
			$(this).addClass('current');
		}
	});

	if (wDWs < 991) {
		var openFilter = document.querySelectorAll('.open-filters'),
			opacityEvent = document.querySelectorAll('.opacity_menu'),
			categoryNav = document.querySelectorAll('.category-action');

		openFilter.forEach(function(el){
			el.addEventListener('click', function () {
				this.classList.toggle('openf');
				document.querySelector('.dqdt-sidebar').classList.toggle('openf');
				document.querySelector('.opacity_menu').classList.toggle('current');
			});
		});

		opacityEvent.forEach(function(el){
			el.addEventListener('click', function () {
				document.querySelector('.opacity_menu').classList.remove('current');
				if(document.querySelector('.dqdt-sidebar, .open-filters, .open-filters')!= null) {
					document.querySelector('.dqdt-sidebar, .open-filters').classList.remove('openf');
					document.querySelector('.open-filters').classList.remove('openf');
					document.querySelector('.open-filters').style.display = "inline-block";
				}
			});
		});

		categoryNav.forEach(function(el){
			el.addEventListener('click', function () {
				document.querySelector('.opacity_menu').classList.toggle('current');
				if(document.querySelector('.dqdt-sidebar, .open-filters')!= null) {
					document.querySelector('.open-filters').style.display = "none";
					document.querySelector('.open-filters').classList.remove('openf');
					document.querySelector('.dqdt-sidebar, .open-filters').classList.remove('openf');
				}
			});
		});

	}
}


$(document).ready(function ($) {
	awe_lazyloadImage();
	$(window).one('mousemove touchstart load',renderLayout )
});