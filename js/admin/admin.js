jQuery(document).ready(function () {
	jQuery('.save-lightbox-options').click(function(){
		alert("Lightbox Settings are disabled in free version. If you need those functionalityes, you need to buy the commercial version.");
		return false;
	});
	jQuery('#light_box_size_fix').change(function(){
		jQuery(this).val()
		if(jQuery(this).is(':checked')){
			jQuery('.options-block .not-fixed-size').css({'display':'none'});
			jQuery('.options-block .fixed-size').css({'display':'block'});
		}else {
			jQuery('.options-block .fixed-size').css({'display':'none'});
			jQuery('.options-block .not-fixed-size').css({'display':'block'});
		}
	});
	jQuery('#arrows-type input[name="params[slider_navigation_type]"]').change(function(){
		jQuery(this).parents('ul').find('li.active').removeClass('active');
		jQuery(this).parents('li').addClass('active');
	});
		
	$('input[data-slider="true"]').bind("slider:changed", function (event, data) {
		 $(this).parent().find('span').html(parseInt(data.value)+"%");
		 $(this).val(parseInt(data.value));
	});	
	
	
	jQuery('#view-style-block ul li[data-id="'+jQuery('#light_box_style option[selected="selected"]').val()+'"]').addClass('active');
	
	jQuery('#light_box_style').change(function(){
		var strtr = jQuery(this).val();
		jQuery('#view-style-block ul li').removeClass('active');
		jQuery('#view-style-block ul li[data-id="'+strtr+'"]').addClass('active');
	});
});
