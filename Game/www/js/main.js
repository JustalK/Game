$(function(){
	  var way="up";
	  $( ".app" ).bind( "vmousedown", tapHandler );
	  var windowHeight = $(window).height();
	  
	  function tapHandler( event ){
		  if(way=="up") {
				way="down";
				$("#cube").attr("src","img/1.png");
				$("#cube").stop().animate({"bottom":windowHeight-50+"px"},800);
		  } else {
			  	way="up";
				$("#cube").attr("src","img/2.png");
				$("#cube").stop().animate({"bottom":"0"},800);
		  }
	  }
});