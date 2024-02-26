// Hamburger menu

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.topnav')

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});