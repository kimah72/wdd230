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

function displayEvent(eventIndex) {
    const event = events[eventIndex];
    const eventCard = `
        <div class="event-card" style="background-color: ${getBackgroundColor(eventIndex)};">
            <h3>${event.title}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Time:</strong> ${event.time}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <p>${event.description}</p>
        </div>
    `;
    slideshowContainer.innerHTML = eventCard;
}

function nextEvent() {
    currentIndex = (currentIndex + 1) % events.length;
    displayEvent(currentIndex);
}

function getBackgroundColor(index) {
    // Define an array of colors to be used for the background
    const colors = ['#ff9999', '#99ff99', '#9999ff', '#ffff99', '#99ffff'];
    // Return a color from the array based on the index
    return colors[index % colors.length];
}

displayEvent(currentIndex);

setInterval(nextEvent, 7000);