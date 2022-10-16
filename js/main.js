$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__items').toggleClass('active');
		$('body').toggleClass('lock')
	});
});

//change bg color
window.onload = function () {
	var button = document.getElementById('input_button_bg_change');
	var body = document.getElementsByTagName('body')[0];
	var colors = ['#ffffff', '#1f2e35'];
	button.onclick = function () {
		body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
	};
};

// Carousel
const owl = $('.owl-carousel');

owl.owlCarousel({
	loop: true,
	margin: 20,
	startPosition: 0,
	items: 1,
	responsive: {
		650: {
			items: 3,
			startPosition: 1,

		},
		1200: {
			items: 3,
			margin: 32,
		},
	},
});

$('.slider__btn--prev').click(function () {
	owl.trigger('prev.owl.carousel');
});


$('.slider__btn--next').click(function () {
	owl.trigger('next.owl.carousel');
});

// Nav icon
const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav')
const menuIcon = document.querySelector('.menu-icon');


navBtn.onclick = function () {
	nav.classList.toggle('nav--mobile')
	menuIcon.classList.toggle('menu-icon--active');
	document.body.classList.toggle('no-scroll');
};
