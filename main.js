$("#div1").hide();
$("#div2").hide();
$("#div3").hide();
$("#div11").hide();
$("#div12").hide();
$("#div13").hide();


//PRIMERA FILA

$("#1").click(function(){
	$("#div1").show();
	$("#div2").hide();
	$("#div3").hide();


})
$("#2").click(function(){
	$("#div2").show();
	$("#div1").hide();
	$("#div3").hide();
	
	$("#div11").hide();
	$("#div12").hide();
	$("#div13").hide();

// 	$("#111").hide();
// 	$("#121").hide();
// 	$("#131").hide();
})
$("#3").click(function(){
	$("#div3").show();
	$("#div1").hide();
	$("#div2").hide();

	$("#div11").hide();
	$("#div12").hide();
	$("#div13").hide();

	// $("#111").hide();
	// $("#121").hide();
	// $("#131").hide();
})

//SEGUNDA FILA

$("#11").click(function() {
	$("#div11").show();
	$("#div12").hide();
	$("#div13").hide();
})
$("#12").click(function() {
	$("#div12").show();
	$("#div11").hide();
	$("#div13").hide();
})
$("#13").click(function() {
	$("#div13").show();
	$("#div12").hide();
	$("#div11").hide();
})

//TERCER FILA
//parte 1

$("#111").click(function() {
	$("#111").toggleClass("btn-default");
	$("#111").toggleClass("btn-success");
})
$("#112").click(function() {
	$("#122").toggleClass("btn-default");
	$("#112").toggleClass("btn-success");
})
$("#113").click(function() {
	$("#113").toggleClass("btn-default");
	$("#113").toggleClass("btn-success");
})

//parte 2


$("#121").click(function() {
	$("#121").toggleClass("btn-default");
	$("#121").toggleClass("btn-success");
})
$("#122").click(function() {
	$("#122").toggleClass("btn-default");
	$("#122").toggleClass("btn-success");
})
$("#123").click(function() {
	$("#123").toggleClass("btn-default");
	$("#123").toggleClass("btn-success");
})

//parte 3


$("#131").click(function() {
	$("#131").toggleClass("btn-default");
	$("#131").toggleClass("btn-success");
})
$("#132").click(function() {
	$("#132").toggleClass("btn-default");
	$("#132").toggleClass("btn-success");
})
$("#133").click(function() {
	$("#133").toggleClass("btn-default");
	$("#133").toggleClass("btn-success");
})
