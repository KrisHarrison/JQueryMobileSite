$(document).ready(function(){
  $.ajax({
    url:'a2.xml',
    data:{},
    type:'GET',
    dataType:'xml',
    success:function(data){
      xmlDoc= data;

      //Main Page
      var mainTitle = $(xmlDoc).find('title:nth(0)').text();
      $("#mainTitle").html(mainTitle);
      var  username = $(xmlDoc).find('student:nth(0)').attr("username");
      $("#username").html(username);
      var studentNumber = $(xmlDoc).find('student:nth(1)').attr("studentNumber");
      $("#studentNumber").html(studentNumber);
      var studentName = $(xmlDoc).find('student:nth(2)').attr("studentName");
      $("#studentName").html(studentName);
      var studentProgram = $(xmlDoc).find('student:nth(3)').attr("studentProgram");
      $("#studentProgram").html(studentProgram);

      //Eternal EternalSunshine
      //Title and image
      var eternalTitle = $(xmlDoc).find('title:nth(1)').text();
      $("#eternalTitle").html(eternalTitle);
      var eternalSunshine = $(xmlDoc).find('title:nth(1)').attr("eternalImage");
      $("#eternalImage").html(
        "<img src='"+eternalSunshine+"'></img>"
      );
      //Plot
      var eternalPlot = $(xmlDoc).find('plot:nth(0)').text();
      $("#eternalPlot").html(eternalPlot);
      //Actors and Roles
      var eternalActor1 = $(xmlDoc).find('actor:nth(0)').text();
      $("#eternalActor1").html(eternalActor1);
      var eternalRole1 = $(xmlDoc).find('actor:nth(0)').attr("role");
      $("#eternalRole1").html(eternalRole1);
      var eternalActor2 = $(xmlDoc).find('actor:nth(1)').text();
      $("#eternalActor2").html(eternalActor2);
      var eternalRole2 = $(xmlDoc).find('actor:nth(1)').attr("role");
      $("#eternalRole2").html(eternalRole2);
      var eternalActor3 = $(xmlDoc).find('actor:nth(2)').text();
      $("#eternalActor3").html(eternalActor3);
      var eternalRole3 = $(xmlDoc).find('actor:nth(2)').attr("role");
      $("#eternalRole3").html(eternalRole3);
      //reviews
      var eternalReview1 = $(xmlDoc).find('magazine:nth(0)').text();
      $("#eternalReview1").html(eternalReview1);
      var eternalReview2 = $(xmlDoc).find('magazine:nth(1)').text();
      $("#eternalReview2").html(eternalReview2);
      var eternalReview3 = $(xmlDoc).find('magazine:nth(2)').text();
      $("#eternalReview3").html(eternalReview3);



      //Get out
      var getOutTitle = $(xmlDoc).find('title:nth(2)').text();
      $("#getOuttitle").html(getOutTitle);
      var getOutimg = $(xmlDoc).find('title:nth(2)').attr("getOutImg");
      $("#getOutImage").html(
        "<img src='"+getOutimg+"'></img>"
      );
      //Plot
      var getOutPlot = $(xmlDoc).find('plot:nth(1)').text();
      $("#getOutPlot").html(getOutPlot);
      //Actors and Roles
      var getOutActor1 = $(xmlDoc).find('actor:nth(3)').text();
      $("#getOutActor1").html(getOutActor1);
      var getOutRole1 = $(xmlDoc).find('actor:nth(3)').attr("role");
      $("#getOutRole1").html(getOutRole1);
      var getOutActor2 = $(xmlDoc).find('actor:nth(4)').text();
      $("#getOutActor2").html(getOutActor2);
      var getOutRole2 = $(xmlDoc).find('actor:nth(4)').attr("role");
      $("#getOutRole2").html(getOutRole2);
      var getOutActor3 = $(xmlDoc).find('actor:nth(5)').text();
      $("#getOutActor3").html(getOutActor3);
      var getOutRole3 = $(xmlDoc).find('actor:nth(5)').attr("role");
      $("#getOutRole3").html(getOutRole3);
      // Reviews
      var getOutReview1 = $(xmlDoc).find('magazine:nth(3)').text();
      $("#getOutReview1").html(getOutReview1);
      var getOutReview2 = $(xmlDoc).find('magazine:nth(4)').text();
      $("#getOutReview2").html(getOutReview2);
      var getOutReview3 = $(xmlDoc).find('magazine:nth(5)').text();
      $("#getOutReview3").html(getOutReview3);

      //The Dark Knight
      var darKnightTitle = $(xmlDoc).find('title:nth(3)').text();
      $("#darKnighttitle").html(darKnightTitle);
      var darKnightimg = $(xmlDoc).find('title:nth(3)').attr("darKnightImg");
      $("#darKnightImage").html(
        "<img src='"+darKnightimg+"'></img>"
      );
      //Plot
      var darKnightPlot = $(xmlDoc).find('plot:nth(2)').text();
      $("#darKnightPlot").html(darKnightPlot);
      //Actors and Roles
      var darknightActor1 = $(xmlDoc).find('actor:nth(6)').text();
      $("#darKnightActor1").html(darknightActor1);
      var darknightRole1 = $(xmlDoc).find('actor:nth(6)').attr("role");
      $("#darKnightRole1").html(darknightRole1);
      var darknightActor2 = $(xmlDoc).find('actor:nth(7)').text();
      $("#darKnightActor2").html(darknightActor2);
      var darknightRole2 = $(xmlDoc).find('actor:nth(7)').attr("role");
      $("#darKnightRole2").html(darknightRole2);
      var darknightActor3 = $(xmlDoc).find('actor:nth(8)').text();
      $("#darKnightActor3").html(darknightActor3);
      var darknightRole3 = $(xmlDoc).find('actor:nth(8)').attr("role");
      $("#darKnightRole3").html(darknightRole3);
      //Reviews
      var darknightReview1 = $(xmlDoc).find('magazine:nth(6)').text();
      $("#darKnightReview1").html(darknightReview1);
      var darknightReview2 = $(xmlDoc).find('magazine:nth(7)').text();
      $("#darKnightReview2").html(darknightReview2);
      var darknightReview3 = $(xmlDoc).find('magazine:nth(8)').text();
      $("#darKnightReview3").html(darknightReview3);
    }
  });
});
