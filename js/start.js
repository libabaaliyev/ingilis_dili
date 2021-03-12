$(document).ready(function()
{
	let starting;
	let lang = 'az';

	/*words 			= getDatas('words');
	notifications 	= getDatas('notifications');
	menu 			= getDatas('menu');
	helper 			= getDatas('helper');
	categories 		= getDatas('categories');
	training 		= getDatas('training');
	weekplan 		= getDatas('weekplan');*/
	const appName_ 	= 
	{
		"az" 	: "İngilis dili dərsləri",
		"tr"	: "İngilizce Eğitim",
		"en" 	: "English learning",
		"ru" 	: "Английское Oбразованиеу"
	}

	date  			= new Date();	
	currentYear		= date.getFullYear();
	currentMonth 	= date.getMonth();

	const calendar = 
	[
		{
			"name" : "Jan",
			"days": {

					},
			"count": 31
		},
		{
			"name" : "Feb",
			"days": {

					},
			"count": 28
		},
		{
			"name" : "Mar",
			"days": {

					},
			"count": 31
		},
		{
			"name" : "Apr",
			"days": {

					},
			"count": 30
		},
		{
			"name" : "May",
			"days": {

					},
			"count": 31
		},
		{
			"name" : "Jun",
			"days": {

					},
			"count": 30
		},
		{
			"name" : "Jul",
			"days": {

					},
			"count": 31
		},
		{
			"name" : "Aug",
			"days": {

					},
			"count": 31
		},
		{
			"name" : "Sep",
			"days": {

					},
			"count": 30
		},
		{
			"name" : "Oct",
			"days": {

					},
			"count": 31
		},
		{
			"name" : "Nov",
			"days": {

					},
			"count": 30
		},
		{
			"name" : "Dec",
			"days": {

					},
			"count": 31
		}

	]

	if(localStorage.getItem("lang") === null){
		lang 		= 'az';
		starting 	= false;
	}
	else{
		lang 		= JSON.parse(localStorage.lang);
		starting 	= true;
	}
	
	start();
	
	function start()
	{
		
		appName 		= appName_[lang];

		console.log(appName)

		$(".app-name")	.html(appName);		
		$("title") 		.html(appName);

		if(!starting)
		{
			if(!calendar[currentMonth]['days'][currentYear]){
				calendar[currentMonth]['days'][currentYear] = {};
			}

			localStorage.calendar 		= JSON.stringify(calendar);
			
			const { value: language } 	= Swal.fire({
			  title: 				'Select language',
			  input: 				'select',
			  backdrop: 			true,
			  allowOutsideClick: 	false,
			  allowEscapeKey: 		false,
			  inputOptions: {
			    
			      az: 'Azərbaycan dili',
			      tr: 'Türkçe',
			      ru: 'Pусский'
			    
			  },
			  inputPlaceholder: 'Select anyone',
			  showCancelButton: false,
			  inputValidator: (value) => {
			    return new Promise((resolve) => {
			      if (value) {
			      	localStorage.lang 		= JSON.stringify(value);
			      	localStorage.sound 		= JSON.stringify("open");
			      	localStorage.alarm 		= JSON.stringify("analog-alarm-clock.wav");
			      	lang 					= localStorage.lang;
			      	
			      	appName 				= appName_[lang];

			      	$(".app-name").html(appName);
			      	$("title").html(appName);
			      	
			      	setTimeout(function()
					{
						Swal.close();
						window.location = "main.html";
					},500);


			      } else {

			        resolve('You must be select');
			      }
			    })
			  }
			});
		}
		else
		{
			setTimeout(function()
			{
				window.location = "main.html";
			},2000);
		}
	}

	function getDatas(event)
	{
		$.getJSON("json/"+event+".json", function(data){			
			localStorage.setItem(event,JSON.stringify(data));			
		});

		return JSON.parse(localStorage.getItem(event));	
	}

});