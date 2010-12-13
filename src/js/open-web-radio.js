$(document).ready(function(){
	$('#tuning').tinycircleslider({ 
		radius: 70,
		callback: function(element, index){     
			alert('test');
			console.log(element, index);
		}
	});     
});