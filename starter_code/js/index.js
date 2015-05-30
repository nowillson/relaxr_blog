console.log("hello world")

$(document).ready();

$("#readLess1").hide();
$("#readLess2").hide();
$("#sidePost").hide();
$(".postContent").hide();



$("#readMore1").click(showPost1);

function showPost1() {
	$("#firstPost").slideDown();
	$("#readMore1").hide();
	$("#readLess1").show();
}

$("#readMore2").click(showPost2);

function showPost2() {
	$("#secondPost").slideDown();
	$("#readMore2").hide();
	$("#readLess2").show();
}

$("#readLess1").click(closePost1);

function closePost1() {
	$("#firstPost").slideUp();
	$("#readLess1").hide();
	$("#readMore1").show();

}

$("#readLess2").click(closePost2);

function closePost2() {
	$("#secondPost").slideUp();
	$("#readLess2").hide();
	$("#readMore2").show();

}

$("#learnMore").click(revealSidePost);

function revealSidePost() {
	$("#sidePost").slideDown();
	$("#learnMore").hide();
}


