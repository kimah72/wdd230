// New script for current year 
const currentyear = {year: 'numeric'};
document.getElementById('currentyear').textContent = new Date().toLocaleDateString('en-US', currentyear);

// New script for date last modified
document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;

// Hamburger menu

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.topnav')

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});