let imgEle = document.querySelector("img[src]");
imgEle.onclick = function () {
	if (this.getAttribute("src") === "img/mozilla.jpg") {
		this.setAttribute("src", "img/qq.png");
	} else {
		this.setAttribute("src", "img/mozilla.jpg");
	}
}

function setH1(name) {
	if (name) {
		document.querySelector("h1").textContent = "Hello " + name;
	} else {
		document.querySelector("h1").textContent = "Mozia酷毙了";
	}
}

let userName = localStorage.getItem('userName');
if (userName) {
	setH1(userName);
} 

document.getElementById("login-btn").onclick = function () {
	let userName = prompt("你的名称是?");
	if (userName) {
		localStorage.setItem("userName", userName);
		setH1(userName)
	}
}

document.getElementById("logout-btn").onclick = function () {
	localStorage.setItem("userName", "");
	setH1()
}
