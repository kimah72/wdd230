const events = [
    {
        title: "Business Networking Breakfast",
        date: "April 15, 2024",
        time: "8:00 AM - 9:30 AM",
        location: "Spanish Fork Community Center",
        description: "Join us for a morning of networking with fellow business professionals in the Spanish Fork area. Expand your network, exchange business cards, and discover new opportunities for collaboration."
    },
    {
        title: "Chamber Mixer: Spring Social",
        date: "April 25, 2024",
        time: "6:00 PM - 8:00 PM",
        location: "Spanish Fork Art Gallery",
        description: "Mix and mingle with members of the Spanish Fork Chamber of Commerce at our Spring Social event. Enjoy refreshments, live music, and an opportunity to connect with local business owners and community leaders.."
    },
    {
        title: "Small Business Workshop: Marketing Strategies for Growth",
        date: "May 5, 2024",
        time: "10:00 AM - 12:00 PM",
        location: " Spanish Fork Public Library",
        description: "Learn effective marketing strategies to grow your small business in this informative workshop. Topics will include digital marketing, social media advertising, and branding techniques tailored for small businesses."
    },
    {
        title: "Community Cleanup Day",
        date: "May 18, 2024",
        time: "9:00 AM - 12:00 PM",
        location: "Various Locations in Spanish Fork",
        description: "Join us for a day of community service as we come together to clean up parks, streets, and public areas in Spanish Fork. Volunteers of all ages are welcome to participate. Help beautify our community and make a positive impact!"
    },
    {
        title: "Chamber Luncheon: Economic Outlook Panel Discussion",
        date: "May 30, 2024",
        time: "12:00 PM - 1:30 PM",
        location: "Spanish Fork Convention Center",
        description: "Gain insights into the economic landscape of Spanish Fork and Utah County at our Chamber Luncheon. Join us for a panel discussion featuring local economists and industry experts as they discuss key trends, challenges, and opportunities shaping our local economy."
    }
    
];

let currentIndex = 0;
const slideshowContainer = document.getElementById('events-container');

function createEventCard(event) {
    const eventCard = document.createElement('div');
    eventCard.classList.add('event-card');
    eventCard.style.backgroundColor = getBackgroundColor(currentIndex);
    
    const title = document.createElement('h3');
    title.textContent = event.title;
    
    const date = document.createElement('p');
    date.innerHTML = `<strong>Date:</strong> ${event.date}`;
    
    const time = document.createElement('p');
    time.innerHTML = `<strong>Time:</strong> ${event.time}`;
    
    const location = document.createElement('p');
    location.innerHTML = `<strong>Location:</strong> ${event.location}`;
    
    const description = document.createElement('p');
    description.textContent = event.description;
    
    eventCard.appendChild(title);
    eventCard.appendChild(date);
    eventCard.appendChild(time);
    eventCard.appendChild(location);
    eventCard.appendChild(description);
    
    return eventCard;
}

function displayEvent(eventIndex) {
    slideshowContainer.innerHTML = '';
    const event = events[eventIndex];
    const eventCard = createEventCard(event);
    slideshowContainer.appendChild(eventCard);
}

function nextEvent() {
    currentIndex = (currentIndex + 1) % events.length;
    displayEvent(currentIndex);
}

function getBackgroundColor(index) {
    const colors = ['#ff9999', '#99ff99', '#9999ff', '#ffff99', '#99ffff'];
    return colors[index % colors.length];
}

displayEvent(currentIndex);

setInterval(nextEvent, 7000);