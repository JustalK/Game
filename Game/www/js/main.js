$(function(){
	  var up;
	  var lose;
	  var game=false;
	  var ready=true;
	  $("body").bind( "vmousedown", tapHandler );
	  $("#lose").bind( "vmousedown", retry );
	  var windowHeight = $(window).height();
	  
	  var player_top;
	  var player_bottom;
	  var player_left;
	  var player_right;
	  
	  function tapHandler( event ){
		  if(ready) {
			  if(!game) {
				  initGame();
			  } else {
				  if(up) {
					  up=false;
				  } else {
					  up=true;
				  }
			  }			  
		  } else {
			  $(".start").css("display","block");
			  $(".start").css("opacity","1");
			  ready = true;
		  }
	  }
	  

	  function initGame() {
		  game=true;
		  lose=false;
		  up=true;
		  previous = (new Date()).getTime();
		  world();
		  $(".start").animate({"opacity":"0"},100,function() {
			  $(".start").css("display","none");
			  loop();
		  });
	  }
	  
	  var obs_1;
	  var obs_2;
	  function world() {
		  obs_1 = $('<div></div>');
		  obs_1.addClass("elem");
		  obs_1.css("left",$(window).width()+200+"px");
		  $("body").append( $(obs_1) );  
		  
		  obs_2 = $('<div></div>');
		  obs_2.addClass("elem");
		  obs_2.css("bottom","0");
		  obs_2.css("left",$(window).width()+200+"px");
		  $("body").append( $(obs_2) );  		  
	  }
	  
	  var current;
	  var previous;
	  var elapsed = 0.0;
	  var lag = 0.0;
	  var MS_PER_UPDATE = 10;
	  
	  var x = 0;
	  
	  var delay;
	  var speed = 5;
	  var bottom;
	  function loop() {
		  current = (new Date()).getTime();
		  elapsed = current - previous;
		  previous = current;
		  lag += elapsed;
		  
		  while(lag >= MS_PER_UPDATE) {
			  update();
			  lag -= MS_PER_UPDATE;
		  }
		  if(!lose) {
			  render();	  
			  window.setTimeout(loop,0);			  
		  }
	  }
	  
	  function update() {
		  bottom = $(window).height() - $("#cube").offset().top - $("#cube").height();
		  if(bottom<=35 || bottom>=$(window).height() - 50 - 35) {
			  lose = true;
			  $("#lose").css("display","block");
		  } else {
			  if(up) {
				  bottom += speed;
			  } else {
				  bottom -=speed;
			  }			  
		  }
	  }
	  
	  function render() {
		  $(obs_1).css("left",$(obs_1).position().left-1);
		  $(obs_2).css("left",$(obs_2).position().left-1);
		  if(up) {
			  $("#cube").attr("src","img/1.png");
			  $("#cube").css("bottom",bottom);
		  } else {
			  $("#cube").attr("src","img/2.png");
			  $("#cube").css("bottom",bottom);
		  }
	  }
	  
	  function retry(event) {
		  if(lose) {
			  ready = false;
			  up=true;
			  lose=false;	
			  game=false;
			  obs_1.remove();
			  obs_2.remove();
			  $("#lose").css("display","none"); 
			  $("#cube").css("bottom","50%");
		  }
	  }
	  
	  function gameOver() {
		  lose=true;
		  $("#lose").css("opacity","1");
	  }
});