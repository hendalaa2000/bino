$(document).ready(function(){
    $(".button").click(function(){
        var name = $(this).attr("data-filter");
        if(name == "all")
        {
            $(".filter").show(2000);

        }else
        {
            $(".filter").not("."+name).hide(2000);  
            $(".filter").filter("."+name).show(2000);
        }
    });
    $(".navigation a").click(function(){
        $(this).addClass("active").sliblings().removeClass("active");
    });
});
$('.icons-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4 ,
            autoplay: false ,
            freeDrag: false ,
            loop: false ,
            mouseDrag: false
          
          
        }
    }
});
$('.blog-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4 ,
            autoplay: false ,
            freeDrag: false ,
            loop: false ,
            mouseDrag: false
          
          
        }
    }
});

$('.counter').counterUp({
    delay: 10,
    time: 1000
});
