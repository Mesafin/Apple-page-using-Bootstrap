
// $('h3').on('click', function(){
//     if($(window).innerWidth() <= 768){
//         if($(this).next('.footer-links-wrapper ul').fadeToggle()){
//             $(this).toggleClass('expanded')
//         }
//     }
// })


// second way
$(document).ready(function() {

    $('.footer-links-wrapper h3').click(function(){
        if($(window).width() <= 768){
            if($(this).next('ul').slideToggle(500)){
                $(this).toggleClass('expanded');
            }
        }
    });
});
$(window).on('resize', function(){
    location.reload();
});

    