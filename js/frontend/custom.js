			jQuery(document).ready(function(){
				jQuery("body a[href$='.jpg'], body a[href$='.png'], body a[href$='.gif']").addClass('group1');
				jQuery(".group1").colorbox({rel:'group1'});
				jQuery(".group2").colorbox({rel:'group2', transition:"fade"});
				jQuery(".group3").colorbox({rel:'group3', transition:"none", width:"75%", height:"75%"});
				jQuery(".group4").colorbox({rel:'group4', slideshow:true});
				jQuery(".ajax").colorbox();
				jQuery(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
				jQuery(".vimeo").colorbox({iframe:true, innerWidth:500, innerHeight:409});
				jQuery(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});
				jQuery(".inline").colorbox({inline:true, width:"50%"});
				jQuery(".callbacks").colorbox({
					onOpen:function(){ alert('onOpen: colorbox is about to open'); },
					onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
					onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
					onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
					onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
				});

				jQuery('.non-retina').colorbox({rel:'group5', transition:'none'})
				jQuery('.retina').colorbox({rel:'group5', transition:'none', retinaImage:true, retinaUrl:true});
				

				jQuery("#click").click(function(){ 
					jQuery('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
					return false;
				});
			});
		