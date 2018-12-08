$(document).ready(function(){
	// catalogue filters
	$('#selBrand').multipleSelect({
		placeholder : "Select Brand",
		single: true,  
		filter: true ,
		onOpen: function() {  
			$('#brand_tab .ms-parent .ms-drop .ms-search input').focus();
			$("#brand_tab ul").getNiceScroll()[0].show().onResize();
		}
	});

	$('#selClass').multipleSelect({
		placeholder : "Select Class", 
		filter: true ,
		onOpen: function() {  
			$('#class_tab .ms-parent .ms-drop .ms-search input').focus();
			$("#class_tab ul").getNiceScroll()[0].show().onResize();
		}
	});

	$('#selModel').multipleSelect({
		placeholder : "Select Model", 
		filter: true,
		selectAll: false,
		onOpen: function() {  
			$('#model_tab .ms-parent .ms-drop .ms-search input').focus();
			$("#model_tab ul").getNiceScroll()[0].show().onResize();
		}
	});

	$('#selEngine').multipleSelect({
		placeholder : "Engine", 
		filter: true,
		onOpen: function() {
			$("#engine_tab ul").getNiceScroll()[0].show().onResize();
		}  
	});  
	$('#selYear').multipleSelect({
		placeholder : "Year", 
		filter: true,
		onOpen: function() {
			$("#year_tab ul").getNiceScroll()[0].show().onResize();
		}
	});

	$('#selBody').multipleSelect({
		placeholder : "Body",
		filter: true ,
		onOpen: function() {
			$("#body_tab ul").getNiceScroll()[0].show().onResize();
		}
	}); 

	var niceScroll2 = $('.tab-content ul').niceScroll({
		railpadding: {top: 15, right: 0, left: 0, bottom: 15}
	});

})