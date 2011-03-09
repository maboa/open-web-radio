$(document).ready(function(){   
	
	
	function getArcPc(pageX, pageY, elem) { 
		var	self	= elem,
			offset	= self.offset(),
			x	= pageX - offset.left - self.width()/2,
			y	= pageY - offset.top - self.height()/2,
			a	= Math.atan2(y,x);  
			
		if (a > -1*Math.PI && a < -0.5*Math.PI) {
		   a = 2*Math.PI+a; 
		} 

		// a is now value between -0.5PI and 1.5PI 
		// ready to be normalized and applied   			
		
		var pc = (a + Math.PI/2) / 2*Math.PI * 10;   
		   
		return pc;
	} 
	
	function spinDial(event,self) {
		var pc = getArcPc(event.position.x,event.position.y,self);       
		var degs = pc * 3.6+"deg"; 
		self.css({rotate: degs});  
		return(pc);
	}
	
	function spinTuning(event,self) {
		var pc = getArcPc(event.position.x,event.position.y,self);       
		var degs = pc * 3.6+"deg"; 
		self.css({rotate: degs});  
		$('#dialer').css('left',((pc*8.8)+60)+'px');		
	}
	
	$('#tuning').grab({
		onstart: function(){     
			// dragging = true;
		}, onmove: function(event){
			var pc = spinDial(event,$(this)); 
			$('#dialer').css('left',((pc*8.8)+60)+'px');     
		}, onfinish: function(event){
           // do your funky thang here ...
		}
	});   
	
	$('#volume').grab({
		onstart: function(){     
			//dragging = true;
		}, onmove: function(event){
			spinDial(event,$(this));   
		}
	}); 
	
	 
});