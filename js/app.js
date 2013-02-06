//start loading the "real" form data in advance
var formHtml = "";
jQuery.get("normalForm.html", function(data){
    $("#replaceWithForm").html(data);
    $("#replaceWithForm").hide();
});
$("#myCustomForm").submit(function(){
    var username = $(this).find("#name").val();
    var email = $(this).find("#email").val();
     $(this).hide();
     $("#replaceWithForm").find("#fUsername").val(username);
    $("#replaceWithForm").find("#fEmail").val(email);
     $("#replaceWithForm").show(0);
});
