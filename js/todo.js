//select li's and add click funcionality to add strike through
$("ul").on("click", "li" , function(){
    $(this).toggleClass("strike");    
});

//listen for click on any of the span
$("ul").on("click", "span", function(event){
        // $("li").on("click", function(){
        $(this).parent().fadeOut(500, function(){
            this.remove();
    }); 
    event.stopPropagation();
});

//listen for enter key press in input
$("input[type='text']").on('keypress', function(event){
    if(event.which === 13){
        var inputVal = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>"+" "+inputVal + "</li>");
    }
});

$(".fa-plus").on('click', function(){
    $("input[type='text']").fadeToggle();
});