/** 
    1. Preloader
    2. Fixed-header
    3. Add active class in menu-item
    4. Play button pop up
*/

//*------------------------------------------------------------------------------*/
/* 1. Preloader
/*------------------------------------------------------------------------------*/
// makes sure the whole site is loaded
$(window).on("load",function() {
    // will first fade out the loading animation
 $("#preloader").fadeOut();
    // will fade out the whole DIV that covers the website.
 $("#status").fadeOut(9000);
})


//*------------------------------------------------------------------------------*/
/* 2. Fixed-header
/*------------------------------------------------------------------------------*/
$(window).scroll(function(){
    if ( matchMedia( 'only screen and (min-width: 1200px)' ).matches ) 
    {
        if ($(window).scrollTop() >= 50 ) {
            $('.ttm-stickable-header').addClass('fixed-header');
            $('.ttm-stickable-header').addClass('visible-title');
        }
        else {

            $('.ttm-stickable-header').removeClass('fixed-header');
            $('ttm-stickable-header').removeClass('visible-title');
            }
    }
});

//*------------------------------------------------------------------------------*/
/* 3. Add active class in menu-item
/*------------------------------------------------------------------------------*/

// let switchNavMenuItem = (menuItems) => {

//     var current = location.pathname

//     $.each(menuItems, (index, item) => {

//         $(item).removeClass('active')

//         if ((current.includes($(item).attr('href')) && $(item).attr('href') !== "/") || ($(item).attr('href') === "/" && current === "/")){
//             $(item).addClass('active')
//         }
//     })
// }

// $(document).ready(() => {   
//     switchNavMenuItem($('#menu li > a'))
// })

//*------------------------------------------------------------------------------*/
/* 4 . Play pop up
/*------------------------------------------------------------------------------*/

$(document).ready(function() {
$("#playbutton").on("click", function() {
    $("#videobox").fadeIn(0);
    $(this).hide();
    var videoURL = $('#video').prop('src');
    videoURL += "?autoplay=1";
    $('#video').prop('src',videoURL);
});

$("#close-btn").on("click", function() {
    $("#videobox").fadeOut(0);
    $("#playbutton").show(0);
});
});