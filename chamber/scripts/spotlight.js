const baseURL = "https://kimah72.github.io/wdd230/chamber/images/";
const membersURL = "https://kimah72.github.io/wdd230/chamber/data/members.json";

// Calling the data to use in Spotlight
async function fetchMemberData() {
    try {
        const response = await fetch(membersURL);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data.companies;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to filter members by status (silver or gold)
function filterMembersByStatus(members) {
    return members.filter(member => member.membership === 'Silver' || member.membership === 'Gold');
}

// Function to randomly select members
function selectRandomMembers(members, count) {
    const shuffledMembers = members.sort(() => 0.5 - Math.random());
    return shuffledMembers.slice(0, count);
}

// Function to display selected members on the home page
async function displaySpotlightMembers() {
    // Fetch member data
    const allMembers = await fetchMemberData();

    // Filter members by status (silver or gold)
    const silverGoldMembers = filterMembersByStatus(allMembers);

    // Select random members from filtered list
    const selectedMembers = selectRandomMembers(silverGoldMembers, 3);

    // Loop through selected members and create member cards
    selectedMembers.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');

        const img = document.createElement('img');
        img.src = baseURL + member.images;
        img.alt = member.name;

        const h2 = document.createElement('h2');
        h2.textContent = member.name;

        const phone = document.createElement('p');
        phone.textContent = `Phone: ${member.phoneNumber}`;

        const information = document.createElement('p');
        information.textContent = member.info;

        const membLvl = document.createElement('p');
        membLvl.textContent = `Membership Level: ${member.membership}`;

        memberCard.appendChild(img);
        memberCard.appendChild(h2);
        memberCard.appendChild(phone);
        memberCard.appendChild(information);
        memberCard.appendChild(membLvl);

        // Create a new spotlight-item container for each member card
        const spotlightItem = document.createElement('div');
        spotlightItem.classList.add('spotlight-item');
        spotlightItem.appendChild(memberCard);

        // Append each member card with its own spotlight-item container to the main spotlight-container
        const spotlightContainer = document.querySelector('#spotlight-container');
        spotlightContainer.appendChild(spotlightItem);
    });
}

// Call displaySpotlightMembers when DOM content is loaded
document.addEventListener('DOMContentLoaded', async () => {
    await displaySpotlightMembers();
});
