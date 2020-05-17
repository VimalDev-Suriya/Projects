$(document).ready(function(){
    $(".car-color span").on("click",function(){
        $('.car-color span').removeClass('active')
        $(this).addClass('active')
        $("body").css("background",$(this).attr("data-color"));
        $(".car-info .price").css("color",$(this).attr("data-color"));
        $(".car-info a").css("color",$(this).attr("data-color"));
        $(".car-pic").css("background-image",$(this).attr("data-pic"))
    })

    $(window).scroll(function(){
        if($(this).scrollTop()>30){
            $("#top").fadeIn()
        }
        else{
            $("#top").fadeOut()
        }
    })
    $('#top').on('click',function(){
        $('html,body').animate({scrollTop:0},1000)
    })
})