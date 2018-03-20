function createBounceAnimations(el) {
	// const bounceTL = new TimelineLite();
	el.bounceTL = new TimelineLite();
	el.bounceTL.pause();
	const spans = el.querySelectorAll('span');
	// bounceTL.staggerFrom('.js-anim-bounce span', 2, {
	// 	delay: 1, 
	// 	y: "-40%", 
	// 	opacity: 0, 
	// 	ease: Elastic.easeOut.config(1, 0.2)
	// }, 0.05);
	el.bounceTL.staggerFrom(spans, 1.5, {
		delay: 0, 
		y: "-50%", 
		opacity: 0, 
		ease: Elastic.easeOut.config(1, 0.3)
	}, 0.05);
}

function splitText(elements) {
	elements.forEach(function(el) {
		const text = el.innerHTML;
		el.innerHTML = text.split('').map(function(tSpan) {
			if (tSpan === ' ') {
				tSpan = '&nbsp;';
			}
			return `<span>${tSpan}</span>`
		}).join('');
	});
}

function init() {
	const splitEls = document.querySelectorAll('.js-split');
	const bounceEls = document.querySelectorAll('.js-anim-bounce');

	splitText(splitEls);

	bounceEls.forEach(function(el) {
		createBounceAnimations(el);
	});

	Reveal.addEventListener('fragmentshown', function(event) {
		if (event.fragment.classList.contains('js-anim-bounce')) {
			event.fragment.bounceTL.play();
		}
	});
}

init();