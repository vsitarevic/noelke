document.addEventListener( 'DOMContentLoaded', function () {

  //Mobile Nav Menu button functionality
	document.getElementById("mobileMenuBtn").addEventListener("click", () => {
	  document.getElementById("mobileMenu").classList.toggle("hidden");
	});

  //Mobile Nav Menu "Themen" arrow functionality
  document.getElementById("mobileThemen").addEventListener("click", () => {
    toogleArrow(document.getElementById("mobileThemenArrow"))
    document.getElementById("mobileThemenContent").classList.toggle("hidden")
  })

  //Nav Menu "Themen" arrow functionality
  document.getElementById("themen").onmouseover = function() { toogleArrow(document.getElementById("themenArrow")) }
  document.getElementById("themen").onmouseout = function() { toogleArrow(document.getElementById("themenArrow")) }


  //Initializing Splide sliders
  new Splide( '#image-slider').mount();
  new Splide( '#image-slider', {
    'arrowPath': 'M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M15.4,16.6L10.8,12L15.4,7.4L14,6L8,12L14,18L15.4,16.6Z',
  } ).mount();
});

// CUSTOM FUNCTIONS
function toogleArrow (arrow) {
  arrow.innerHTML == "expand_more" ? arrow.innerHTML = "expand_less" : arrow.innerHTML = "expand_more"
}

