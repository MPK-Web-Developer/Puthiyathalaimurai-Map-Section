let sections = document.querySelectorAll(".map-container");
let currentSectionIndex = 0;

document.addEventListener("wheel", (e) => {
	if (e.wheelDeltaY > 0 && currentSectionIndex - 1 >= 0) {
		// Scroll up
		sections[currentSectionIndex].classList.remove("map-active");
		currentSectionIndex--;
		sections[currentSectionIndex].classList.add("map-active");
	} else if (e.wheelDeltaY < 0 && currentSectionIndex + 1 < sections.length) {
		// Scroll down
		sections[currentSectionIndex].classList.remove("map-active");
		currentSectionIndex++;
		sections[currentSectionIndex].classList.add("map-active");
	}
});
