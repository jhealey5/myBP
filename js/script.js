$(document).ready(function() {

	// no-js check
	$('html').removeClass('no-js').addClass('js');

	//browser detection
	var doc = document.documentElement;
	doc.setAttribute('data-useragent', navigator.userAgent);
  
}); // end doc.ready