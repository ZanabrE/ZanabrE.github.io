//This document will have jQuery and JavaScript.
function load(){
	$("document").ready(function(){
		$('#header').hide();
		$('#header').show('slide', {direction: "up"},2000);
		
		$('#intro').hide();
		$('#intro').show('slide', {direction: "up"},2000);
		
		$('#about').hide();
		$('#about').show('slide', {direction: "up"},2000);
		
		$('#skills').hide();
		$('#skills').show('slide', {direction: "up"},2000);
		
		$('#work').hide();
		$('#work').show('slide', {direction: "up"},2000);
		
		$('#contact').hide();
		$('#contact').show('slide', {direction: "up"},2000);
		
		$('.button').hide();
		$('.button').show('slide', {direction: "up"},2000);
		
		$('.copyright').hide();
		$('.copyright').show('slide', {direction: "up"},2000);
	});

	//scroll to top
	const scrollup = document.querySelector("#scroll-up");

	scrollup.addEventListener("click", () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	});

	//navigation accordion selections.
	const acordion = document.querySelector("#acor-menu");
	const ul = document.querySelector("nav ul");
	const nav = document.querySelector("nav");

	acordion.addEventListener("click", () => {
		ul.classList.toggle("show");
	});

	//Navigation links.
	const description = document.querySelector(".description");

	description.forEach((description) => {
		description.addEventListener("click", () => {
			ul.classList.remove("show");
		})
	});
}