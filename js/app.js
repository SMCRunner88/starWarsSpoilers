//Prevent spoiler from appearing to non movie goers
//Solution: hide spoilers and reveal them through interaction



//1. Hide spoiler
$(".spoiler span").hide();

//2. Add a button
$(".spoiler").append("<button>Reveal Spoiler!</button>");

//3. When button is pressed -> show spoiler and get rid of button
$("button").click(function(){
  $(this).prev().show(); 
  $(this).remove();
});

