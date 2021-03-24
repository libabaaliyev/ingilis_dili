$(document).ready(function()
{
	storage_	= "Base/storages";
	jQuery.ajaxSetup({async:false});

	include(storage_);
	include(phrases_);

	phrases_import();

	function include(loc,func,funcData,funcData_1)
	{
		$.getScript("js/"+loc+".js",function(e)
		{
			if(func)			
				window[func](funcData,funcData_1);
		});
	}
});