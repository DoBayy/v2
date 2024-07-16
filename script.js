let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {
	setTimeout(() => {
		logoSpan.forEach((span, idx) => {
			setTimeout(() => {
				span.classList.add("active");
			}, (idx + 1) * 400);
		});

		setTimeout(() => {
			logoSpan.forEach((span, idx) => {
				setTimeout(() => {
					span.classList.remove("active");
					span.classList.add("fade");
				}, (idx + 1) * 50);
			});
		}, 2000);

		setTimeout(() => {
			intro.style.top = "-100vh";
		}, 2300);
	});
});

var menu = document.querySelector("#nav i");
var cross = document.querySelector("#full i");

var tl = gsap.timeline();

tl.to("#full", {
	right: 0,
	duration: 0.4,
});
tl.from("#full h4", {
	x: 100,
	duration: 0.5,
	stagger: 0.2,
	opacity: 0,
});
tl.from("#full i", {
	opacity: 0,
});

tl.pause();

menu.addEventListener("click", function () {
	tl.play();
});
cross.addEventListener("click", function () {
	tl.reverse();
});

var main = document.querySelector("#container");
var cursor = document.querySelector("#cursor");
main.addEventListener("mousemove", function (dets) {
	gsap.to(cursor, {
		x: dets.x,
		y: dets.y,
		duration: 1,
		ease: "back.out",
	});
});
gsap.to("#page2 h1", {
	transform: "translateX(-120%)",
	scrollTrigger: {
		trigger: "#page2",
		scroller: "body",
		start: "top 60%",
		end: "top -100%",
		scrub: 2,
	},
});
gsap.from("#main h1", {
	y: 300,
	opacity: 0,
	scrub: 2,
	delay: 2.3,
	duration: 0.5,
	stagger: 0.08,
});
gsap.from("#page3 h1", {
	y: 100, // Start from above (-100px)
	opacity: 0,
	scrub: 2,
	duration: 1,
	stagger: 0.2,
	scrollTrigger: {
		trigger: "#build",
		scrcub: 5,
	},
	ease: "power3.out", // Optional easing function
});
const text = document.querySelector(".text p");
text.innerHTML = text.innerText
	.split("")
	.map(
		(char, i) => `<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
	)
	.join("");

const animateItem1 = document.querySelector(".animate1");
const hoverAnimation1 = gsap.to(animateItem1, {
	x: 50,
	scrub: 2,
	duration: 0.5,
	paused: true,
	ease: "power2.inOut",
});
animateItem1.addEventListener("mouseenter", () => {
	hoverAnimation1.play();
});
animateItem1.addEventListener("mouseleave", () => {
	hoverAnimation1.reverse();
});
const animateItem2 = document.querySelector(".animate2");
const hoverAnimation2 = gsap.to(animateItem2, {
	x: 50,
	scrub: 2,
	duration: 0.5,
	paused: true,
	ease: "power2.inOut",
});
animateItem2.addEventListener("mouseenter", () => {
	hoverAnimation2.play();
});
animateItem2.addEventListener("mouseleave", () => {
	hoverAnimation2.reverse();
});
const animateItem3 = document.querySelector(".animate3");
const hoverAnimation3 = gsap.to(animateItem3, {
	x: 50,
	scrub: 2,
	duration: 0.5,
	paused: true,
	ease: "power2.inOut",
});
animateItem3.addEventListener("mouseenter", () => {
	hoverAnimation3.play();
});
animateItem3.addEventListener("mouseleave", () => {
	hoverAnimation3.reverse();
});
const animateItem4 = document.querySelector(".animate4");
const hoverAnimation4 = gsap.to(animateItem4, {
	x: 50,
	scrub: 2,
	duration: 0.5,
	paused: true,
	ease: "power2.inOut",
});
animateItem4.addEventListener("mouseenter", () => {
	hoverAnimation4.play();
});
animateItem4.addEventListener("mouseleave", () => {
	hoverAnimation4.reverse();
});

const animateItem5 = document.querySelector(".animate5");
const hoverAnimation5 = gsap.to(animateItem5, {
	x: 50,
	scrub: 2,
	duration: 0.5,
	paused: true,
	ease: "power2.inOut",
});
animateItem5.addEventListener("mouseenter", () => {
	hoverAnimation5.play();
});
animateItem5.addEventListener("mouseleave", () => {
	hoverAnimation5.reverse();
});
gsap.to(".page7 span", {
	y: 0,
	opacity: 1,
	duration: 1,
	stagger: 1,
	scrollTrigger: {
		trigger: ".page7 h1",
		scrub: 2,
	},
});
$(document).ready(function () {
	$(".btn").on("mouseenter", function (e) {
		var parentOffset = $(this).offset(),
			relX = e.pageX - parentOffset.left,
			relY = e.pageY - parentOffset.top;
		$(this).find("span").css({
			top: relY,
			left: relX,
		});
	});
});
gsap.from(".right1", {
	x: 200,
	opacity: 0,
	ease: "power2.inOut",
	scrollTrigger: {
		trigger: ".right1",
		scrub: true,
		stagger: 0.8,
	},
});
gsap.from(".right2", {
	x: 200,
	opacity: 0,
	ease: "power2.inOut",
	scrollTrigger: {
		trigger: ".right2",
		scrub: true,
		stagger: 0.8,
	},
});
gsap.from(".right3", {
	x: 200,
	opacity: 0,
	ease: "power2.inOut",
	scrollTrigger: {
		trigger: ".right3",
		scrub: true,
		stagger: 0.8,
	},
});
gsap.from(".left1", {
	x: -200,
	opacity: 0,
	ease: "power2.inOut",
	scrollTrigger: {
		trigger: ".left1",
		scrub: true,
		stagger: 0.8,
	},
});
gsap.from(".left2", {
	x: -200,
	opacity: 0,
	ease: "power2.inOut",
	scrollTrigger: {
		trigger: ".left2",
		scrub: true,
		stagger: 0.8,
	},
});
jQuery(function ($) {
	$(document).ready(function () {
		var animatedHeadline = new Letterize({
			targets: "#animatedHeadline",
		});

		function resetHeadline() {
			var originalText = "Interested?";
			document.querySelector("#animatedHeadline").innerHTML = originalText;
			animatedHeadline = new Letterize({
				targets: "#animatedHeadline",
			});
		}

		function animateHeadline() {
			animatedHeadline.list.forEach(function (letter) {
				letter.elasticity = 1200;
			});

			var animation = anime.timeline({
				targets: "#animatedHeadline span",
				delay: anime.stagger(50, { start: 500 }),
				loop: false,
			});

			animation
				.add({
					translateY: ["100%", "0%"],
					duration: 1000,
					easing: "easeOutExpo",
				})
				.add({
					delay: 500,
					duration: 1000,
					easing: "easeInOutCirc",
				});
		}

		var observerOptions = {
			root: null,
			rootMargin: "0px",
			threshold: 0,
		};

		function observerCallback(entries, observer) {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					resetHeadline();
					animateHeadline();
				}
			});
		}

		var headlineObserver = new IntersectionObserver(
			observerCallback,
			observerOptions
		);
		var targetElement = document.querySelector("#animatedHeadline");
		headlineObserver.observe(targetElement);
	});
});
