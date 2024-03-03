const pass = document.querySelector("#password");
const confirm = document.querySelector("#confirm-pass");
const message = document.querySelector("#form-message");

confirm.addEventListener("focusout", checkSame);

function checkSame() {
	if (pass.value !== confirm.value) {
		message.textContent = "❗Key Phrases DO NOT MATCH!";
		message.style.visibility = "show";
		confirm.style.backgroundColor = "#fff0f3";
		confirm.value = "";
		confirm.focus();
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}