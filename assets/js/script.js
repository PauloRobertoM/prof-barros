(function($, window) {
    $('#owl-vitrine').owlCarousel({
        loop: true,
        autoplay: false,
        margin: 0,
        nav: false,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('#owl-depoimentos').owlCarousel({
        loop: true,
        autoplay: false,
        margin: 0,
        nav: false,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $("#btn-adv1").click(function(){
        $("#adv1").toggle("slow");
        $("#adv2").hide("slow");
        $("#adv3").hide("slow");
        $("#adv4").hide("slow");
        $("#btn-adv1").addClass("active");
        $("#btn-adv2").removeClass("active");
        $("#btn-adv3").removeClass("active");
        $("#btn-adv4").removeClass("active");
    });
    $("#btn-adv2").click(function(){
        $("#adv1").hide("slow");
        $("#adv2").toggle("slow");
        $("#adv3").hide("slow");
        $("#adv4").hide("slow");
        $("#btn-adv1").removeClass("active");
        $("#btn-adv2").addClass("active");
        $("#btn-adv3").removeClass("active");
        $("#btn-adv4").removeClass("active");
    });
    $("#btn-adv3").click(function(){
        $("#adv1").hide("slow");
        $("#adv2").hide("slow");
        $("#adv3").toggle("slow");
        $("#adv4").hide("slow");
        $("#btn-adv1").removeClass("active");
        $("#btn-adv2").removeClass("active");
        $("#btn-adv3").addClass("active");
        $("#btn-adv4").removeClass("active");
    });
    $("#btn-adv4").click(function(){
        $("#adv1").hide("slow");
        $("#adv2").hide("slow");
        $("#adv3").hide("slow");
        $("#adv4").toggle("slow");
        $("#btn-adv1").removeClass("active");
        $("#btn-adv2").removeClass("active");
        $("#btn-adv3").removeClass("active");
        $("#btn-adv4").addClass("active");
    });
})(jQuery, window);