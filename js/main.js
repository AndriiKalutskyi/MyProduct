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
