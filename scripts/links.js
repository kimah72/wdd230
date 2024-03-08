const baseURL = "https://kimah72.github.io/wdd230/";
const linksURL = "https://kimah72.github.io/wdd230/data/links.json";
const ul = document.querySelector(".links");

async function getLinks(url) {
    const response = await fetch(url);
    const data = await response.json();

    displayLinks(data.lessons);
};

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        const h4 = document.createElement("h4");
        h4.textContent = `Lesson ${week.lesson}: `;

        week.links.forEach((lesson) => {
            const a = document.createElement("a");

            a.setAttribute("href", `${lesson.url}`);
            a.textContent = `${lesson.title}   |   `;

            h4.appendChild(a);

        });
        ul.appendChild(h4);
    });
};

getLinks(linksURL);