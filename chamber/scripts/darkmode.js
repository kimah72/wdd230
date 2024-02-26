const modeButton = document.querySelector("#mode");
const main = document.querySelector("body");
const nav = document.querySelector(".topnav");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌜")) {
		main.style.background = "#214e34";
		main.style.color = "#dff8eb";
        nav.style.background = "#214e34"
        nav.style.color = "#dff8eb"
		modeButton.textContent = "🌞";
	} else {
		main.style.background = "#dff8eb";
		main.style.color = "#3f4b64";
		modeButton.textContent = "🌜";
	}
});