
//Global function variables

    var width = 300;
    var animationSpeed = 1000;
    var pause = 2000;
    var currentSlide = 1;
    var interval;

$(document).ready(function(){
     var $carousel = $('.carousel'); 
    //Have carousel started on page load
    startCarousel();
    $carousel.on('mouseenter',stopCarousel).on('mouseleave', startCarousel);
    
    //Toggle responsive navigation menu on click
    $('.responsive_nav_icon').click(hb_toggle_menu);
    
    //Open/Close side nav menu on click
    $('.side_nav_btn').click(side_nav_open);
    $('.side_nav_close').click(side_nav_close);
}); 

/* Function to start-stop Carousel */
function startCarousel(){
    
    var $slideBox = $('.carousel ul');
    var $slides = $('.carousel li');
    
        interval = setInterval(function(){
            $slideBox.animate({'margin-left':'-='+width},animationSpeed, function(){
                ($slideBox).find('li:last').after($slideBox.find('li:first'));
                $slideBox.css('margin-left',0);
            }); //End animate function     
        }, pause);//End Setinterval function
    };//End startCarousel function 
    
function stopCarousel(){
        clearInterval(interval);
    }

/* Function to toggle hamburger menu on mobile views */
function hb_toggle_menu(){
    $('.responsive_nav').toggleClass('responsive_nav_show');
}

/*Function to open side Nav*/
function side_nav_open(){
//    $('.side_nav').addClass('showSideNav');
    $(".side_nav").animate({left:'0'},10);
    $('.push_right').addClass('push_animation');
    
}

function side_nav_close(){
    //$('.side_nav').removeClass('showSideNav push_right');
    $(".side_nav").animate({left:'-500px'},10);
    $('.push_right').removeClass('push_animation');
}