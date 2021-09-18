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

  // How many logos should be displayed for different type of screens //
  // This code only works on refresh - this should not be a problem for users //
  // For testing on different resolutions please refresh to see the results //
  if (window.screen.width >= 900) {
    new Splide( '#logos', {
      type: 'loop',
      arrows: false,
      pagination: false,
      perPage: '4',
      trimSpace: false,
      autoplay: true,
      rewindSpeed: 1500
    } ).mount();
  }
  else if (window.screen.width >= 425) {
    new Splide( '#logos', {
      type: 'loop',
      arrows: false,
      pagination: false,
      perPage: '2',
      trimSpace: false,
      autoplay: true,
      rewindSpeed: 1500
    } ).mount();
  }
  else{
    new Splide( '#logos', {
      type: 'loop',
      arrows: false,
      pagination: false,
      perPage: '1',
      trimSpace: false,
      autoplay: true,
      rewindSpeed: 1500
    } ).mount();
  }


});

// CUSTOM FUNCTIONS
function toogleArrow (arrow) {
  arrow.innerHTML == "expand_more" ? arrow.innerHTML = "expand_less" : arrow.innerHTML = "expand_more"
}

