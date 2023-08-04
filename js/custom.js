jQuery(document).ready(function () {

	jQuery('.content_toggle').click(function () {
		jQuery('.content_block').toggleClass('hide');
		if (jQuery('.content_block').hasClass('hide')) {
			jQuery('.content_toggle').html('Читать подробнее');
		} else {
			jQuery('.content_toggle').html('Скрыть');
		}
		return false;
	});

	jQuery('.content_toggle2').click(function () {
		jQuery('.content_block2').toggleClass('hide');
		if (jQuery('.content_block2').hasClass('hide')) {
			jQuery('.content_toggle2').html('Скрыть');
		} else {
			jQuery('.content_toggle2').html('Смотреть всё');
		}
		return false;
	});

	jQuery('.show_nav').click(function () {
		jQuery('.show_nav, #drop_nav').addClass('open');
		jQuery('.modal_mask').addClass('modal_mask_nav').fadeIn(200);
		var winH = jQuery(document).height();
		jQuery('#drop_nav').css('min-height', winH);
		return false;
	});

	jQuery('.sub_nav_lv1 > a').click(function () {
		jQuery('#drop_nav').removeClass('drop_nav_lv2 drop_nav_lv3').addClass('drop_nav_lv1');
		jQuery(this).parent('li').find('ul:first').addClass('open');
		jQuery('body,html').animate({
			scrollTop: 0
		}, 400);
		return false;
	});
	jQuery('.sub_nav_lv2 > a').click(function () {
		jQuery('#drop_nav').removeClass('drop_nav_lv1 drop_nav_lv3').addClass('drop_nav_lv2');
		jQuery(this).parent('li').find('ul:first').addClass('open');
		jQuery('body,html').animate({
			scrollTop: 0
		}, 400);
		return false;
	});
	jQuery('.sub_nav_lv3 > a').click(function () {
		jQuery('#drop_nav').removeClass('drop_nav_lv1 drop_nav_lv2').addClass('drop_nav_lv3');
		jQuery(this).parent('li').find('ul:first').addClass('open');
		jQuery('body,html').animate({
			scrollTop: 0
		}, 400);
		return false;
	});

	jQuery('.back_nav_lv0 > a').click(function () {
		jQuery('#drop_nav').removeClass('drop_nav_lv1 drop_nav_lv2 drop_nav_lv3');
		jQuery(this).parent('ul').parent('li').removeClass('open');
		jQuery('body,html').animate({
			scrollTop: 0
		}, 400);
		return false;
	});
	jQuery('.back_nav_lv1 > a').click(function () {
		jQuery('#drop_nav').removeClass('drop_nav_lv2 drop_nav_lv3').addClass('drop_nav_lv1');
		jQuery(this).parent('ul').parent('li').removeClass('open');
		jQuery('body,html').animate({
			scrollTop: 0
		}, 400);
		return false;
	});
	jQuery('.back_nav_lv2 > a').click(function () {
		jQuery('#drop_nav').removeClass('drop_nav_lv1 drop_nav_lv3').addClass('drop_nav_lv2');
		jQuery(this).parent('ul').parent('li').removeClass('open');
		jQuery('body,html').animate({
			scrollTop: 0
		}, 400);
		return false;
	});



	jQuery('.slider').not('.slider-services').slick({
		dots: true,
		appendDots: '#slider_dots',
		arrows: false,
		autoplay: true,
		autoplaySpeed: 7000,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	});


	jQuery('.slider-services').slick({
		dots: true,
		appendDots: '#slider_dots',
		arrows: true,
		autoplay: true,
		autoplaySpeed: 7000,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	});


	jQuery('.prod_list_slider').slick({
		dots: true,
		arrows: false,
		autoplay: false,
		speed: 0,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 759,
				settings: {
					dots: false,
					variableWidth: true,
					infinite: true,
					swipe: true
				}
			}
		]
	});

	jQuery('.prod_list_slider .slick-dots li').on('mouseover', function () {
		jQuery(this).trigger('click');
	});


	jQuery('.news_slider').slick({
		dots: false,
		arrows: true,
		autoplay: false,
		speed: 500,
		slidesTosShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 759,
				settings: {
					slidesToShow: 1,
					dots: true,
				}
			}
		]
	});



	jQuery('.relats_slider').slick({
		dots: false,
		arrows: true,
		autoplay: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1240,
				settings: {
					slidesToShow: 2,
				}
			}, {
				breakpoint: 759,
				settings: {
					slidesToShow: 2,
					dots: true,
					arrows: false,
				}
			}
		]
	});

	jQuery('.relats_slider2').slick({
		dots: false,
		arrows: true,
		autoplay: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1240,
				settings: {
					slidesToShow: 2,
				}
			}, {
				breakpoint: 759,
				settings: {
					slidesToShow: 2,
					dots: true,
					arrows: false,
				}
			}
		]
	});

	jQuery('.relats_slider_parts').slick({
		dots: false,
		arrows: true,
		autoplay: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1240,
				settings: {
					slidesToShow: 3,
				}
			}, {
				breakpoint: 759,
				settings: {
					slidesToShow: 2,
					dots: true,
					arrows: false,
				}
			}
		]
	});

	jQuery('.relats_slider_inst').slick({
		dots: false,
		arrows: true,
		autoplay: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1240,
				settings: {
					slidesToShow: 4,
				}
			}, {
				breakpoint: 759,
				settings: {
					slidesToShow: 2,
					dots: true,
					arrows: false,
				}
			}
		]
	});

	jQuery('.relats_slider_blog').slick({
		dots: true,
		arrows: true,
		autoplay: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1240,
				settings: {
					slidesToShow: 2,
				}
			}, {
				breakpoint: 759,
				settings: {
					slidesToShow: 2,
					dots: true,
					arrows: false,
				}
			}
		]
	});

	jQuery('.relats_slider_sales').slick({
		dots: false,
		arrows: true,
		autoplay: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1240,
				settings: {
					slidesToShow: 2,
				}
			}, {
				breakpoint: 759,
				settings: {
					slidesToShow: 2,
					dots: true,
					arrows: false,
				}
			}
		]
	});

	jQuery('.relats_slider_advants').slick({
		dots: true,
		arrows: true,
		autoplay: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1240,
				settings: {
					slidesToShow: 3,
				}
			}, {
				breakpoint: 759,
				settings: {
					slidesToShow: 2,
					dots: true,
					arrows: false,
				}
			}
		]
	});

	jQuery('.relats_slider_brands').slick({
		dots: false,
		arrows: true,
		autoplay: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1240,
				settings: {
					slidesToShow: 3,
				}
			}, {
				breakpoint: 759,
				settings: {
					slidesToShow: 2,
					dots: true,
					arrows: false,
				}
			}
		]
	});



	jQuery('.car_se_form_add a').click(function () {
		jQuery('.car_se_form_add').hide();
		jQuery('.car_se_form_add_open, .car_se_form_rem').show();
		return false;
	});
	jQuery('.car_se_form_rem a').click(function () {
		jQuery('.car_se_form_add').show();
		jQuery('.car_se_form_add_open, .car_se_form_rem').hide();
		return false;
	});

	jQuery('.car_se_form_add2 a').click(function () {
		jQuery('.car_se_form_add2').hide();
		jQuery('.car_se_form_add_open2, .car_se_form_rem2').show();
		return false;
	});
	jQuery('.car_se_form_rem2 a').click(function () {
		jQuery('.car_se_form_add2').show();
		jQuery('.car_se_form_add_open2, .car_se_form_rem2').hide();
		return false;
	});

	jQuery('.car_se_form_add2 a').click(function () {
		jQuery('.car_se_form_add2').hide();
		jQuery('.car_se_form_add_open2, .car_se_form_rem2').show();
		return false;
	});
	jQuery('.car_se_form_rem2 a').click(function () {
		jQuery('.car_se_form_add2').show();
		jQuery('.car_se_form_add_open2, .car_se_form_rem2').hide();
		return false;
	});

	jQuery('.car_se_form_add3 a').click(function () {
		jQuery('.car_se_form_add3').hide();
		jQuery('.car_se_form_add_open3, .car_se_form_rem3').show();
		return false;
	});
	jQuery('.car_se_form_rem3 a').click(function () {
		jQuery('.car_se_form_add3').show();
		jQuery('.car_se_form_add_open3, .car_se_form_rem3').hide();
		return false;
	});

	jQuery('.car_se_form_add_open3, .car_se_form_rem3').hide();



	jQuery('.prod_list_tab_b').click(function () {
		jQuery(this).addClass('active').siblings().removeClass('active');;
		jQuery(this).parents('.prod_list').find('.prod_list_bys').show();
		jQuery(this).parents('.prod_list').find('.prod_list_params').hide();
		return false;
	});
	jQuery('.prod_list_tab_p').click(function () {
		jQuery(this).addClass('active').siblings().removeClass('active');;
		jQuery(this).parents('.prod_list').find('.prod_list_params').show();
		jQuery(this).parents('.prod_list').find('.prod_list_bys').hide();
		return false;
	});



	jQuery('.show_filt').click(function () {
		jQuery('#filter').addClass('open');
		jQuery('.modal_mask').fadeIn(200);
		return false;
	});

	jQuery('.hide_filt').click(function () {
		jQuery('#filter').removeClass('open');
		jQuery('.modal_mask').fadeOut(200);
		return false;
	});



	if (jQuery('#filt_range_slider').length > 0) {
		var filt_price = function (data) {
			fp_from_inp = data.from;
			fp_to_inp = data.to;
			jQuery('#filt_range_from').val(fp_from_inp);
			jQuery('#filt_range_to').val(fp_to_inp);
		};
		var fp_min = jQuery('#filt_range_from').data('min');
		var fp_max = jQuery('#filt_range_to').data('max');
		var fp_from = jQuery('#filt_range_from').val();
		var fp_to = jQuery('#filt_range_to').val();
		jQuery("#filt_range_slider").ionRangeSlider({
			type: "double",
			min: fp_min,
			max: fp_max,
			from: fp_from,
			to: fp_to,
			hide_from_to: true,
			grid: false,
			onStart: filt_price,
			onChange: filt_price,
			onFinish: filt_price,
			onUpdate: filt_price
		});
	}

	if (jQuery('#filt_range_slider2').length > 0) {
		var filt_price2 = function (data) {
			fp_from_inp = data.from;
			fp_to_inp = data.to;
			jQuery('#filt_range_from2').val(fp_from_inp + '%');
			jQuery('#filt_range_to2').val(fp_to_inp + '%');
		};
		var fp_min = jQuery('#filt_range_from2').data('min');
		var fp_max = jQuery('#filt_range_to2').data('max');
		var fp_from = jQuery('#filt_range_from2').val();
		var fp_to = jQuery('#filt_range_to2').val();
		jQuery("#filt_range_slider2").ionRangeSlider({
			type: "double",
			min: fp_min,
			max: fp_max,
			from: fp_from,
			to: fp_to,
			hide_from_to: true,
			grid: false,
			onStart: filt_price2,
			onChange: filt_price2,
			onFinish: filt_price2,
			onUpdate: filt_price2
		});
	}



	jQuery('.filt_color').click(function () {
		jQuery(this).toggleClass('active');
		return false;
	});



	jQuery('.filt_plus a').click(function () {
		jQuery('.filt_plus').hide();
		jQuery('.filt_plus_open, .filt_minus').show();
		return false;
	});
	jQuery('.filt_minus a').click(function () {
		jQuery('.filt_plus').show();
		jQuery('.filt_plus_open, .filt_minus').hide();
		return false;
	});



	jQuery('.otvets_del').click(function () {
		jQuery(this).parent('.otvets').hide();
		return false;
	});



	jQuery('.footer_col_t').click(function () {
		jQuery(this).parents('.foot_nav').toggleClass('open');
		return false;
	});



	jQuery('.foot_nav_drop > a').click(function () {
		jQuery(this).parents('li').toggleClass('open');
		return false;
	});



	jQuery('body').append('<div id="tooltip"></div>');

	function tooltip($object, switcher, text) {
		if (switcher) {
			$object.mousemove(function (eventObject) {
				$data_tooltip = jQuery(this).attr("data-tooltip") || text;
				jQuery("#tooltip").text($data_tooltip)
					.css({
						"top": eventObject.pageY - 15,
						"left": eventObject.pageX - 30
					})
					.show();
			}).mouseout(function () {
				jQuery("#tooltip").hide()
					.text("")
					.css({
						"top": 0,
						"left": 0
					});
			});
		} else {
			$object.off('mousemove mouseout');
		}
	}

	tooltip(jQuery("[data-tooltip]"), true);



	jQuery('.count_m').click(function () {
		var count_i = jQuery(this).parents('.count').find('.count_i');
		var count = count_i.val();
		if (!isNaN(count) && count > 0) {
			count--;
			count_i.val(count);
		}
		return false;
	});

	jQuery('.count_p').click(function () {
		var count_i = jQuery(this).parents('.count').find('.count_i');
		var count = count_i.val();
		if (!isNaN(count)) {
			count++;
			count_i.val(count);
		}
		return false;
	});



	jQuery('body').append('<div class="modal_mask"></div>');

	jQuery('a.modal').click(function () {
		var id = jQuery(this).attr('href');
		var winH = jQuery(window).height();
		var winHt = jQuery(document).scrollTop();
		var modh = jQuery(id).innerHeight();
		if (modh > winH) {
			jQuery(id).css('top', winHt);
		} else {
			jQuery(id).css('top', winHt + winH / 2 - modh / 2);
		}
		jQuery('.modal_mask').fadeIn(200);
		jQuery(id).fadeIn(200);
		return false;
	});

	jQuery('.modal_close, .modal_mask').click(function () {
		jQuery('.modal_mask').removeClass('modal_mask_nav').hide();
		jQuery('.modal_win').hide();
		jQuery('#filter').removeClass('open');
		jQuery('.show_nav, #drop_nav').removeClass('open');
		return false;
	});



	jQuery('.go_slow').click(function () {
		elementClick = this.hash;
		destination = jQuery(elementClick).offset().top;
		jQuery('body,html').animate({ scrollTop: destination }, 300);
		return false;
	});



	jQuery.fn.getTitle = function () {
		var arr = jQuery('a.fancybox');
		jQuery.each(arr, function () {
			var title = jQuery(this).children('img').attr('title');
			jQuery(this).attr('title', title);
		})
	}
	var thumbnails = 'a:has(img)[href$=".bmp"],a:has(img)[href$=".gif"],a:has(img)[href$=".jpg"],a:has(img)[href$=".jpeg"],a:has(img)[href$=".png"],a:has(img)[href$=".BMP"],a:has(img)[href$=".GIF"],a:has(img)[href$=".JPG"],a:has(img)[href$=".JPEG"],a:has(img)[href$=".PNG"]';
	jQuery(thumbnails).each(function () {
		if (jQuery(this).has('img')) {
			if (jQuery(this).hasClass('fancybox')) {
				jQuery(this).getTitle();
			} else {
				jQuery(this).addClass('fancybox').attr('data-fancybox', 'image').getTitle();
			}
		}
	});
	jQuery('a.fancybox').fancybox();



	jQuery('.entry iframe').each(function () {
		if (jQuery(this).attr('src').indexOf('youtube') !== -1) {
			jQuery(this).wrap('<div class="video"></div>');
		}
	});
	jQuery('.entry table').each(function () {
		jQuery(this).wrap('<div class="entry_table"></div>');
	});

	jQuery('.services-list__ul__item_slider').slick({
		dots: true,
		arrows: false,
		autoplay: false,
		speed: 0,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 759,
				settings: {
					dots: false,
					variableWidth: true,
					infinite: true,
				}
			}
		]
	});
	jQuery('.services-list__ul__item_slider .slick-dots li').on('mouseover', function (e) {
		var $this = jQuery(this);
		var $parent = $this.closest('.services-list__ul__item_slider');
		var $slides = $parent.find('.slick-dots li');
		var $currentSlide = jQuery(e.target);
		if (!$currentSlide.is('li')) {
			$currentSlide = $currentSlide.closest('li');
		}
		$parent.slick('slickGoTo', $slides.index($currentSlide));
	});


	//Compare
	var $compare = jQuery('.compare');
	var $prodsCompare = jQuery('.prods-compare');
	var $prodsImgs = jQuery('.prods-compare__imgs');
	var $prodsItems = jQuery('.prods-compare__param__items');
	var $filter = jQuery('.tabs-border');
	var $arrows = jQuery($compare.attr('data-arrows'));
	var $arrowRightCompare = $arrows.find('.compare__arrows_arrow2');
	var $arrowRightFilter = $arrows.find('.compare__arrows_arrow');
	var $arrowLeftCompare = $arrows.find('.compare__arrows_arrow3');
	var $arrowLeftFilter = $arrows.find('.compare__arrows_arrow4');
	var stateSlider = true;
	var widthItem = 280;
	function widthItemInit() {
		if (window.innerWidth > 1240) {
			widthItem = 280;
		} else if (window.innerWidth <= 1240 && window.innerWidth > 759) {
			widthItem = 210;
		} else if (window.innerWidth <= 759) {
			widthItem = 168;
		};
	}
	widthItemInit();
	jQuery(window).on('resize', widthItemInit);
	$compare.each(function () {
		var $this = jQuery(this);
		var $thisImgs = $this.find($prodsImgs);
		var $thisImgsItems = $thisImgs.find('.prods-compare__imgs_item');
		var $buttons = jQuery($this.closest($compare).attr('data-arrows'));
		var $thisFilter = $this.find($filter);
		var $thisTabs = $thisFilter.find('.tab-prod');
		var widthFilter = 0;
		$thisTabs.each(function (v) {
			widthFilter += jQuery(this).outerWidth();
		});
		if ($thisImgs.outerWidth() > $thisImgsItems.length * widthItem) {
			$buttons.find($arrowLeftCompare).hide(0);
			$buttons.find($arrowRightCompare).hide(0);
			stateSlider = false;
		} else {
			$buttons.find($arrowLeftCompare).show(0);
			$buttons.find($arrowRightCompare).show(0);
		}
		if ($thisFilter.outerWidth() > widthFilter) {
			$buttons.find($arrowLeftFilter).hide(0);
			$buttons.find($arrowRightFilter).hide(0);
			stateSlider = false;
		} else {
			$buttons.find($arrowLeftFilter).show(0);
			$buttons.find($arrowRightFilter).show(0);
		}
	});
	$arrowRightFilter.on('click', function () {
		var $this = jQuery(this);
		var $thisCompare = jQuery($this.closest('.compare__arrows').attr('data-compare'));
		var $thisFilter = $thisCompare.find($filter);
		var $thisTabs = $thisFilter.find('.tab-prod');
		var left = $thisFilter.scrollLeft();
		var widthFilter = 0;
		$thisTabs.each(function (v) {
			widthFilter += jQuery(this).outerWidth();
		});
		if (left + widthItem + $thisFilter.outerWidth() < widthFilter) {
			$this.closest($arrows).find('.compare__arrows_arrow').show(0);
			$this.closest($arrows).find('.compare__arrows_arrow4').show(0);
		} else {
			$this.closest($arrows).find('.compare__arrows_arrow').hide(0);
			$this.closest($arrows).find('.compare__arrows_arrow4').show(0);
		}
		$thisFilter.stop().animate({ scrollLeft: left + widthItem }, 500, 'swing');
	});
	$arrowLeftFilter.on('click', function () {
		var $this = jQuery(this);
		var $thisCompare = jQuery($this.closest('.compare__arrows').attr('data-compare'));
		var $thisFilter = $thisCompare.find($filter);
		var left = $thisFilter.scrollLeft();
		if ((left - widthItem) < 0) {
			$this.closest($arrows).find('.compare__arrows_arrow4').hide(0);
			$this.closest($arrows).find('.compare__arrows_arrow').show(0);
		} else {
			$this.closest($arrows).find('.compare__arrows_arrow4').show(0);
			$this.closest($arrows).find('.compare__arrows_arrow').show(0);
		}
		$thisFilter.stop().animate({ scrollLeft: left - widthItem }, 500, 'swing');
	});
	$arrowRightCompare.on('click', function () {
		var $this = jQuery(this);
		var $thisCompare = jQuery($this.closest('.compare__arrows').attr('data-compare'));
		var $thisImgs = $thisCompare.find($prodsImgs);
		var $thisItems = $thisCompare.find($prodsItems);
		var $thisImgsItems = $thisImgs.find('.prods-compare__imgs_item');
		var left = $thisImgs.scrollLeft();
		if (left + widthItem + $thisImgs.outerWidth() < $thisImgsItems.length * widthItem) {
			$this.closest($arrows).find('.compare__arrows_arrow2').show(0);
			$this.closest($arrows).find('.compare__arrows_arrow3').show(0);
		} else {
			$this.closest($arrows).find('.compare__arrows_arrow2').hide(0);
		}
		$thisImgs.stop().animate({ scrollLeft: left + widthItem }, 500, 'swing');
		$thisItems.stop().animate({ scrollLeft: left + widthItem }, 500, 'swing');
	});
	$arrowLeftCompare.on('click', function () {
		var $this = jQuery(this);
		var $thisCompare = jQuery($this.closest('.compare__arrows').attr('data-compare'));
		var $thisImgs = $thisCompare.find($prodsImgs);
		var $thisItems = $thisCompare.find($prodsItems);
		var left = $thisImgs.scrollLeft();
		if ((left - widthItem) < 0) {
			$this.closest($arrows).find('.compare__arrows_arrow3').hide(0);
		} else {
			$this.closest($arrows).find('.compare__arrows_arrow3').show(0);
			$this.closest($arrows).find('.compare__arrows_arrow2').show(0);
		}
		$thisImgs.stop().animate({ scrollLeft: left - widthItem }, 500, 'swing');
		$thisItems.stop().animate({ scrollLeft: left - widthItem }, 500, 'swing');
	});
	if (stateSlider) {
		$arrowLeftCompare.trigger('click');
		$arrowLeftFilter.trigger('click');
	}

	// IMAGE COMPARE
	const viewers = document.querySelectorAll('.image-compare');

	const options = {
		controlColor: "#DA3726",
		controlShadow: false,
		addCircle: true,
		addCircleBlur: false,
	};

	viewers.forEach((element) => {
		let view = new ImageCompare(element, options).mount();
	});

	function onPlayerReady(event) {
		event.target.playVideo();
	}
	var player = [];
	jQuery('.modalLink').on('click', function (e) {
		var $this = jQuery(this);
		var $modal = jQuery($this.attr('href'));
		var idVideo = $this.attr('data-video');
		var idWrap = $this.attr('data-videoWrap')

		if (!player[idVideo]) {
			player[idVideo] = new YT.Player(idWrap, {
				height: '360',
				width: '640',
				videoId: idVideo,
				events: {
					'onReady': onPlayerReady
				}
			});
			function onPlayerReady(event) {
				event.target.playVideo();
			}
		} else {
			player[idVideo].playVideo();
		}
	});
	jQuery('a[href="#closeModal"]').on('click', function (e) {
		var $parent = jQuery(this).closest('.modalVideo');
		console.dir(player);
		player[jQuery('[href="#' + $parent.attr('id') + '"]').attr('data-video')].pauseVideo();
	});
	if (document.location.hash) {
		setTimeout(function () {
			jQuery('.modalLink[href="' + document.location.hash + '"]').trigger('click');
		}, 500);
	}

});
