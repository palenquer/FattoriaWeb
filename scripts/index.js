$(".fa-bars").click(() => {
    $("body").css({overflow: "hidden"});
    $("header").css({display: "none"});
    $(".fa-times").css({display: "block" });
    $(".fa-bars").css({display: "none"});
    $("#menu-mobile_content").css({display:"flex"});
})
$(".fa-times").click(() => {
    $("body").css({overflow: "visible"});
    $("header").css({display: "block"});
    $(".fa-times").css({ display: "none" });
    $(".fa-bars").css({display: "block"});
    $("#menu-mobile_content").css({display:"none"});
})
$(".mobile-link_services").click(() => {
    $("body").css({overflow: "visible"});
    $("header").css({display: "block"});
    $(".fa-times").css({ display: "none" });
    $(".fa-bars").css({display: "block"});
    $("#menu-mobile_content").css({display:"none", overflow:"visible"});
})
$(".mobile-link_differentials").click(() => {
    $("body").css({overflow: "visible"});
    $("header").css({display: "block"});
    $(".fa-times").css({ display: "none" });
    $(".fa-bars").css({display: "block"});
    $("#menu-mobile_content").css({display:"none", overflow:"visible"});
})
$(".mobile-link_personas").click(() => {
    $("body").css({overflow: "visible"});
    $("header").css({display: "block"});
    $(".fa-times").css({ display: "none" });
    $(".fa-bars").css({display: "block"});
    $("#menu-mobile_content").css({display:"none", overflow:"visible"});
})
$('#services-products').owlCarousel({
    loop:false,
    margin:10,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        900:{
            items:3,
        }
    }
})
$('#personas-content').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    nav: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        900:{
            items:3,
            nav:true
        }
    }
})