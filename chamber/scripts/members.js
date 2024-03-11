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
        div.classList.add("member-card");

        const img = document.createElement("img");
        img.src = baseURL + member.images;
        img.alt = member.name;

        const h2 = document.createElement("h2");
        h2.textContent = `${member.name}`;

        const p = document.createElement("p");
        p.textContent = `${member.address}`;

        const phone = document.createElement("p");
        phone.textContent = `Phone: ${member.phoneNumber}`;

        const weburl = document.createElement("a");
        weburl.setAttribute("href", `${member.weburl}`);
        weburl.setAttribute("target", "_blank");
        weburl.textContent = `${member.name} Website`;

        const membLvl = document.createElement("p");
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
