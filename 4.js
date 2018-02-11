$(document).ready(function() {
    $("img").click(func1);
});
function func1() {
    var num, msg;
    num=Math.floor(3*Math.random());
    $(this).addClass("choice");
    
    $("img").each(function(index, value) {
        if(index==num){
            $(this).attr("src","images/open-chest.jpg");
            $("#button").css("visibility","visible")
            if($(this).hasClass("choice"))
                msg="Winner!";
            else
                msg="Whoops! Try again.";
        }
        else if($(this).hasClass("choice"))
            $(this).addClass("wrong");
        $(this).unbind("click");
});
    $("p").append(msg);
}