$('.counter').countUp();

$(document).ready(function(){
    
    // FADE SCROLL
    AOS.init();

    // SLICK CAROUSEL
    $('.slider').slick({
      arrows: false,
      autoplay: true,
      dots: true,
      infinite: true,
  });






});


// SERVICE CARDS

// SERVICE CARD 1
$("#serviceCard1").hover(function() {
    $(".fa-landmark").css("background-color", "#FC5E28");
    $(".fa-landmark").css("color", "#ffffff");
    $("#serviceBtn1").css("background-color", "#FC5E28");
}, function(){
    $(".fa-landmark").css("background-color", "#ffffff");
    $(".fa-landmark").css("color", "#FC5E28");
    $("#serviceBtn1").css("background-color", "#040E26");
});


// SERVICE CARD 2
$("#serviceCard2").hover(function() {
    $(".fa-cog").css("background-color", "#FC5E28");
    $(".fa-cog").css("color", "#ffffff");
    $("#serviceBtn2").css("background-color", "#FC5E28");
}, function(){
    $(".fa-cog").css("background-color", "#ffffff");
    $(".fa-cog").css("color", "#FC5E28");
    $("#serviceBtn2").css("background-color", "#040E26");
});


// SERVICE CARD 3
$("#serviceCard3").hover(function() {
    $(".fa-hammer").css("background-color", "#FC5E28");
    $(".fa-hammer").css("color", "#ffffff");
    $("#serviceBtn3").css("background-color", "#FC5E28");
}, function(){
    $(".fa-hammer").css("background-color", "#ffffff");
    $(".fa-hammer").css("color", "#FC5E28");
    $("#serviceBtn3").css("background-color", "#040E26");
});


// SERVICE CARD 4
$("#serviceCard4").hover(function() {
    $(".fa-pencil-ruler").css("background-color", "#FC5E28");
    $(".fa-pencil-ruler").css("color", "#ffffff");
    $("#serviceBtn4").css("background-color", "#FC5E28");
}, function(){
    $(".fa-pencil-ruler").css("background-color", "#ffffff");
    $(".fa-pencil-ruler").css("color", "#FC5E28");
    $("#serviceBtn4").css("background-color", "#040E26");
});

// SERVICE CARD 5
$("#serviceCard5").hover(function() {
    $(".fa-atom").css("background-color", "#FC5E28");
    $(".fa-atom").css("color", "#ffffff");
    $("#serviceBtn5").css("background-color", "#FC5E28");
}, function(){
    $(".fa-atom").css("background-color", "#ffffff");
    $(".fa-atom").css("color", "#FC5E28");
    $("#serviceBtn5").css("background-color", "#040E26");
});

// SERVICE CARD 6
$("#serviceCard6").hover(function() {
    $(".fa-gas-pump").css("background-color", "#FC5E28");
    $(".fa-gas-pump").css("color", "#ffffff");
    $("#serviceBtn6").css("background-color", "#FC5E28");
}, function(){
    $(".fa-gas-pump").css("background-color", "#ffffff");
    $(".fa-gas-pump").css("color", "#FC5E28");
    $("#serviceBtn6").css("background-color", "#040E26");
});









// PROJECTS HOVER

$("#pro-col1").hover(function() {
    // $("#pro-box").css("background-color", "#FC5E28");
    // $("#pro-box").children().css("color", "#FFFFFF");
    $("#pro-box1").addClass("project-onHover");
    $("#loc-text1").addClass("loc-txt");
    $("#plus1").css("opacity", "1");
}, function () {
    $("#pro-box1").removeClass("project-onHover");
    $("#loc-text1").removeClass("loc-txt");
    $("#plus1").css("opacity", "0");
});

$("#pro-col2").hover(function() {
    // $("#pro-box").css("background-color", "#FC5E28");
    // $("#pro-box").children().css("color", "#FFFFFF");
    $("#pro-box2").addClass("project-onHover");
    $("#loc-text2").addClass("loc-txt");
    $("#plus2").css("opacity", "1");
}, function () {
    $("#pro-box2").removeClass("project-onHover");
    $("#loc-text2").removeClass("loc-txt");
    $("#plus2").css("opacity", "0");
});

