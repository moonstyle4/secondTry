jQuery (document).ready(function(){
	$('body').hide().fadeIn(2000); //плавное появления страницы
	
	$("#slider1").responsiveSlides({
        speed: 800
      });
	
	$(".right").boxLoader({
    direction:"x",
    position: "50%",
    effect: "fadeIn",
    duration: "1s",
    windowarea: "50%"
}); 
$(".left").boxLoader({
    direction:"x",
    position: "-50%",
    effect: "fadeIn",
    duration: "1s",
    windowarea: "50%"
}); 
$( "#accordion" ).accordion({
	animate: 500,
	active: 2
	
	});
	
});//ready