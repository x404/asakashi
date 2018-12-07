$(document).ready(function(){
	// catalogue filters
	$('#selBrand').multipleSelect({
		placeholder : "Select Brand",
		single: true,  
		filter: true ,
		width : 180,
		onOpen: function() {  
			$('#brand_tab .ms-parent .ms-drop .ms-search input').focus();
		}
	});

	$('#selClass').multipleSelect({
		placeholder : "Select Class", 
		filter: true ,
		width : 180,
		onOpen: function() {  
			$('#class_tab .ms-parent .ms-drop .ms-search input').focus();
		}
	});

	$('#selModel').multipleSelect({
		placeholder : "Select Model", 
		filter: true,
		selectAll: false,
		width : 180,
		onOpen: function() {  
			$('#model_tab .ms-parent .ms-drop .ms-search input').focus();
		}
	});

	$('#selEngine').multipleSelect({
		placeholder : "Engine", 
		width : 110,
		filter: true  
	});  
	$('#selYear').multipleSelect({
		placeholder : "Year", 
		width : 80,
		filter: true
	});

	$('#selBody').multipleSelect({
		placeholder : "Body",
		width : 155,
		filter: true 
	}); 

})