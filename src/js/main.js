$(document)
	.ready(function() {
		var iconSearch = $('.header__search-icon--search');
		var iconClose = $('.header__search-icon--close');
		var iconBox = $('.header__search');
		var searchDrop = $('.search-dropdown');
		var mobileIconBox = $('.header__mobile');
		var mobileIcon = $('.hamburger-icon');
		var mainNav = $('.header__navigation');

		iconSearch.on('click', function() {
			searchDrop.addClass('show');
			iconSearch.hide();
			iconClose.slideDown();
			iconBox.addClass('icon--active');
			if ($(window)
				.width() < 768) {
				mobileIcon.children()
					.removeClass('change');
				mainNav.slideUp();
				mobileIconBox.removeClass('icon--active');
			}
		});

		iconClose.on('click', function() {
			searchDrop.removeClass('show');
			iconClose.hide();
			iconSearch.slideDown();
			iconBox.removeClass('icon--active');
		});

		mobileIconBox.on('click', function() {
			mobileIcon.children()
				.toggleClass('change');
			$(this)
				.addClass('icon--active');
			mainNav.slideToggle();
			searchDrop.removeClass('show');
			iconClose.hide();
			iconSearch.slideDown();
			iconBox.removeClass('icon--active');
		});
	});
