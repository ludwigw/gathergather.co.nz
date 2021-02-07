$(document).ready(function(){
	// Responsive nav
	( function() {
		var nav = $( '#primary-navigation' ), button, menu;
		if ( ! nav ) {
				return;
		}
		button = nav.find( '.menu-toggle' );
		if ( ! button ) {
				return;
		}
		// Hide button if menu is missing or empty.
		menu = nav.find( '.nav-menu' );
		if ( ! menu || ! menu.children().length ) {
				button.hide();
				return;
		}
		$( '.menu-toggle' ).on( 'click.gather', function() {
				nav.toggleClass( 'toggled-on' );
		} );
	} )();

});