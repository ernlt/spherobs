jQuery(function($){

	$(window).load(function() {
		$("body").removeClass("preload");
	});

	$(".container").hide();
	$(".home").show();

	$('.creationsLink.disabled').click(function(e) {
		e.preventDefault();
		alert("click");
	});

	$(".homeCell:not(.creation)").click(function(){
		data = $(this).data("page");
		$(".homeTable").stop().slideUp(0);
		$(".container").hide();
		$(".container."+data).stop().slideDown(0);
		$("body").addClass("darken");
		$(".creationsLink").addClass("disabled");
	});
	
	$(".homeIcon:not(.creation)").click(function(){
		data = $(this).data("page");
		$(".homeTable").stop().slideUp(0);
		$(".container").hide();
		$(".container."+data).stop().slideDown(0);
		$("body").addClass("darken");
		$(".creationsLink").addClass("disabled");
	});

	$(".back").click(function(){
		$(".container").stop().slideUp(0);
		$(".homeTable").stop().slideDown(0);
		$("body").removeClass("darken");
		$(".creationsLink").removeClass("disabled");
	});
	
	
	$(".back").click(function(){
		$(".container").stop().slideUp(0);
		$(".homeTableIcon").stop().slideDown(0);
		$("body").removeClass("darken");
		$(".creationsLink").removeClass("disabled");
	});

	
});
