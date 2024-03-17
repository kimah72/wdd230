const banner = document.querySelector('#banner');
const closeBannerButton = document.querySelector('#closeBanner');
const currentDate = new Date();
const currentDay = currentDate.getDay();

if (currentDay >= 1 && currentDay <= 3) {
    banner.style.display = 'block';
}

closeBannerButton.addEventListener('click', function () {
    banner.style.display = 'none';
});