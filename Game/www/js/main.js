$(function(){
	  var up=true;
	  var lose=false;
	  $(".app").bind( "vmousedown", tapHandler );
	  $("#lose").bind( "vmousedown", retry );
	  var windowHeight = $(window).height();
	  
	  function tapHandler( event ){
		  if(!lose) {
			  if(up) {
					up=false;
					$("#cube").attr("src","img/1.png");
					$("#cube").stop().animate({"bottom":windowHeight-50-35+"px"},700,function() {
						gameOver();
					});
			  } else {
				  	up=true;
					$("#cube").attr("src","img/2.png");
					$("#cube").stop().animate({"bottom":"35px"},700,function() {
						gameOver();
					});
			  }
		  }
	  }
	  
	  function retry(event) {
		  if(lose) {
			  var up=true;
			  lose=false;		
			  $("#lose").css("opacity","0");  
			  $("#cube").css("bottom","50%");
		  }
	  }
	  
	  function gameOver() {
		  lose=true;
		  $("#lose").css("opacity","1");
	  }
});