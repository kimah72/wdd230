const banner = document.querySelector('#banner');
const closeBannerButton = document.querySelector('#closeBanner');
const currentDate = new Date();
const currentDay = currentDate.getDay();

if (currentDay >= 4 && currentDay <= 6) {
    banner.style.display = 'block';
}

closeBannerButton.addEventListener('click', function () {
    banner.style.display = 'none';
});