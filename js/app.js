$(document).ready(function(){
	$(".begin").click(function() {
		$(".welcome").hide();
		$("#first-question").show();
	});
	$("#first-question > ul").click(function() {
		$("#first-question").hide();
		$("#first").show();
	});
	$("#first > #next").click(function() {
		$("#first").hide();
		$("#second-question").show();
	});
	$("#second-question > ul").click(function() {
		$("#second-question").hide();
		$("#second").show();
	});
	$("#second > #next").click(function() {
		$("#second").hide();
		$("#third-question").show();
	});
	$("#third-question > ul").click(function() {
		$("#third-question").hide();
		$("#third").show();
	});
	$("#third > #next").click(function() {
		$("#third").hide();
		$("#fourth-question").show();
	});
	$("#fourth-question > ul").click(function() {
		$("#fourth-question").hide();
		$("#fourth").show();
	});
	$("#fourth > #next").click(function() {
		$("#fourth").hide();
		$("#fifth-question").show();
	});
	$("#fifth-question > ul").click(function() {
		$("#fifth-question").hide();
		$("#fifth").show();
	});
	$("#fifth > #calculate").click(function() {
		$("#fifth").hide();
		$(".try-again").show();
	});
	$("#restart").click(function() {
		$(".try-again").hide();
		$("#first-question").show();
	});
});