for (let e of document.querySelectorAll(
	'input[type="range"].slider-progress'
)) {
	e.style.setProperty("--value", e.value);
	e.style.setProperty("--min", e.min == "" ? "1" : e.min);
	e.style.setProperty("--max", e.max == "" ? "5" : e.max);
	e.addEventListener("input", () => e.style.setProperty("--value", e.value));
}

let pageViews = document.querySelector(".card__dynamicTextPageViews");
let sliderProgress = document.querySelector('input[value="3"].slider-progress');
let textPrice = document.querySelector(".card__dynamicTextPrice");
let billingType = document.querySelector("#billingType");

sliderProgress.addEventListener("change", (e) => {
	let billingChecked = billingType.checked;

	switch (Number(sliderProgress.value)) {
		case 1:
			pageViews.innerHTML = "10K PAGEVIEWS";
			textPrice.innerHTML = billingChecked ? "$6.00" : "$8.00";
			break;
		case 2:
			pageViews.innerHTML = "50K PAGEVIEWS";
			textPrice.innerHTML = billingChecked ? "$9.00" : "$12.00";
			break;
		case 3:
			pageViews.innerHTML = "100K PAGEVIEWS";
			textPrice.innerHTML = billingChecked ? "$12.00" : "$16.00";
			break;
		case 4:
			pageViews.innerHTML = "500K PAGEVIEWS";
			textPrice.innerHTML = billingChecked ? "$22.00" : "$24.00";
			break;
		case 5:
			pageViews.innerHTML = "1M PAGEVIEWS";
			textPrice.innerHTML = billingChecked ? "$27.00" : "$36.00";
			break;
		default:
			pageViews.innerHTML = "100K PAGEVIEWS";
			textPrice.innerHTML = "$16.00";
	}
});
