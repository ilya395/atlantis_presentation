jQuery(document).ready(function(){
	// Declare parallax on layers
	jQuery('.parallax-layer').parallax({
		mouseport: jQuery("#port")
	});
});

// включаем анимацию
window.onscroll = function() {	
	var specBlock = document.getElementById('specAnimateBlock');
	var coords = specBlock.getBoundingClientRect();
	//console.log(coords.top);
	var windowHeight = document.documentElement.clientHeight;
	if (coords.top < 400) {
		var tabletAnimateMove = document.getElementById('tabletAnimateMove');
		tabletAnimateMove.classList.add('slideInUp', 'show');
		var skyAnimateMove = document.getElementById('skyAnimateMove');
		skyAnimateMove.classList.add('slideInUp', 'show');
	}
}
/*.терпеть от гироскопа */
init ();

function init() {

	if (window.DeviceOrientationEvent) {

		console.log("DeviceOrientation is supported");

		window.addEventListener('deviceorientation', function(e){

			console.log(e.alpha, e.beta, e.gamma);

			console.log("a = "+e.alpha); 
			console.log("b = "+e.beta); 
			console.log("g = "+e.gamma);

			var a, b, g;
			document.getElementById("a").innerHTML = e.alpha;
			document.getElementById("b").innerHTML = e.beta;
			document.getElementById("g").innerHTML = e.gamma;

			var gyroMove = document.getElementById('skyAnimateMove');
			if ( e.beta > 0 ) {
				gyroMove.style.top = '100%';
			} else if ( e.beta < 0 ) {
				gyroMove.style.top = '95%';
			}

			if ( e.gamma > 0 ) {
				gyroMove.style.left = '100%';
			} else if ( e.gamma < 0 ) {
				gyroMove.style.left = '95%';
			}


		}, false);

	} else {

		console.log("Orientation is not supported")

	}
}

var inputmask = $('.phonemask');
    
    Inputmask.extendDefinitions({
      'f': {"validator": "[9\(\)\.\+/ ]"}
    });
    
 if (inputmask.length) {
  inputmask.inputmask({
   mask: "+7(f99)999-99-99"
  }); 
}
