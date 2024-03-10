const baseURL = "https://kimah72.github.io/wdd230/chamber/";
const baseIMG = "https://kimah72.github.io/wdd230/chamber/images/"
const membersURL = "https://kimah72.github.io/wdd230/chamber/data/members.json";

const container = document.querySelector(".container");

async function getMembers(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.companies;
}

const displayMembers = async () => {
    container.innerHTML = ""; // clear previous content

    const members = await getMembers(membersURL);

    members.forEach(member => {
        const div = document.createElement("div");
        div.classList.add("member-card");

        const img = document.createElement("img");
        img.src = baseIMG + member.images;
        img.alt = member.name;

        const h2 = document.createElement("h2");
        h2.textContent = member.name;

        const p = document.createElement("p");
        p.textContent = member.info;

        div.appendChild(img);
        div.appendChild(h2);
        div.appendChild(p);

        container.appendChild(div);
    });
};

// Initial display
displayMembers();
