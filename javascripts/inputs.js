/**
 * User: bogdan.stanciu
 * Date: 9/22/14
 * Time: 11:18 AM
 */

/* ========================================================================
 * JS needed for browser compatibility
 * ======================================================================== */

( function( $ ) {

	 var app = {

		ready: function() {
			app.customInputs();
		},
        customInputs: function() {
            var inputs = $('.custom-checkbox input, .custom-radio input');
            inputs.on('change', function(){
                var input = $(this),
                    wrapper = input.parent();
                if(input.is(':checked')){
                    input.prop('checked', true);
                    wrapper.addClass('checked');
                }else{
                    input.prop('checked', false);
                    wrapper.removeClass('checked');
                } 
            });
            
            inputs.each(function(){
                var input = $(this),
                    wrapper = input.parent().parent();
                if(input.is(':disabled')){
                    wrapper.addClass('disabled')
                }
            });

            inputs.trigger('change');
            
        }
	};

	$(window).on('ready', app.ready);
    
} )( jQuery );