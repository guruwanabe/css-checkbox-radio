/**
 * User: bogdan.stanciu
 * Date: 9/22/14
 * Time: 11:18 AM
 */

/* ========================================================================
 * JS needed for browser compatibility
 * ======================================================================== */

( function( $ ) {

	window.app = {

		ready: function() {
			app.customInputs();
		},
        customInputs: function() {
            var inputs = $('.custom-checkbox input, .custom-radio input');
            inputs.on('change', function(){
                var ref = $(this),
                    wrapper = ref.parent();
                if(ref.is(':checked')) wrapper.addClass('checked');
                else wrapper.removeClass('checked');
            });
            inputs.trigger('change');

        }

	};
	$(window).on('ready', app.ready);
	$(window).on('load', app.load);
	$(window).on('resize', app.resize);
} )( jQuery );