$("#pro-col3").hover(function() {
    // $("#pro-box").css("background-color", "#FC5E28");
    // $("#pro-box").children().css("color", "#FFFFFF");
    $("#pro-box3").addClass("project-onHover");
    $("#loc-text3").addClass("loc-txt");
    $("#plus3").css("opacity", "1");
}, function () {
    $("#pro-box3").removeClass("project-onHover");
    $("#loc-text3").removeClass("loc-txt");
    $("#plus3").css("opacity", "0");
});

$("#pro-col4").hover(function() {
    // $("#pro-box").css("background-color", "#FC5E28");
    // $("#pro-box").children().css("color", "#FFFFFF");
    $("#pro-box4").addClass("project-onHover");
    $("#loc-text4").addClass("loc-txt");
    $("#plus4").css("opacity", "1");
}, function () {
    $("#pro-box4").removeClass("project-onHover");
    $("#loc-text4").removeClass("loc-txt");
    $("#plus4").css("opacity", "0");
});

$("#pro-col5").hover(function() {
    // $("#pro-box").css("background-color", "#FC5E28");
    // $("#pro-box").children().css("color", "#FFFFFF");
    $("#pro-box5").addClass("project-onHover");
    $("#loc-text5").addClass("loc-txt");
    $("#plus5").css("opacity", "1");
}, function () {
    $("#pro-box5").removeClass("project-onHover");
    $("#loc-text5").removeClass("loc-txt");
    $("#plus5").css("opacity", "0");
});

$("#pro-col6").hover(function() {
    // $("#pro-box").css("background-color", "#FC5E28");
    // $("#pro-box").children().css("color", "#FFFFFF");
    $("#pro-box6").addClass("project-onHover");
    $("#loc-text6").addClass("loc-txt");
    $("#plus6").css("opacity", "1");
}, function () {
    $("#pro-box6").removeClass("project-onHover");
    $("#loc-text6").removeClass("loc-txt");
    $("#plus6").css("opacity", "0");
});




// TEAM HOVER


$("#team-col1").hover(function() {
    $("#plus1").css("opacity", "1");
}, function () {
    $("#plus1").css("opacity", "0");
});


$("#team-col2").hover(function() {
    $("#plus2").css("opacity", "1");
}, function () {
    $("#plus2").css("opacity", "0");
});


$("#team-col3").hover(function() {
    $("#plus3").css("opacity", "1");
}, function () {
    $("#plus3").css("opacity", "0");
});

$("#team-col4").hover(function() {
    $("#plus4").css("opacity", "1");
}, function () {
    $("#plus4").css("opacity", "0");
});

$("#team-col5").hover(function() {
    $("#plus5").css("opacity", "1");
}, function () {
    $("#plus5").css("opacity", "0");
});

$("#team-col6").hover(function() {
    $("#plus6").css("opacity", "1");
}, function () {
    $("#plus6").css("opacity", "0");
});

    



    // KEEP PLUS ICON ON HOVER
$("#plus1").hover(function() {
    $("#plus1").css("opacity", "1");
}, function () {
    $("#plus1").css("opacity", "0");
});

$("#plus2").hover(function() {
    $("#plus2").css("opacity", "1");
}, function () {
    $("#plus2").css("opacity", "0");
});

$("#plus3").hover(function() {
    $("#plus3").css("opacity", "1");
}, function () {
    $("#plus3").css("opacity", "0");
});

$("#plus4").hover(function() {
    $("#plus4").css("opacity", "1");
}, function () {
    $("#plus4").css("opacity", "0");
});

$("#plus5").hover(function() {
    $("#plus5").css("opacity", "1");
}, function () {
    $("#plus5").css("opacity", "0");
});

$("#plus6").hover(function() {
    $("#plus6").css("opacity", "1");
}, function () {
    $("#plus6").css("opacity", "0");
});






