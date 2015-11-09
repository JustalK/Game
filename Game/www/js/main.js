$(function(){
	  $( "#test" ).bind( "tap", tapHandler );
	 
	  function tapHandler( event ){
	    $( event.target ).addClass( "tap" );
		$("#test").css("background","#555555");
	  }
	});