$(document).ready(function() {

	$('.mobile-nav-close-icon').hide();
	$('.mobile-nav').click( function() {
		$('.page-top nav').toggle(200);
		$('.mobile-nav-close-icon').toggle(200);
		$('.mobile-nav-icon').toggle(200);
	});
});