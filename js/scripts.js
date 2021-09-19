$(() => {
	// Страница товара
	if ($('.product_info .images').length) {
		const productSlider = new Swiper('.product_info .images .big .swiper-container', {
			loop: false,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 24,
			slidesPerView: 1,
			on: {
				slideChange: swiper => {
					setTimeout(() => {
						$('.product_info .images .thumbs button').removeClass('active')
						$('.product_info .images .thumbs button').eq(swiper.activeIndex).addClass('active')
					})
				}
			}
		})

		$('.product_info .images .thumbs button').click(function (e) {
			e.preventDefault()

			productSlider.slideTo($(this).data('slide-index'), 500)
		})
	}


	// Копирование промокода
	const clipboard = new ClipboardJS('.copy_btn')

	clipboard.on('success', (e) => {
		$(e.trigger).addClass('copied')

		setTimeout(() => {
			$(e.trigger).removeClass('copied')
		}, 3000)

		e.clearSelection()
	})


	// Изменение вида отображения товаров в категории
	$('.products_head .views button.grid_btn').click(function (e) {
		e.preventDefault()

		$('.products_head .views button').removeClass('active')
		$(this).addClass('active')

		$('.products .list').addClass('row')
		$('.products .list').removeClass('list')
	})

	$('.products_head .views button.list_btn').click(function (e) {
		e.preventDefault()

		$('.products_head .views button').removeClass('active')
		$(this).addClass('active')

		$('.products .row').addClass('list')
		$('.products .row').removeClass('row')
	})


	if ($(window).width() < 768) {
		$('.products .list').addClass('row')
		$('.products .list').removeClass('list')
	}


	// Фмльтр
	$('aside .filter .title').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active')
		$(this).next().slideToggle(300)
	})

	$('.mob_filter_btn').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active').next().slideToggle(300)
	})


	// Категории
	$('aside .categories .main').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active')
		$(this).next().slideToggle(300)
	})

	$('.mob_categories_btn').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active').next().slideToggle(300)
	})


	// Теги
	$('.mob_tags_btn').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active').next().slideToggle(300)
	})


	// Поиск
	$('header .search .input, .mob_header .search .input').keydown(function () {
		let _self = $(this),
			parent = $(this).closest('form')

		setTimeout(() => {
			_self.val().length > 2
				? parent.find('.datalist').fadeIn(300)
				: parent.find('.datalist').fadeOut(200)
		})
	})


	// Моб. меню
	$('.mob_header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').addClass('active')
		$('body').addClass('menu_open')
		$('header').addClass('show')
		$('.overlay').fadeIn(300)
	})

	$('header > .close, .overlay').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').removeClass('active')
		$('body').removeClass('menu_open')
		$('header').removeClass('show')
		$('.overlay').fadeOut(300)
	})


	// Отправка форм
	$('body').on('submit', '.products_head .price_list form, #get_price_list_modal form', function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: '#get_price_list_success_modal',
			type: 'inline'
		}])
	})

	$('body').on('submit', '#help_modal form', function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: '#help_success_modal',
			type: 'inline'
		}])
	})

	$('body').on('submit', '#order_modal form', function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: '#order_success_modal',
			type: 'inline'
		}])
	})

	$('body').on('submit', '#tz_modal form', function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: '#tz_success_modal',
			type: 'inline'
		}])
	})
})