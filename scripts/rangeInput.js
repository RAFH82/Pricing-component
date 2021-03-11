// Logic for Range Input styling
for (let e of document.querySelectorAll(
	'input[type="range"].slider-progress'
)) {
	e.style.setProperty("--value", e.value);
	e.style.setProperty("--min", e.min == "" ? "1" : e.min);
	e.style.setProperty("--max", e.max == "" ? "5" : e.max);
	e.addEventListener("input", () => e.style.setProperty("--value", e.value));
}

// Logic for changing plans based on range input
const input = document.querySelector("#rangeInput");
const views = document.querySelector("#views");
const price = document.querySelector("#price");
const annually = document.querySelector("#annually");

const plans = [
	{ views: "10K", price: (8.0).toFixed(2), discount: (6.0).toFixed(2) },
	{ views: "50K", price: (12.0).toFixed(2), discount: (9.0).toFixed(2) },
	{ views: "100K", price: (16.0).toFixed(2), discount: (12.0).toFixed(2) },
	{ views: "500K", price: (24.0).toFixed(2), discount: (18.0).toFixed(2) },
	{ views: "1M", price: (36.0).toFixed(2), discount: (27.0).toFixed(2) },
];

input.oninput = function () {
	views.innerHTML = plans[this.value].views;

	annually.checked
		? (price.innerHTML = plans[this.value].discount)
		: (price.innerHTML = plans[this.value].price);
};

// Listen for changes on price toggle
document.addEventListener("change", changePrice);

function changePrice(event) {
	if (!event.target.closest(".switch")) return;
	input.oninput();
}
