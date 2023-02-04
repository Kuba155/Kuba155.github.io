$(window).ready(Function(){
	// onload
	start();
	update();
});

class Screen{
	
	init(cnv){
		this.canvas = cnv;
		this.ctx = this.canvas.getContext("2d");
		
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerWidth;
	}
	
	w(){
		
		return this.canvas.width;
		
	}
	
	h(){
		
		return this.canvas.height;
	}
	
	
}

  var s = new Screen
  function start(){
	  
	  
	  s.init(document.getElementById("game"));
	  
	  const w = 100;
	  const h = 100;
	  
	  s.ctx.fillRect(0, 0, w, h);
	  
  }
  
   function update(){
	   
	   
   }
