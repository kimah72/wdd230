// Hamburger menu

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation')

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// adding copyright and tagline to footer
const currentyear = {year: 'numeric'};
document.getElementById('currentyear').textContent = new Date().toLocaleDateString('en-US', currentyear);

// New script for date last modified
document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;