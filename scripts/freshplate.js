
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