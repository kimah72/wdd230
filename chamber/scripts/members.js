const baseURL = "https://kimah72.github.io/wdd230/chamber/images/";
const membersURL = "https://kimah72.github.io/wdd230/chamber/data/members.json";

const directory = document.querySelector(".directory");

async function getMembers(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.companies;
}

const displayMembers = async () => {
    directory.innerHTML = ""; // clear previous content

    const members = await getMembers(membersURL);

    members.forEach(member => {
        const div = document.createElement("div");
        const img = document.createElement("img");
        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        const phone = document.createElement("p");
        const weburl = document.createElement("a");
        const membLvl = document.createElement("p");

        div.classList.add("member-card");
        img.src = baseURL + member.images;
        img.alt = member.name;
        h2.textContent = `${member.name}`;
        p.textContent = `${member.address}`;
        phone.textContent = `Phone: ${member.phoneNumber}`;
        weburl.setAttribute("href", `${member.weburl}`);
        weburl.setAttribute("target", "_blank");
        weburl.textContent = `${member.name} Website`;
        membLvl.textContent = `Membership Level: ${member.membership}`;

        div.appendChild(img);
        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(phone)
        div.appendChild(weburl)
        div.appendChild(membLvl)

        directory.appendChild(div);
    });
};
// Initial display
displayMembers();

// The start of grid button and list button

const gridbutton = document.querySelector('#grid');
const listbutton = document.querySelector('#list');
const display = document.querySelector('.directory');

// arrow functions for click event to change between the two
gridbutton.addEventListener('click', () => {
    display.classList.add('grid');
    display.classList.remove('list');
});

listbutton.addEventListener('click', showList);

function showList() {
    display.classList.add('list');
    display.classList.remove('grid');
}