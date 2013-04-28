$(document).ready(function(){


	$(".timeline-item .learn-more").click(function(){
	
	  $(this).next("article").slideToggle("slow");
	  $(this).toggleClass("active");
	
	});

});