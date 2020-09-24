$(document).ready(function(){
    $(".nav-button").click(function(){
        $(".nav-button").toggleClass("change");
        $(".display").toggleClass("show");
    });
    $(window).scroll(function(){
        let pos=$(this).scrollTop();
        if(pos>=610){
            $(".camera-img").addClass("from-left");
            $(".mission-text").addClass("from-right");
        } else{
            $(".camera-img").removeClass("from-left");
            $(".mission-text").removeClass("from-right");
        }
    });
    $(".gallery-list-item").click(function(){
        let atr=$(this).attr("data-filter");
        if(atr==="all"){
            $(".filter").show(300);
        } else {
            $(".filter").not("." + atr).hide(300);
            $(".filter").filter("." + atr).show(300);
        }
    });
    $(".gallery-list-item").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
    $(window).scroll(function(){
        let pos1=$(this).scrollTop();
        if(pos1>=4270){
            $(".card-1").addClass("movefromleft");
            $(".card-2").addClass("movefrombottom");
            $(".card-3").addClass("movefromright");
        } else {
            $(".card-1").removeClass("movefromleft");
            $(".card-2").removeClass("movefrombottom");
            $(".card-3").removeClass("movefromright");
        }
    })
});































