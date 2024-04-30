const title = document.querySlector(".hello h1");

function handleTitleClick() {
	h1.classList.toggle("clicked");
}

title.addEventListener("click", handleTitleClick);